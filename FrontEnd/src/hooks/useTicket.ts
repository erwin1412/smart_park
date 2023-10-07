import { useToast } from "@chakra-ui/react"
import { IFloor, IFloorPost } from "../interface/IFloor"
import { API } from "../lib/api"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ITicket, ITicketPost } from "../interface/ITicket"

export default function useTicket() {
  const [ticketList, setTicketList] = useState<ITicket[]>([])
  const toast = useToast()
  const navigate = useNavigate()
  const [form, setForm] = useState<ITicketPost>({
    noKendaraan: "",
    floorId: ""
  })

  async function getData() {
    try {
      const response = await API.get("/ticket")
      setTicketList(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleCheckin = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/checkin/create", form)
      console.log(response.data.data)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { getData, changeHandler, handleCheckin }
}
