import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register, ProtectedRoute } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AddJob, AllJobs, Profile, Stats, SharedLayout } from './pages/dashboard'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Dashboard />} /> */}
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Stats/>}/>
          <Route path='all-jobs' element={<AllJobs/>}/>
          <Route path='add-job' element={<AddJob/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route element={<Stats/>}/>
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' autoClose={5000} />
    </BrowserRouter>
  )
}

export default App
