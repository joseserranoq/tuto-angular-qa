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



});
