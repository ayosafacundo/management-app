import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

/* Pages */
import Login from '../pages/Login.tsx';
import Wrapper from '../layout/CampusWrapper.tsx';
import Student from '../pages/Dashboard/Student.tsx';
import Homepage from '../pages/Homepage.tsx';
import HomeWrapper from '../layout/HomeWrapper.tsx';
import AboutUs from '../pages/AboutUs.tsx';
import WIP from '../pages/WIP.tsx';

function routes(): React.ReactElement {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/management-app' >
          <Route element={<HomeWrapper />}>
            <Route index element={<Homepage />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='courses' element={<WIP />} />
            <Route path='WIP' element={<WIP />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='user' element={<Wrapper />}>
          <Route path='dashboard' element={<Student />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default routes