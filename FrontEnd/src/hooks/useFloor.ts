import { useToast } from "@chakra-ui/react"
import { IFloor, IFloorPost } from "../interface/IFloor"
import { API } from "../lib/api"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function useFloor() {
  const [floorList, setFloorList] = useState<IFloor[]>([])
  const toast = useToast()
  const navigate = useNavigate()
  const [form, setForm] = useState<IFloorPost>({
    // parkingCode: "",
    isBooked: true,
    role: "1",
  })

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

  const updateFloor = async (id: string, updatedData: IFloorPost) => {
    try {
      const response = await API.put(`/floor/${id}`, updatedData)
      console.log(response.data.data)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleFloor = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/floor", form)
      console.log(response.data.data)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  async function deleteFloor(id: string) {
    try {
      await API.delete(`/floor/${id}`)

      getData()
      toast({
        title: "User telah dihapus",
      })
    } catch (err) {
      console.log(err)
      toast({
        title: "User Gagal dihapus",
        status: "error",
      })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    getData,
    changeHandler,
    handleFloor,
    updateFloor,
    deleteFloor,
    floorList,
  }
}
