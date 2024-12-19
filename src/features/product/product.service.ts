import { Injectable } from '@nestjs/common';
import { Product } from './dto/product.entity';

@Injectable()
export class ProductService {

    private products: Product[] = [];
    private product: Product;

    saveProduct(product: Product): void {
        this.products.push(product);
    }

    findAll(): Product[] {
        return this.products;
    }

    findById(productId: String): Product {
        return this.products.find(product => product.productId === productId);
    }

    deleteAll(): void {
        this.products = [];
    }

    deleteById(productId: String): void {
        this.products.slice(this.products.findIndex(product => product.productId === productId), 1);
    }

    updateName(productId: String, name: String): void {
        // for (let index = 0; index < this.products.length; index++) {
        //     const element = this.products[index];
        //     if (element.productId = productId) {
        //         element.name = name;
        //     }
        // }

        this.products.forEach(element => {
            if (element.productId == productId) {
                element.name = name
            }
        });
    }

    updateQuantity(productId: String, quantity: number): void {
        this.products.forEach(element => {
            if (element.productId == productId) {
                element.quantity = quantity;
            }
        });
    }
}
