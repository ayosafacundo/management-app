import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

/* Pages */
import Login from '../pages/Login.tsx';
import Wrapper from '../layout/CampusWrapper.tsx';
import Student from '../pages/Dashboard/Student.tsx';
import Homepage from '../pages/Homepage.tsx';

function routes(): React.ReactElement {

  return (
    <BrowserRouter basename='/management-app'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='user' element={<Wrapper />}>
          <Route path='dashboard' element={<Student />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default routes