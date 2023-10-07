import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useDummyForm() {
  const [form, setForm] = useState({
    id: 0,
    parkingCode: '',
    isBooked: false,
    plateNumber: '',
    mallName: "Mal Kelapa Gading",
    mallLocation: "Jakarta Utara"
  })

  const handleDummyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm({...form, [name]: value})
  }

  const navigate = useNavigate()
  const handleDummySubmit = (event: React.FormEvent) => {
    event.preventDefault()
    localStorage.setItem('formData', JSON.stringify(form))
    navigate('/history')
  }

  return { handleDummyChange, handleDummySubmit, form }
}