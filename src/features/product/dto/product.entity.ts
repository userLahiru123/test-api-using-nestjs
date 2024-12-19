export class Product {
    productId: String;
    name: String;
    quantity: number

    constructor(productId: String, name: String, quantity: number) {
        this.productId = productId;
        this.name = name;
        this.quantity = quantity;
    }
}