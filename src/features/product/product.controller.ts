import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    // fname:String = "lahiru";
    // lname:String = "gamage";
    constructor(private readonly productService:ProductService){}

    @Get('test')
    find(): any {
        // return JSON.stringify(['fname',this.fname]);
        return this.productService.all();
    }
}
