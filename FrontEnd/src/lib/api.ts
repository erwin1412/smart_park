import axios from "axios"

export const API = axios.create({
  baseURL: "https://8848-180-252-173-171.ngrok-free.app/api",
})

export function setAuthToken(token: string) {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete API.defaults.headers.common["Authorization"]
  }
}
