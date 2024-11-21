import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels} from './container';
import { Navbar } from './components';
import './App.css';

import { useState } from 'react';
import SpecialMenu from './container/Menu/SpecialMenu';
const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };
  return ( <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
   
    <Gallery />
    <FindUs />
    <Footer />
  </div>)
};

export default App;
