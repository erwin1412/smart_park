import { useToast } from "@chakra-ui/react"
import { useState, ChangeEvent, FormEvent } from "react"
import { IRegister } from "../interface/IUser"
import { API } from "../lib/api"
import { useNavigate } from "react-router-dom"

export function useRegister () {
  const navigate = useNavigate()
  const toast = useToast()

  const [form, setForm] = useState<IRegister>({
    fullname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  })

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/auth/register", form)
      toast({
        title: "Register Berhasil",
        status: "success",
      })
      navigate("/")
    } catch (err) {
      console.log(err)
      toast({
        title: "Register Gagal",
        status: "error",
      })
    }
  }

  return { changeHandler, handleRegister }
}
