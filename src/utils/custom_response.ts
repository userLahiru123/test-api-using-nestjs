import { Product } from "src/features/product/dto/product.entity";

export class SuccessResponse {
    status: String="succesess";
    data: Product[]

    constructor(data:Product[]){
       this.data = data;
    }
}

export class ErrorRespose{
    status :String = "error";
    error: String
    
    constructor(errorMessage:String){
        this.error = errorMessage;
    }
}