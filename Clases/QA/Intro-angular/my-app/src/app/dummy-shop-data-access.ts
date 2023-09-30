import { IShopDataAccess } from "./ishop-data-access";
import { Order } from "./order";

export class DummyShopDataAccess implements IShopDataAccess{
    getProductPrice(productId: number): number {
        throw new Error("Method not implemented.");
    }
    save(orderId: number, order: Order): void {
        throw new Error("Method not implemented.");
    }
}
