import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import HomePage from './pages/home'
import HistoryPage from './pages/history'
import ReservationPage from './pages/reservation'
import DispatcherHistoryPage from './pages/dispatcherHistory'
import ReportPage from './pages/fileAReport'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/register' element={<RegisterPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/reservation' element={<ReservationPage />} />

        {/* Dispatcher (Petugas) Routes to be modified to be dynamic later */}
        <Route path='/dispatcher_history' element={<DispatcherHistoryPage />} />
        <Route path='/file_a_report' element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
