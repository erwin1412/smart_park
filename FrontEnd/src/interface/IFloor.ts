export interface IFloor {
    id: string
    parkingCode: string
    isBooked: boolean
    mall: string
    createdAt: Date
}
export interface IFloorPost {
    parkingCode: string
    mall: string
    isBooked: boolean
}