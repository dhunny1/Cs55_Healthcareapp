import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer.js';
import HeroSection from './Pages/HomePage.js';
import SideBar from './Components/sidebar.js';

import Login from './Login_Register/Login.js';
import Register from './Login_Register/Register.js';

import HomePage from './Pages/HomePage.js';
import ProfilePage from './Pages/ProfilePage.js';
import MonitorPage from './Pages/MonitorPage.js';
import AccountPage from './Pages/AccountPage.js';
import SupportPage from './Pages/SupportPage.js';
import SearchPage from './Pages/SearchPage.js';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Login />
        <Register />
        <div className='SBar' id="outer-container">
          <SideBar />
        </div>
        <div className='herosec'>
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/monitor" element={<MonitorPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/search" element={<SearchPage />} />
            
            <Route path="/account" element={<AccountPage />} />

          </Routes>
        </div>
          
          
        
        
        <div className='footer'><Footer /> </div>

          
      </div>
    </BrowserRouter>
  );
}

export default App;
