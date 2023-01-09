import { dynamoDBClient } from "../model/index";
import ProductService from "./service"

const productService = new ProductService(dynamoDBClient());
export default productService;