import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Wrapper from '../layout/Wrapper.jsx'; //Sidebar, header and logo all-in-one Wrapper with PrivateRouting
/* Pages */
import Auth from "../pages/Auth.jsx";
import Dashboard from '../pages/Dashboard.jsx';
import Admin from '../pages/Admin.jsx';
import Teacher from '../pages/Teacher.jsx';
import Library from '../pages/Library.jsx';
import Fees from '../pages/Fees.jsx';

// falta hacer router

export default function Router() {

    const { state } = useLocation();

    return (
        <Routes>
            <Route path='/' element={<Navigate to="login" replace={true} state={state} />} />
            <Route path='login' element={<Auth />} />
            <Route exact path=":id" element={<Wrapper />}>
                <Route index exact path='dashboard' element={<Dashboard />} />
                <Route exact path='admin' element={<Navigate to="dashboard" replace={true} state={state} />} />
                <Route exact path='admin/settings' element={<Admin />} />
                <Route exact path='teacher' element={<Teacher />} />
                <Route exact path='library' element={<Library />} />
                <Route exact path='fees' element={<Fees />} />

            </Route>
        </Routes>
    )
}