import { Order } from "./order";

export class OrderLine {
    idItem: number;
    cantidad: number;
    order: Order;
    constructor(id: number, cantidad: number, order: Order) {
        this.idItem = id;
        this.cantidad = cantidad;
        this.order = order;
    }
    getSubTotal() {
        return this.cantidad * this.order.getDataAccess().getProductPrice(this.idItem);
    }

}
