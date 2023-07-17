import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Cover from './components/Cover/Cover';
import Nav from './components/Nav/Nav';
import Landingpage from './components/Landingpage/Landingpage';
import Projects from './components/Projects/Projects';
import LeftNav from './components/SideNav/LeftNav';
import RightNav from './components/SideNav/RightNav';

// scss
import './scss/_main.scss';

// projects 
import projects from './assets/projectsimg/projects';

const App = () => {

  const [colortoggle, setColortoggle] = useState(false);
  const [hamburgertoggle, setHamburgertoggle] = useState(false);
  const [path, setPath] = useState('');
  const [titlepage, setTitlepage] = useState('');
  const [getid, setGetId] = useState('');

  // find specific proj
  const [myprojects_arr] = useState(projects ? projects : null);

  useEffect(() => {
    const get_selected_proj = getid ? myprojects_arr.find(proj => proj.id === getid) : null;
    setPath(get_selected_proj?.endpoint)
    if (getid) localStorage.setItem("selected_project", JSON.stringify(get_selected_proj));
  }, [getid])

  useEffect(() => {
    if (path === '' || path === null) {
      const getlocal = localStorage.getItem("selected_project");
      const toparsedata = JSON.parse(getlocal);
      setPath(toparsedata?.endpoint)
    }
  }, [path])

  return (
    <Routes>
      <Route path='/' element=
        {
          <div className='overflow-hidden'>
            <Nav colortoggle={colortoggle} setColortoggle={setColortoggle} setHambugertoggle={setHamburgertoggle} />
            <Landingpage colortoggle={colortoggle} setGetId={setGetId} setHambugertoggle={setHamburgertoggle} hamburgertoggle={hamburgertoggle} setTitlepage={setTitlepage} />
            <Cover colortoggle={colortoggle} setColortoggle={setColortoggle} title='FRONT END DEVELOPER' />
            <LeftNav colortoggle={colortoggle} setColortoggle={setColortoggle} />
            <RightNav colortoggle={colortoggle} setColortoggle={setColortoggle} />
          </div>
        }
      />
      <Route path={`/projects/${path}`} element={
        <div className='overflow-hidden'>
          <Nav colortoggle={colortoggle} setColortoggle={setColortoggle} setHambugertoggle={setHamburgertoggle} />
          <Projects colortoggle={colortoggle} getid={getid} setHambugertoggle={setHamburgertoggle} hamburgertoggle={hamburgertoggle} />
          <Cover colortoggle={colortoggle} setColortoggle={setColortoggle} title={titlepage} setTitlepage={setTitlepage} />
          <LeftNav colortoggle={colortoggle} setColortoggle={setColortoggle} />
          <RightNav colortoggle={colortoggle} setColortoggle={setColortoggle} />
        </div>
      } />
    </Routes>
  )
}

export default App;