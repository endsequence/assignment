import { DocumentClient } from "aws-sdk/clients/dynamodb";
import Product from "../model/Product";

export default class ProductService {

    private Tablename: string = "ProductsTable";

    constructor(private db: DocumentClient) { }

    async getAllProducts(): Promise<Product[]> {
        const products = await this.db.scan({
            TableName: this.Tablename,
        }).promise()
        return products.Items as Product[];
    }

    async createProduct(product: Product): Promise<Product> {
        await this.db.put({
            TableName: this.Tablename,
            Item: product
        }).promise()
        return product as Product;
    }

}