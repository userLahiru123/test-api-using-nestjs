import { Product } from "src/features/product/dto/product.entity";

export class SuccessResponse {
    private readonly status: String = "succesess";
    private data: any

    constructor(data: any) {
        this.data = data;
    }
}

export class ErrorRespose {
    private readonly status: String = "error";
    private error: String

    constructor(errorMessage: String) {
        this.error = errorMessage;
    }
}