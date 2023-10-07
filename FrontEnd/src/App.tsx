import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { API, setAuthToken } from "./lib/api";
import { RootState } from "./store/types/rootState";
import { AUTH_CHECK } from "./store/rootReducer";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Home from "./pages/home";
import HistoryPage from "./pages/history";
import ReservationPage from "./pages/reservation";
import DispatcherHistoryPage from "./pages/dispatcherHistory";
import ReportPage from "./pages/fileAReport";

function App() {
  const dispatch = useDispatch();

  const [, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  console.log(auth);

  async function authCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/auth/check");
      dispatch(AUTH_CHECK(response.data));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      navigate("/auth/login");
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      authCheck();
    } else {
      setIsLoading(false);
    }
  }, []);

  const token = localStorage.getItem("token");

  return (
    <>
      <React.Fragment>
        {token ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path='/dispatcher_history' element={<DispatcherHistoryPage />} />
            <Route path='/file_a_report' element={<ReportPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/auth/login" />} />
            <Route path="/history" element={<Navigate to="/auth/login" />} />
            <Route
              path="/reservation"
              element={<Navigate to="/auth/login" />}
            />
            <Route path='/dispatcher_history' element={<Navigate to="/auth/login" />} />
            <Route path='/file_a_report' element={<Navigate to="/auth/login" />} />

            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
          </Routes>
        )}
      </React.Fragment>
    </>
  );
}

export default App;
