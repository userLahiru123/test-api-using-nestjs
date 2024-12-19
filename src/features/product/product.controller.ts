import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './dto/product.entity';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    findAll(): any {
        return this.productService.findAll();
    }

    @Get('/by-product-id/:id')
    findById(@Param('id') productId: String): any {
        return this.productService.findById(productId);
    }

    @Delete('/delete')
    deleteAll(): any {
        return this.productService.deleteAll();
    }

    @Delete('/delete/by-product-id/:id')
    deleteById(@Param('id') productId:String):any{
        return this.productService.deleteById(productId);
    }

    @Put('/update/:id')
    updateName(@Param('id') productId:String, @Body() updatedProduct:Partial<Product>):any{
        return this.productService.update(productId, updatedProduct);
    }
}
