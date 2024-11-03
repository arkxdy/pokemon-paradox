import About from '@app/pages/About/About';
import Home from '@app/pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';
import PlayerRoutes from './PlayerRoutes';
import Layout from '@app/components/template/Layout';
import Error from '@app/components/template/Error';
import Pokemon from '@app/components/Pokemon';
import Admin from '@app/pages/Admin/Admin';
import AdminRoutes from './AdminRoutes';
import Signin from '@app/pages/Signin';
import Signout from '@app/pages/Signout';
import Signup from '@app/pages/Signup';
import AllPokemon from '@app/pages/AllPokemon/AllPokemon';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' Component={Layout}>
                    <Route path='/' Component={Home} />
                    <Route path='/all' Component={AllPokemon}></Route>
                    <Route path='/:pokemon' Component={Pokemon}></Route>
                    <Route path='/about' Component={About} />
                    <Route path='/login' Component={Signin} />
                    <Route path='/register' Component={Signup} />
                    <Route path='/logout' Component={Signout} />
                    <Route path='/player/*'
                    element = {
                        <ProtectedRoute>
                            <PlayerRoutes/>
                        </ProtectedRoute>
                    }
                    ></Route>
                    <Route path='/admin/*'
                    element = {
                        <AdminRoutes>
                            <Admin></Admin>
                        </AdminRoutes>
                    }
                    ></Route>
                    <Route path='*' Component={Error}></Route>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;