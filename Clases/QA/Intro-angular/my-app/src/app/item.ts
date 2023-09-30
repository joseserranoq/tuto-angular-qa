export class Item {
    id: number;
    descripcion: String;
    marca: String;
    price: number;
    constructor(id: number, descripcion: String, marca: String, precio: number) {
        this.id = id;
        this.descripcion = descripcion;
        this.marca = marca;
        this.price = precio;
    }
    getID() {
        return this.id;
    }
    getDescripcion() {
        return this.descripcion;
    }
    getMarca() {
        return this.marca;
    }
    getUnitPrice() {
        return this.price;
    }

}
