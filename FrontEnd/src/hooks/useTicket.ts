// import { IFloor, IFloorPost } from "../interface/IFloor"
import { API } from "../lib/api"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ITicket, ITicketPost } from "../interface/ITicket"

export default function useTicket() {
  const [ticketList, setTicketList] = useState<ITicket[]>([])
  const navigate = useNavigate()
  const { ticketId } = useParams()

  const [selectedSpot, setSelectedSpot] = useState<
    string
  >("")

  const [form, setForm] = useState<ITicketPost>({
    noKendaraan: "",
    floorId: {
      parkingCode: selectedSpot,
      isBooked: true,

    }
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

  const handleCheckin = async (event: FormEvent<Element>) => {
    event.preventDefault()
    try {
      const response = await API.post(`/ticket/${ticketId}`, form)
      console.log(response.data.data)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { getData, changeHandler, handleCheckin, ticketList, setSelectedSpot }
}
