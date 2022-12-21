import React from 'react'
import "./About.css"
import image from "../me.jpg"
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({offset: 60, once: false,  disable: 'phone', duration: 3000,
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        });
      }, []);
    return (
        <div className='about' id='aboutbar'>
        {/* <div className="one">
            <div className="first">
            <p className='para'>I am a MERN Stack Developer and completed my intern in full stack development at @Yougetplaced I have in depth knowledge of react js and server side language and maintaining the database with mongo DB.. Skillful for creating a server and database with functionality and developing api's. I worked on the many real time projects and currently learning blockchain..</p>
            </div>
            </div>
            <div className="two">
            <div className="second">
            <img src={image} alt="" className='img'/>
            </div>
        </div> */}
         <div className="one">
            <div className="second" data-aos="flip-left">
                <img src={image} alt="" className='img' />
            </div>
            <div className="first " data-aos="fade-up">
                <p className='para'>I am a MERN Stack Developer with in depth knowledge of react js and server side language .Skillful for creating a server and database with functionality .I have completed my intern in full stack development at @Yougetplaced and worked on many real time projects ,taken part in many hackathons and experience of more than 1year. I am confident,
                skillfull, hardworking and effecient to learn fast.We will make the projects at the next level see you soon..</p>
                <a href={require("../Resume (2).pdf")} download="myFile">
                <button type="button" class="btn btn-primary">Download CV</button>
                </a>
            </div>
                    
        </div>
    </div>
  )
}
// AOS.init();

export default About
