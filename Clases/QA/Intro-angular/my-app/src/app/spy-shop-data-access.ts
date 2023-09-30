import { IShopDataAccess } from "./ishop-data-access";
import { Order } from "./order";

export class SpyShopDataAccess implements IShopDataAccess {
    saveWasInvoked: boolean;
    constructor() {
        this.saveWasInvoked = false;
    }
    getProductPrice(productId: number): number {
        return 25;
    }
    save(orderId: number, order: Order): void {
        this.saveWasInvoked = true;
    }
    wasSaveInvoke(): boolean {
        return this.saveWasInvoked;
    }
}
