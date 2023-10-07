import { useToast } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ILogin } from "../interface/IUser"
import { API, setAuthToken } from "../lib/api"
import { useDispatch } from "react-redux"
import { LOGIN } from "../store/rootReducer"

export function useLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()

  const [form, setForm] = useState<ILogin>({
    username: "",
    password: ""
  })
  console.log("form", form)

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await API.post("/auth/login", form)
      console.log(response, "APANi")
      dispatch(LOGIN(response.data))
      setAuthToken(localStorage.token)
      toast({
        title: "Login success",
        status: "success",
      })
      navigate("/")
    } catch (err) {
      console.log(err)
      toast({
        title: "Email/Password is wrong",
        status: "error",
      })
    }

  }
  return { changeHandler, handleLogin }
}