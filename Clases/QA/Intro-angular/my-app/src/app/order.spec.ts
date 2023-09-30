import { DummyShopDataAccess } from './dummy-shop-data-access';
import { Order } from './order';
import { StubShopDataAccess } from './stub-shop-data-access';
/*
describe('Order', () => {
  it('should create an instance', () => {
    expect(new Order()).toBeTruthy();
  });
  
});
*/
describe('Order test', function () {
  describe('Dummy', function () {
  it('Create order', function () {
  var dataAccess = new DummyShopDataAccess();
  var o = new Order(123, dataAccess);
  o.setLines(1234, 2, o);
  o.setLines(4321, 3, o); 
  expect(o.getLines().length).toBe(2);
  });
  });

  });
  describe('Stub', function () {
    it('Save order', function () {
      var dataAccess = new StubShopDataAccess();
      var o = new Order(123, dataAccess);
      o.setLines(1234, 2,o);
      expect(o.getLines()[0].getSubTotal()).toBe(50);
      });      
  });
