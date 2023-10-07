import { IFloor } from "./IFloor"

export interface ITicket {
    id: string
    noKendaraan: string
    floorId: IFloor
}
export interface ITicketPost {
    noKendaraan: string
    floorId: IFloor
  
  
    
}