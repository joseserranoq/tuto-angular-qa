import { Order } from "./order";

export interface IShopDataAccess {
    getProductPrice(productId: number): number;
    save(orderId: number, order: Order): void;
}
