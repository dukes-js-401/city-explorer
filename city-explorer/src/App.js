import React from 'react';
import './design/reset.scss';
import './design/bones.scss';
import './design/skin.scss';

import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Info from './components/info/info.js';


function App() {
  return (
    <>
    <Header />
    <Main />
    
    <Info />
    </>
  );
}



export default App;
