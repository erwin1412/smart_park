export interface IDummy {
  selectedSpot: string | number | readonly string[] | undefined
  plateNumber: string
  isBooked: boolean
  mallName: string
  mallLocation: string
  createdAt: Date | string 
}