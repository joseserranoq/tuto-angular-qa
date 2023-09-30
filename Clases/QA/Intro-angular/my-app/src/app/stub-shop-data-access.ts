import { IShopDataAccess } from "./ishop-data-access";
import { Order } from "./order";

export class StubShopDataAccess implements IShopDataAccess{
    getProductPrice(productId: number): number {
        return 25;
    }
    save(orderId: number, order: Order): void {
        throw new Error("Method not implemented.");
    }
}
