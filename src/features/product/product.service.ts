import { Injectable } from '@nestjs/common';
import { Product } from './dto/product.entity';
import { ErrorRespose, SuccessResponse } from 'src/utils/custom_response';

@Injectable()
export class ProductService {

    private products: Product[] = [new Product("p001", "rice", 2), new Product("p002", "sugar", 4)];

    readonly regex = /^[A-Za-z]+$/;

    // all(): any {
    //     return new SuccessResponse(this.products);
    // }


    saveProduct(product: Product): any {
        try {
            this.products.push(product);

            return new SuccessResponse(this.products);
        } catch (error) {
            return new ErrorRespose(error);
        }
    }

    findAll(): any {
        try {
            return new SuccessResponse(this.products);
        } catch (error) {
            return new ErrorRespose(error);
        }
    }

    findById(productId: String): any {
        try {
            if (productId == null || undefined) {
                return new ErrorRespose("invalid product id");
            }

            return new SuccessResponse(this.products.find(product => product.productId === productId));

        } catch (error) {
            return new ErrorRespose(error);
        }
    }

    deleteAll(): any {
        try {
            this.products = [];

            return new SuccessResponse(this.products);
        } catch (error) {
            return new ErrorRespose(error);
        }
    }

    deleteById(productId: String): any {
        try {
            if(productId == null || undefined){
                return new ErrorRespose("invalid product id");
            }
            this.products.slice(this.products.findIndex(product => product.productId === productId), 1);

            return new SuccessResponse(this.products);
        } catch (error) {
            return new ErrorRespose(error);
        }
    }

    updateName(productId: String, name: String): any {
        // for (let index = 0; index < this.products.length; index++) {
        //     const element = this.products[index];
        //     if (element.productId = productId) {
        //         element.name = name;
        //     }
        // }

        try {
            if(productId == null || undefined){
                return new ErrorRespose("invalid product id");
            }

            if(name.length == 0 || name.length >10 || !this.regex.test(name.toString())){
                return new ErrorRespose("invalid name");
            }

            this.products.forEach(element => {
                if (element.productId == productId) {
                    element.name = name
                }
            });

            return new SuccessResponse(this.products);
        } catch (error) {
            return new ErrorRespose(error);
        }
    }

    updateQuantity(productId: String, quantity: number): any {

        try {
            if(productId == null || undefined){
                return new ErrorRespose("invalid product id");
            }

            if(quantity < 0){
                return new ErrorRespose("invalid quantity");
            }

            this.products.forEach(element => {
                if (element.productId == productId) {
                    element.quantity = quantity;
                }
            });

            return new SuccessResponse(this.products);
        } catch (error) {
            return new ErrorRespose(error);
        }
    }
}
