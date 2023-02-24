import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from "../pages/Auth";
import Dashboard from '../pages/Dashboard';
import Wrapper from '../layout/Wrapper';
import Err404 from '../pages/Err404';
import Admin from '../pages/Admin';

// falta hacer router

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="login" />} />
            <Route index path='login' element={<Auth />} />
            <Route
                path=':id'
                element={
                    <Wrapper>
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='admin' element={<Admin />} />
                        <Route path='*' element={<Navigate to='dashboard' />} />
                    </Wrapper>
                }>
            </Route>
            <Route path='*' element={<Err404 />} />
        </Routes>
    )
}

/*
    <Wrapper>
                        <Navigate to="dashboard" />
                        <Route path='teachers' element={<Dashboard />} />
                    </Wrapper>
*/