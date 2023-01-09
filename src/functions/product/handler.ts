import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { v4 } from "uuid";
import productsService from '../../service/index';

interface ProductRequest {
    "title": string;
    "description": string;
}

export const getAllProducts = middyfy(async (): Promise<APIGatewayProxyResult> => {
    const products = await productsService.getAllProducts();
    return formatJSONResponse({ products })
})

export const createProduct = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const productRequest: ProductRequest = JSON.parse(JSON.stringify(event.body));
        const product = await productsService.createProduct({
            productId: v4(),
            title: productRequest.title || "title",
            description: productRequest.description || "description",
            createdAt: new Date().toISOString()
        })
        return formatJSONResponse({ product });
    } catch (e) {
        return formatJSONResponse({ status: 500, message: e });
    }
})