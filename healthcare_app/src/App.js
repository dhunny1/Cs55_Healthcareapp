// import './App.css';
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Footer from './Components/Footer.js';
// import HeroSection from './Pages/HomePage.js';
// import SideBar from './Components/sidebar.js';

// import Login from './Login_Register/Login.js';
// import Register from './Login_Register/Register.js';

// import HomePage from './Pages/HomePage.js';
// import ProfilePage from './Pages/ProfilePage.js';
// import MonitorPage from './Pages/MonitorPage.js';
// import AccountPage from './Pages/AccountPage.js';
// import SupportPage from './Pages/SupportPage.js';
// import SearchPage from './Pages/SearchPage.js';




// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App"> 
        
       
                
//         <div className='SBar' id="outer-container">
//           <SideBar />
//         </div>
//         <div className='herosec'>
//           <Routes>                        
//             <Route path="/home" element={<HomePage />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/monitor" element={<MonitorPage />} />
//             <Route path="/support" element={<SupportPage />} />
//             <Route path="/search" element={<SearchPage />} />
            
//             <Route path="/account" element={<AccountPage />} />

//           </Routes>
//         </div>
          
          
        
        
//         <div className='footer'><Footer /> </div>

          
//       </div>
//     </BrowserRouter>
//   );
// }



// export default App;

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
        <Routes>
          {/* Route for Login and Register that don't require the sidebar */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Main layout with Sidebar and Footer */}
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/monitor" element={<MonitorPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Layout component that includes Sidebar and Footer
function Layout() {
  return (
    <>
      <div className="SBar" id="outer-container">
        <SideBar />
      </div>
      <div className="herosec">
        <Routes>
          {/* Nested routes that will change the main content */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/monitor" element={<MonitorPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
