import { useToast } from "@chakra-ui/react"
import { IMall } from "../interface/IMall"
import { API } from "../lib/api"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

export default function useGetMallList() {
  const [mallList, setMallList] = useState<IMall[]>([])
  const [previewImage, setPreviewImage] = useState<string>("")
  const toast = useToast()

  const [form, setForm] = useState<IMall>({
    name: "",
    district: "",
    address: "",
    image: "",
  })
  async function getData() {
    try {
      const response = await API.get("/mall")
      setMallList(response.data)
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

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData()
    formData.append("name", form.name)
    formData.append("district", form.district)
    formData.append("address", form.address)
    formData.append("image", form.image)

    try {
      const response = await API.post("/mall", formData)
      setForm({
        name: "",
        district: "",
        address: "",
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

  useEffect(() => {
      getData()
  }, [mallList])

  async function handleDelete (id: any) {
    try{
        await API.delete(`/mall/${id}`)
        getData()

        toast({
            title: "Mall Deleted.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })

    } catch(err) {
        console.log(err)
        toast({
            title: "Failed to Delete Mall",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
    }
  }


  return {
    changeHandler,
    handleSubmit,
    getData,
    handleDelete
  }
}
