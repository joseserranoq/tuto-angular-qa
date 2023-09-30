import { TestBed,inject} from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('Sumar', function () {
    it('10 + 15 debe ser 25', inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service.sumar(10, 15)).toBe(25);
    }));
    it('10.5 + 15.5 debe ser 26', inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service.sumar(10.5, 15.5)).toBe(26);
    }));
    it('2 - 2 debe ser 0', inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service.restar(2, 2)).toBe(0);
    }));
    it('3 - 4 debe ser -1', inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service.restar(3, 4)).toBe(-1);
    }));
    it('3 x 2 debe ser 6', inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service.multiplicar(3, 2)).toBe(6);
    }));
    it('10 x -2 debe ser -20', inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service.multiplicar(10, -2)).toBe(-20);
    }));
    it('2 ** 3 debe ser 8', inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service.potencia(2, 3)).toBe(8);
    }));
    
});
  describe('Dividir', function () {
    it("2 dividido por 2 debe ser 1", inject([CalculadoraService], (service: CalculadoraService) => {
      expect(service.dividir(2, 2)).toBe(1);
    }));
    it("6 dividido por 0 debe generar una Excepción", inject([CalculadoraService], (service: CalculadoraService) => {
      expect(function () { service.dividir(6, 0); }).toThrowError(Error, 'División por cero');
      expect(function () { service.dividir(6, 0); }).toThrowError('División por cero');
      expect(function () { service.dividir(6, 0); }).toThrowError(Error);
      expect(function () { service.dividir(6, 0); }).toThrowError(/División por cero/);
    }));
  });
});
