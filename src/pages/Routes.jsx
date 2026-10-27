import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Dashboard from './Dashboard'
import Auth from './Auth'
import ProtectedRoute from '../components/Misc/ProtectedRoute'
import { useAuth } from '../context/Auth'

const Routers = () => {
    const { isAuth } = useAuth()
    return (
        <>
            <Routes>
                <Route path='/*' element={<Frontend />} />
                <Route path='/auth/*' element={!isAuth ? <Auth /> : <Navigate to="/dashboard" />} />
                <Route path='/dashboard/*' element={<ProtectedRoute Component={Dashboard} />} />
            </Routes>
        </>
    )
}

export default Routers