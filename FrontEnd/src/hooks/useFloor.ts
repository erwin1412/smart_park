import { IFloor } from "../interface/IFloor"
import { API } from "../lib/api"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

export default function getFloor () {
    const [floorList, setFloorList] = useState<IFloor[]>([])

    async function getData() {
        try {
          const response = await API.get("/floor")
          setFloorList(response.data)
        } catch (err) {
          console.log(err)
        }
      }
      useEffect(() => {
        getData()
    }, [])

    
}