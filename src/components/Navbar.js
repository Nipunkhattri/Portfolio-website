import React from 'react'
import { Link } from 'react-scroll'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light  fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="homebar"
               spy={true} smooth={true} offset={50} duration={500} >Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="aboutbar" spy={true} smooth={true} offset={50} duration={500} >About</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="servicesbar" spy={true} smooth={true} offset={50} duration={500} >Skills</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="projectmade" spy={true} smooth={true} offset={50} duration={500} >projects</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="contactus" spy={true} smooth={true} offset={50} duration={500} >Contact</Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <a className='btn' href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nipunkhattri321@gmail.com" target="_blank">
            hire me
        </a>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
