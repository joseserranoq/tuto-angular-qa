import { IShopDataAccess } from "./ishop-data-access";
import { OrderLine } from "./order-line";

export class Order {
    id: number;
    dataAccess: IShopDataAccess;
    Lines: Array<OrderLine> = [];
    constructor(orderId: number,
        dataAccess: IShopDataAccess) {
        if (dataAccess == null) {
            throw new Error("dataAccess");
        }
        this.id = orderId;
        this.dataAccess = dataAccess;
        this.Lines = new Array<OrderLine>();
    }
    getLines() {
        return this.Lines;
    }
    setLines(id: number, cantidad: number, order: Order) {
        this.Lines.push(new OrderLine(id, cantidad, order));
    }
    getDataAccess() {
        return this.dataAccess;
    }
    save() {
        this.dataAccess.save(this.id, this);
    }

}
