import { Person } from './person';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });
  
});
describe('Person 2', () => {
  let component: Person;
  beforeEach(() => {
    component = new Person();
  });
  it('Casos de prueba para validar que la edad es asignada correctamente', () => {
    [
      { age: 0 },
      { age: 5 },
      { age: 17 },
    ].forEach(({ age }) => {
      component.setAge(age);
      expect(component.getAge()).toBe(age);
    });
  });
  it('Casos de prueba para validar que la persona NO puede conducir', () => {
    [
      { age: 7 },
      { age: 6 },
      { age: 17 },
    ].forEach(({ age }) => {
      component.setAge(age);
      expect(component.canDrive()).toBeFalsy();
    });
  });
  it('Casos de prueba para validar el método canDrive', () => {
    [
      { age: 7, resultado:false },
      { age: 6,resultado:false },
      { age: 18, resultado:true },
      { age: 32, resultado:true },
    ].forEach(({ age, resultado }) => {
      component.setAge(age);
      expect(component.canDrive()).toBe(resultado);
    });
  });
});
