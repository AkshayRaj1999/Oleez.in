import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Course from '../component/pages/Course/Course';
import AboutUs from '../component/pages/About US/AboutUs';
import ConatactUs from '../component/pages/contact us/ConatactUs';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Home from '../component/pages/home/Home';


function LayOutRoutes() {
  return (
    
    <>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/course' element={<Course/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<ConatactUs/>}/>
        </Routes>
        <Footer/>
    </Router>
    
    </>
       
  )
}

export default LayOutRoutes