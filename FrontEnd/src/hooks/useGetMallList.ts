import { useToast } from "@chakra-ui/react"
import { IMall, IMallPost } from "../interface/IMall"
import { API } from "../lib/api"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

export default function useGetMallList() {
  const [mallList, setMallList] = useState<IMall[]>([])
  const [previewImage, setPreviewImage] = useState<string>("")
  const toast = useToast()

  const [form, setForm] = useState<IMallPost>({
    name: "",
    location: "",
    image: "",
  })
  async function getData() {
    try {
      const response = await API.get("/mall")
      setMallList(response.data)
      console.log("ini mall", response.data)
      console.log("malsss", mallList)
    } catch (err) {
      console.log(err)
    }
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target

    if (files) {
      console.log("ini file image", files[0])
      const image = URL.createObjectURL(files[0])
      setPreviewImage(image)
      setForm({
        ...form,
        [name]: files[0],
      })
    } else {
      setForm({
        ...form,
        [name]: value,
      })
    }
  }

  async function handleMall(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData()
    formData.append("name", form.name)
    formData.append("district", form.location)
    formData.append("image", form.image)

    try {
      await API.post("/mall", formData)
      setForm({
        name: "",
        location: "",
        image: "",
      })
      setPreviewImage("")
      toast({
        title: "Add Mall Success",
        status: "success",
      })
    } catch (err) {
      console.log(err)
      toast({
        title: "Add Mall Failed",
        status: "error",
      })
    }
  }



  async function handleDelete(id: string) {
    try {
      await API.delete(`/mall/${id}`)
      getData()

      toast({
        title: "Mall Deleted.",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    } catch (err) {
      console.log(err)
      toast({
        title: "Failed to Delete Mall",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
  }

  async function updateMall(id: string) {
    const formData = new FormData()
    formData.append("name", form.name)
    formData.append("district", form.location)
    formData.append("image", form.image)

    try {
      await API.patch(`/mall/${id}`, formData)
      setForm({
        name: "",
        location: "",
        image: "",
      })
      setPreviewImage("")
      toast({
        title: "Update Mall Success",
        status: "success",
      })
      getData()
    } catch (err) {
      console.log(err)
      toast({
        title: "Update Mall Failed",
        status: "error",
      })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    changeHandler,
    handleMall,
    getData,
    handleDelete,
    updateMall,
    mallList,
    previewImage
  }
}
