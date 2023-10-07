import { useEffect, useState } from "react"
import { API } from "../lib/api"

export default function useReport() {
  const [officeReport, setOfficeReport] = useState([])
  const [year, setYear] = useState<string>("")
  const [created_at, setCreatedAt] = useState<string>("")
  const [month, setMonth] = useState<string>("")

  async function getReportOfficer() {
    try {
      const response = await API.get(`/report`)
      setOfficeReport(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  async function getReportDay() {
    try {
      const response = await API.get(`/report/book-days`, {
        params: { created_at },
      })
      setOfficeReport(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  async function getReportMonth() {
    try {
      const response = await API.get(`/report/book-month`, {
        params: { month },
      })
      setOfficeReport(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  async function getReportYear() {
    try {
      const response = await API.get(`/report/book-year`, {
        params: { year },
      })
      setOfficeReport(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getReportOfficer()
    getReportDay()
    getReportMonth()
    getReportYear
  }, [])

  return { getReportOfficer, getReportDay, getReportMonth, getReportYear, officeReport, setYear, setCreatedAt, setMonth }
}
