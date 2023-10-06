import { IAuth } from "../../interface/IUser"
import { createSlice } from "@reduxjs/toolkit"
import { setAuthToken } from "../../lib/api"

const initialAuthSlice: { data: IAuth } = {
  data: {
    id: "",
    fullname: "",
    username: "",
    email: "",
    phone: "",
    role: "",
  },
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthSlice,
  reducers: {
    LOGIN: (state, action) => {
      const payload = action.payload
      setAuthToken(payload.token)
      localStorage.setItem("token", payload.token)

      state.data.id = payload.user.id
      state.data.fullname = payload.user.full_name
      state.data.username = payload.user.username
      state.data.email = payload.user.email
      state.data.phone = payload.user.phone
      state.data.role = payload.user.role
    },
    AUTH_CHECK: (state, action) => {
      const payload = action.payload
      state.data = payload
    },

    LOGOUT: (state) => {
      localStorage.removeItem("token")
      state.data.id = ""
      state.data.fullname = ""
      state.data.username = ""
      state.data.email = ""
    },
  },
})
