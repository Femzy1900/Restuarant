// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, Chef, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, LoginPage, Register} from './container';
import { Navbar } from './components';
import FindUs from './container/Findus/FindUs';
import "./App.css"

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<SpecialMenu />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/laurels" element={<Laurels />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
