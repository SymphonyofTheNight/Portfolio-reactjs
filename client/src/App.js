import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Cover from './assets/components/Cover/Cover';
import Landingpage from './assets/components/Landingpage/Landingpage';

// scss
import './assets/scss/_main.scss';

const App = () => {
  return (
    <div>
      <Cover />
      <Landingpage ID='Landingpage col-lg-12 m-0 p-0'>

      </Landingpage>
    </div>
  )
}

export default App;