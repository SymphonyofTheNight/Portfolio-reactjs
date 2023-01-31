import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Cover from './assets/components/Cover/Cover';
import Landingpage from './assets/components/Landingpage/Landingpage';

// scss
import './assets/scss/_main.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<><Cover /><Landingpage ID='Landingpage col-lg-12 m-0 p-0' /></>} />
    </Routes>
  )
}

export default App;