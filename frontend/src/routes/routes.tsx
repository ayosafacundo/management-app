import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import Wrapper from '../layout/Wrapper.tsx'; //Sidebar, header and logo all-in-one Wrapper with PrivateRouting

/* Pages */
import Auth from '../pages/Auth/Auth.tsx';
// import Dashboard from '../pages/Dashboard.jsx';
// import Admin from '../pages/Admin.jsx';
// import Teacher from '../pages/Teacher.jsx';
// import Library from '../pages/Library.jsx';
// import Fees from '../pages/Fees.jsx';
// import WIP from '../pages/WIP.jsx';
// import Themes from '../pages/Themes.jsx';

function routes(): React.ReactElement {

  return (
    <BrowserRouter basename='/management-app'>
      <Routes>
        <Route index path='/' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes