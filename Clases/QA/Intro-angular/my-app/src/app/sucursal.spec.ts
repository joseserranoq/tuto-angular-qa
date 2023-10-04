import { Client } from './client';
import { Count } from './count';
import { Sucursal } from './sucursal';
import { mock, when, instance, verify } from 'ts-mockito';

/*describe('Sucursal', () => {
  it('should create an instance', () => {
    expect(new Sucursal()).toBeTruthy();
  });
});*/
describe('Sucursal', () => {
  let cliente: Client;
  let sucursal: Sucursal;
  let mockedCuenta = mock<Count>();
  let cuenta = instance(mockedCuenta);
  var withdrawlAmount2000 = 200000;
  var numeroCuenta: number = 12345;
  let balance: number = 100000;
  beforeEach(() => {
    sucursal = new Sucursal("Florencia", "Florencia");
    cliente = new Client("marlen", "trevino", "25-01-1988", "2401-3117", "Aguas Zarcas", "yensy@gmail.com");
    mockedCuenta = mock<Count>();
    cuenta = instance(mockedCuenta)
    sucursal.setClientes(cliente);
    cliente.setCuentas(cuenta);
    cuenta.setCantidadDinero(balance);
    cuenta.setNumCuenta(numeroCuenta);
  });

  it('1.Saldo de cuenta', function () {
    when(mockedCuenta.getCantidadDinero()).thenReturn(balance);
    var saldo = cuenta.getCantidadDinero();
    expect<number>(saldo).toBe(balance);
  });

  it('2.Agregar nueva cuenta a cliente', function () {
    var cuenta2 = instance(mockedCuenta);
    cliente.setCuentas(cuenta2);
    expect(cliente.getCuentas().length).toBe(2);
  });

  it('3.Retirar monto válido', function () {
    var balanceAmount3000 = 300000;
    when(mockedCuenta.getCantidadDinero()).thenReturn(balanceAmount3000);
    when(mockedCuenta.getNumCuenta()).thenReturn(numeroCuenta);
    when(mockedCuenta.retirar(withdrawlAmount2000)).thenReturn(balance);
    var saldo = cliente.retirar(withdrawlAmount2000, numeroCuenta);
    expect(saldo).toBe(balance);
  });

  it('4.Retirar más de lo permitido', function () {
    when(mockedCuenta.getCantidadDinero()).thenReturn(balance);
    when(mockedCuenta.getNumCuenta()).thenReturn(numeroCuenta);
    expect(function () {
      cliente.retirar(withdrawlAmount2000, numeroCuenta);
    }).toThrowError(Error, "Fondos insuficientes");
    verify(mockedCuenta.retirar(withdrawlAmount2000)).never();
  });

  it('a. Se abre una cuenta y se verifica que el monto minimo es 5000', function () {
    let cuenta3 = instance(mockedCuenta);
    cuenta3.setCantidadDinero(5000);
    cliente.setCuentas(cuenta3);
    when(mockedCuenta.getCantidadDinero()).thenReturn(5000);
    expect(cliente.getCuentas()[1].getCantidadDinero()).toBe(5000);
  });

  it('b. La cuenta esta en 0, se realizan 2 depositos validos y se verifique que el saldo de la cuenta sea igual al monto de los 2 depositos', function(){
    let cuenta4 = instance(mockedCuenta);
    cuenta4.setCantidadDinero(0);
    cliente.setCuentas(cuenta4);
    let withdrawAmount3000 = 300000;
    cliente.getCuentas()[1].depositar(withdrawlAmount2000);
    cliente.getCuentas()[1].depositar(withdrawAmount3000);
    when(mockedCuenta.getCantidadDinero()).thenReturn(withdrawAmount3000 + withdrawlAmount2000);
    expect(cliente.getCuentas()[1].getCantidadDinero()).toBe(500000);
  });

  it('c. Al liquidar la cuenta de un cliente en una suscursal, el metodo devuelve el saldo correcto de la cuenta',function(){
    let cuenta5 = instance(mockedCuenta);
    let saldo = 5000;
    cuenta5.setCantidadDinero(saldo);
    cliente.setCuentas(cuenta5);

    when(mockedCuenta.getCantidadDinero()).thenReturn(saldo);
    when(mockedCuenta.liquidar()).thenReturn(saldo);
    expect(cliente.getCuentas()[1].liquidar()).toBe(5000);
  });
  it('d. Verifique que al liquidar una cuenta una cuenta de  una cliente de una sucursal, que la cantidad de cuentas disminuye en 1',function(){
    let cuenta6 = instance(mockedCuenta);
    cliente.setCuentas(cuenta6);
    when(mockedCuenta.liquidar()).thenCall(()=>{cliente.getCuentas().pop()});
    cliente.getCuentas()[1].liquidar();
    expect(cliente.getCuentas().length).toBe(1);
  });
});
