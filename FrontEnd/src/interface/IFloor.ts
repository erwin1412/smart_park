import { IMall } from "./IMall"

export interface IFloor {
    id: string
    parkingCode: string
    isBooked: boolean
    mallId: IMall
    created_at: string
    

}
export interface IFloorPost {

    // parkingCode: string
    isBooked: boolean
    role: string
}