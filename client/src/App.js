import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Cover from './components/Cover/Cover';
import Nav from './components/Nav/Nav';
import Landingpage from './components/Landingpage/Landingpage';

// scss
import './scss/_main.scss';
import LeftNav from './components/SideNav/LeftNav';
import RightNav from './components/SideNav/RightNav';

const App = () => {

  const [colortoggle, setColortoggle] = useState(false);

  useEffect(() => {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    window.history.scrollRestoration = 'manual';
    document.body.style.height = `${h}px`;
    document.body.style.width = `${w}px`;
  }, []);

  // fix keyboard overlap tommorow !!!!

  return (
    <Routes>
      <Route path='/' element=
        {
          <div className='overflow-hidden'>
            <Nav colortoggle={colortoggle} setColortoggle={setColortoggle} />
            <Landingpage colortoggle={colortoggle} />
            <Cover colortoggle={colortoggle} setColortoggle={setColortoggle} />
            <LeftNav colortoggle={colortoggle} setColortoggle={setColortoggle} />
            <RightNav colortoggle={colortoggle} setColortoggle={setColortoggle} />
          </div>
        }
      />
    </Routes>
  )
}

export default App;