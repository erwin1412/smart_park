import { useToast } from "@chakra-ui/react"
import { IFloor, IFloorPost } from "../interface/IFloor"
import { API } from "../lib/api"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ITicket, ITicketPost } from "../interface/ITicket"

export default function useTicket() {
  const [ticketList, setTicketList] = useState<ITicket[]>([])
  const [floorList, setFloorList] = useState<IFloor[]>([])

  const toast = useToast()
  const navigate = useNavigate()
  const {floorId} = useParams()

  const [selectedSpot, setSelectedSpot] = useState<
    string
  >("")

  const [form, setForm] = useState<ITicketPost>({
    userId: "57f4b2a3-48f8-41c7-880b-d24208a79395",
    noKendaraan: "",
    floor: "2345a0a6-6528-11ee-8017-98460a925eec"
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
      const response = await API.post(`/ticket`, {
        noKendaraan: form.noKendaraan,
       
      })
      console.log(response.data.data)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }
  async function getFloor() {
    try {
      const response = await API.get("/floor")
      const set = response.data
      setFloorList(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { getData, changeHandler, handleCheckin, ticketList, form}
}
