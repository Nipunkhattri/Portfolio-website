import React from 'react'
import "./Home.css"
import {Link} from "react-scroll";
import Navbar from '../components/Navbar.js';
import About from '../components/About.js';
import Skills from '../components/Skills.js';
import Projects from '../components/Projects.js';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className='hme' id='homebar'>
    <Navbar/>
        <h3 className='head'>NIPUN KHATRI</h3>
        <h3 className='head1'>@Full stack developer</h3>
        <h4 className='head2 x'>About me</h4>
        {/* <Link to=""><i class='fas fa-angle-double-down' style={{"font-size":"36px"}}></i></Link> */}
        <button className='btn1'><Link to="aboutbar" smooth={true} offset={50} duration={500} ><i class='fas fa-angle-double-down' style={{"font-size":"36px"}}></i></Link></button>
    </div>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home
