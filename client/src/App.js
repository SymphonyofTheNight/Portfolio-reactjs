import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Cover from './components/Cover/Cover';
import Landingpage from './components/Landingpage/Landingpage';

// scss
import './scss/_main.scss';

const App = () => {

  const [colortoggle, setColortoggle] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <Routes>
      <Route path='/' element=
        {
          <>
            <Cover colortoggle={colortoggle} setColortoggle={setColortoggle} />
            <Landingpage colortoggle={colortoggle} />
          </>
        }
      />
    </Routes>
  )
}

export default App;