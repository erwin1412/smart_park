import {
    useToast,
  } from "@chakra-ui/react"
  import { ChangeEvent, FormEvent, useEffect } from "react"
  import { useState } from "react"
  import {  useNavigate } from "react-router-dom"
import { API } from "../lib/api.js"
import { IOfficer } from "../interface/IUser.js"
  
  export default async function useUserOfficer() {
      const [users, setUsers] = useState([])
      const [form, setForm] = useState<IOfficer>({
        fullname: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        role: "1"
      })
    const toast = useToast()
    const navigate = useNavigate()
  
  
   async function getUserOfficer() {
      try {
        const response = await API.get(`/officer`)
        setUsers(response.data)
  
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
    
      const handleUserSubmit = async (event: FormEvent) => {
        event.preventDefault()
        try {
          await API.post("/officer", form)
          toast({
            title: "User Officer Added",
            status: "success",
          })
          navigate("/")
        } catch (err) {
          console.log(err)
          toast({
            title: "Add User Officer Failed",
            status: "error",
          })
        }
      }
  
    async function deleteBtn(idOfficer: string) {
      try {
        await API.delete(`/officer/${idOfficer}`)
  
        getUserOfficer()
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

    const handleUpdate = async (idOfficer: string) => {
      try {
        await API.put(`/officer/${idOfficer}`, form)
        toast({
          title: "User Officer Updated",
          status: "success",
        })
        navigate("/")
      } catch (err) {
        console.log(err)
        toast({
          title: "Update User Officer Failed",
          status: "error",
        })
      }
    }
  

    useEffect(() => {
      getUserOfficer()
    }, [])

    return {getUserOfficer,  changeHandler,  handleUserSubmit, handleUpdate, deleteBtn, users}
  }
  

  