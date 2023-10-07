import axios from "axios"

export const API = axios.create({
  baseURL:
    "https://5125-2404-8000-1004-dc9-7817-5afc-a77f-d10.ngrok-free.app/api",
})

export function setAuthToken(token: string) {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete API.defaults.headers.common["Authorization"]
  }
}
