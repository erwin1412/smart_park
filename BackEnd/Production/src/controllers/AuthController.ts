import { Request, Response } from "express";
import AuthService from "../services/AuthService";


class AuthController{
    register(req:Request , res:Response){
        AuthService.register(req,res)
    }  
}

export default new AuthController()
