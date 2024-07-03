import About from '@app/pages/About/About';
import Home from '@app/pages/Home/Home';
import Login from '@app/pages/Login';
import Logout from '@app/pages/Logout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';
import PlayerRoutes from './PlayerRoutes';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/about' Component={About} />
                <Route path='/login' Component={Login} />
                <Route path='/logout' Component={Logout} />
                <Route path='/player/*'
                element = {
                    <ProtectedRoute>
                        <PlayerRoutes/>
                    </ProtectedRoute>
                }
                ></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;