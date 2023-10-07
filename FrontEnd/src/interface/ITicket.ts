import { IFloor } from "./IFloor"
import { IAuth } from "./IUser"

export interface ITicket {
    id: string
    noKendaraan: string
    floorId: IFloor
}
export interface ITicketPost {
    noKendaraan: string
    floor: string
    userId: string
  
}