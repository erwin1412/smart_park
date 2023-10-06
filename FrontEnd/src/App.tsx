import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import './App.css'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { API, setAuthToken } from './lib/api'
import { RootState } from './store/slice/types/rootState'
import { AUTH_CHECK } from './store/rootReducer'

function App() {
  const [isloading, setIsLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.auth)

  const authCheck = async () => {
    try {
      setAuthToken(localStorage.token)
      const response = await API.get("/auth/check")
      console.log("ini auth token", response)
      dispatch(AUTH_CHECK(response.data.user))
      setIsLoading(false)
    } catch (err) {
      console.log(err, "auth error")
      setIsLoading(false)
      navigate("/login")
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      authCheck()
    } else {
      setIsLoading(false)
    }
  }, [])

  const IsLogin = () => {
    if (!auth.data.username) {
      return <Navigate to={"/login"} />
    } else {
      return <Outlet />
    }
  }

  const IsNotLogin = () => {
    if (auth.data.username) {
      return <Navigate to={"/"} />
    } else {
      return <Outlet />
    }
  }



  return (
    <>
     
    </>
  )
}

export default App
