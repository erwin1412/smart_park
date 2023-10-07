import { Request, Response } from 'express'
import TicketService from '../services/TicketService'

class TicketController {
    find(req: Request, res:Response){
        TicketService.find(req, res)
    }
    create(req:Request , res:Response){
        TicketService.create(req,res)
    }  
}

export default new TicketController()
