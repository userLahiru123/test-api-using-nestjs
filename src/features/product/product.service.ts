import { Injectable } from '@nestjs/common';
import { Product } from './dto/product.entity';
import { ErrorRespose, SuccessResponse } from 'src/utils/custom_response';

@Injectable()
export class ProductService {

    private products: Product[] = [new Product("p001", "rice", 2), new Product("p002", "sugar", 4)];
    readonly regex = /^[A-Za-z]+$/;
    private selectedProduct: Product;

    isProductIdContains(productId: String): boolean {
        this.products.forEach(product=>{
            if(product.productId == productId){
                return true;
            }
        });
        return false;
    }

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

            if(this.isProductIdContains(productId)){
                return new ErrorRespose("product id not contains");
            }

            this.selectedProduct = this.products.find(product => product.productId === productId);
            if (this.selectedProduct == null || undefined) {
                return new SuccessResponse("empty");
            }
            return new SuccessResponse(this.selectedProduct);

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
            if (productId == null || undefined) {
                return new ErrorRespose("invalid product id");
            }

            if(this.isProductIdContains(productId)){
                return new ErrorRespose("product id not contains");
            }

            this.products = this.products.filter(product => product.productId != productId);

            return new SuccessResponse(this.products);
        } catch (error) {
            return new ErrorRespose(error);
        }
    }

    update(productId: String, updatedProduct: Partial<Product>): any {
        try {
            if (productId == null || undefined) {
                return new ErrorRespose("invalid product id");
            }

            if(this.isProductIdContains(productId)){
                return new ErrorRespose("product id not contains");
            }

            // if (updatedProduct == null || undefined) {
            //     return new ErrorRespose("some details missing");
            // }

            if (updatedProduct.name != null) {
                if (updatedProduct.name.length == 0 || updatedProduct.name.length > 15 || !this.regex.test(updatedProduct.name.toString())) {
                    return new ErrorRespose("invalid name");
                }
            }

            if (updatedProduct.quantity != null && updatedProduct.quantity < 0) {
                return new ErrorRespose("invalid quantity");
            }

            if (this.products.find(product => product.productId == productId)) {
                Object.assign(this.products.find(product => product.productId == productId), updatedProduct);
            }

            return new SuccessResponse(this.products);
        } catch (error) {
            return new ErrorRespose(error);
        }
    }
}
