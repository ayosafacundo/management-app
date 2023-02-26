import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from "../pages/Auth.jsx";
import Dashboard from '../pages/Dashboard.jsx';
import Wrapper from '../layout/Wrapper.jsx';
import Admin from '../pages/Admin.jsx';

// falta hacer router

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="login" />} />
            <Route path='/login' element={<Auth />} />
            <Route exact path="/:id/" element={<Wrapper />}>
                <Route index exact path='dashboard' element={<Dashboard />} />
                <Route exact path='admin' element={<Admin />} />
            </Route>
        </Routes>
    )
}


/*
            <Route path='*' element={<Err404 />} />

<Wrapper>
                        <Navigate to="dashboard" />
                        <Route path='teachers' element={<Dashboard />} />
                    </Wrapper>
*/