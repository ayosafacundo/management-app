import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Wrapper from '../layout/Wrapper.jsx'; //Sidebar, header and logo all-in-one Wrapper with PrivateRouting
/* Pages */
import Auth from "../pages/Auth.jsx";
import Dashboard from '../pages/Dashboard.jsx';
import Admin from '../pages/Admin.jsx';
import Teacher from '../pages/Teacher.jsx';
import Library from '../pages/Library.jsx';
import Fees from '../pages/Fees.jsx';
import WIP from '../pages/WIP.jsx';
import Themes from '../pages/Themes.jsx';

export default function Router() {

    const { state } = useLocation();

    return (
        <Routes>
            <Route path='/' element={<Navigate to="login" replace={true} state={state} />} />
            <Route path='login' element={<Auth />} />
            <Route exact path=":id" element={<Wrapper />}>
                <Route index exact path='dashboard' element={<Dashboard />} />  {/* TODO */}
                <Route exact path='admin'>
                    <Route exact path='courses' element={<Admin />} />          {/* TODO */}
                    <Route exact path='settings' element={<WIP />} />           {/* TODO */}
                </Route>
                <Route exact path='student'>
                    <Route exact path='home' element={<WIP />} />               {/* TODO */}
                    <Route exact path='courses' element={<WIP />} />            {/* TODO */}
                    <Route exact path='settings' element={<WIP />} />           {/* TODO */}
                </Route>
                <Route exact path='teacher'>
                    <Route exact path='home' element={<Teacher />} />           {/* TODO */}
                    <Route exact path='courses' element={<WIP />} />            {/* TODO */}
                    <Route exact path='settings' element={<WIP />} />           {/* TODO */}
                </Route>
                <Route exact path='librarian'>
                    <Route exact path='home' element={<WIP />} />               {/* TODO */}
                    <Route exact path='books' element={<WIP />} />              {/* TODO */}
                    <Route exact path='settings' element={<WIP />} />           {/* TODO */}
                </Route>
                <Route exact path='library' element={<Library />} />
                <Route exact path='fees' element={<Fees />} />                  {/* TODO */}
                <Route exact path='themes' element={<Themes />} />                  {/* TODO */}
                <Route path='*' element={<WIP />} />
            </Route>
        </Routes>
    )
}