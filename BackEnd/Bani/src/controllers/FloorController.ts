import { Request, Response } from "express";
import FloorService from "../services/FloorService";

class FloorController {
    find(req:Request , res:Response){
        FloorService.find(req,res)
    }
    update(req: Request, res: Response){
        FloorService.update(req,res)
    }
}

export default new FloorController()
