import { Request, Response } from "express";
import CategoryService from "../services/CategoryService";


class CategoryController{
    createCategory(req:Request , res:Response){
        CategoryService.createCategory(req,res)
    }  
}

export default new CategoryController()