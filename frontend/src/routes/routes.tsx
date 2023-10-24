import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

/* Pages */
import Login from '../pages/Login.tsx';
import Wrapper from '../layout/CampusWrapper.tsx';
import Student from '../pages/Dashboard/Student.tsx';
import Homepage from '../pages/Homepage.tsx';
import HomeWrapper from '../layout/HomeWrapper.tsx';
import AboutUs from '../pages/AboutUs.tsx';

function routes(): React.ReactElement {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeWrapper />} >
          <Route index element={<Homepage />} />
          <Route path='aboutus' element={<AboutUs />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='user' element={<Wrapper />}>
          <Route path='dashboard' element={<Student />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default routes