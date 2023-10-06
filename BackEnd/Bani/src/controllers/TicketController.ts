import { Request, Response } from 'express'
import TicketService from '../services/TicketService'

class TicketController {
    create(req:Request , res:Response){
        TicketService.create(req,res)
    }  
}

export default new TicketController()
