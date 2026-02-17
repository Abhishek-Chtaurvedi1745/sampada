import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import Router
import Nav from "./Components/Nav";


import About from "./Pages/AboutUs";

import Sampadahealthcare from './Pages/Sampadahealthcare';
import Simpsonhealthcare from './Pages/Simpsonhealthcare';
import Farmdivision from './Pages/Farmdivision';
import Cottagedivision from './Pages/Cottagedivision';
import Windandrenewable from './Pages/Windandrenewable';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
       <div className='flex flex-col md:flex-row justify-around bg-[#1D2453] text-[#ffffff] py-2'>
       
        <h3 className='pl-[20px] text-[18px]'>Welcome to the Swasth Sampada Group</h3>
        <div className='flex items-center'>
            <div className='mr-[20px] flex items-center gap-[20px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:9834873487" className='text-[#ffffff] no-underline hover:opacity-80 transition-opacity'>
                9834873487
              </a>
            </div>

          
            <div className='flex items-center gap-[20px]'>
      
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <a href="mailto:asdhjds@gmail.com" className='text-[#ffffff] no-underline hover:opacity-80 transition-opacity'>
                asdhjds@gmail.com
              </a>
            </div>
        </div>
    </div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sampadahealthcare" element={<Sampadahealthcare />} />
        <Route path="/Simpsonhealthcare" element={<Simpsonhealthcare />} />
        <Route path="/Sampadafarm" element={<Farmdivision/>} />
        <Route path="/cottagedivision" element={<Cottagedivision/>} />
        <Route path="/windandrenewable" element={<Windandrenewable/>} />
     
      </Routes>
    </Router>
  );
}

export default App;
