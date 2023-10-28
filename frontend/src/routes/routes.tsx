import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

/* Pages */
import Wrapper from '../layout/CampusWrapper.tsx';
import HomeWrapper from '../layout/HomeWrapper.tsx';
import {
  WIP,
  Homepage,
  AboutUs,
  Courses,
  Engineering,
  Socials,
  Laws,
  Medicine,
  Login,
  // Register,
  Student,
} from '../pages';

function routes(): React.ReactElement {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/management-app' >
          <Route element={<HomeWrapper />}>
            <Route index element={<Homepage />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='courses'>
              <Route index element={<Courses />} />
              <Route path='engineering' element={<Engineering />} />
              <Route path='socials' element={<Socials />} />
              <Route path='laws' element={<Laws />} />
              <Route path='medicine' element={<Medicine />} />
            </Route>
            <Route path='*' element={<WIP />} />
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