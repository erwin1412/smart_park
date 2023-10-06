import { Request, Response } from "express";
import ProductService from "../services/ProductService";


class ProductController{
    createProduct(req:Request , res:Response){
        ProductService.createProduct(req,res)
    }  
}

export default new ProductController()