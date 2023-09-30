import { MayorNumero } from './mayor-numero';

describe('MayorNumero', () => {
  it('should create an instance', () => {
    expect(new MayorNumero()).toBeTruthy();
  });
});
describe('MayorNumero', () => {
  it('Prueba simple', function () {
    expect(MayorNumero.obt_mayorNumero([3, 7, 9, 8])).toBe(9); });
  it('Prueba orden 1', function () {
    expect(MayorNumero.obt_mayorNumero([9, 7, 8])).toBe(9); });
  it('Prueba orden 2', function () {
    expect(MayorNumero.obt_mayorNumero([7, 9, 8])).toBe(9); });
  it('Prueba orden 3', function () {
    expect(MayorNumero.obt_mayorNumero([7, 8, 9])).toBe(9); });
  it('Prueba duplicados', function () {
    expect(MayorNumero.obt_mayorNumero([9, 7, 9, 8])).toBe(9); });
  it('Prueba un elemento', function () {
    expect(MayorNumero.obt_mayorNumero([7])).toBe(7); });
  it('Prueba números negativos', function () {
    expect(MayorNumero.obt_mayorNumero([-7, -8, -9])).toBe(-7); });
});
