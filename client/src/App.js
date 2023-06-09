import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Cover from './components/Cover/Cover';
import Nav from './components/Nav/Nav';
import Landingpage from './components/Landingpage/Landingpage';
import LeftNav from './components/SideNav/LeftNav';
import RightNav from './components/SideNav/RightNav';

// scss
import './scss/_main.scss';

const App = () => {

  const [colortoggle, setColortoggle] = useState(false);
  const [hamburgertoggle, setHamburgertoggle] = useState(false);

  return (
    <Routes>
      <Route path='/' element=
        {
          <div className='overflow-hidden'>
            <Nav colortoggle={colortoggle} setColortoggle={setColortoggle} setHambugertoggle={setHamburgertoggle} />
            <Landingpage colortoggle={colortoggle} setHambugertoggle={setHamburgertoggle} hamburgertoggle={hamburgertoggle} />
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