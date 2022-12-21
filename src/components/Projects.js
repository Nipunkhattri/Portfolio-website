import React from 'react'
import "./Projects.css"
import Imagenews from "../News.png"
import port from "../portfolio.jpg"
import Insta from "../Insta.png"
import stack from "../stackoverflow (4).png"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";


const Projects = () => {

  let img = document.querySelector(".swiper-slide-active img");
  console.log(img);
  // img.classList.add("none");

  return (
    // <div className='projects'>
    //     <h1 style={
    //         {
    //             "textAlign":"center"
    //         }
    //     }>Projects</h1>
    //     <div className="p1">
    //         <div className="p11">
    //             <img src={Imagenews} alt="" className='newsig'/>
    //         </div>
    //         <div className="p12">
    //              <img src={Insta} alt="" className='instaa' />
    //         </div>
    //     </div>
    //     <div className="p2">

    //     </div>
    // </div>
    <div className='pall' id='projectmade'>
    <h1 style={
            {
                "textAlign":"center",
                "color":"white",
                // "fontSize":"30px"
            }
        }>Projects</h1>
         <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <h4 style={
                {
                    "textAlign":"center"
                }
            }>Portfolio</h4>
          <img src={port} />
          <div className='over'>
          <a target="_blank" href="https://MyPortfolio-website-react.netlify.app/">
            <button className='btnn1'>Live</button>
            </a>
            <a target="_blank" href="https://github.com/Nipunkhattri/Portfolio-website">
            <button className='btnn2'>Github Code</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <h1 style={
            {
                "textAlign":"center",
                "fontSize":"1.5rem"
            }
        }>Stack overflow clone</h1>
          <img src={stack} />
          <div className='over'>
          <a target="_blank" href="https://stackoverflow-website-production.netlify.app/">
            <button className='btnn1'>Live</button>
            </a>
            <a target="_blank" href="https://github.com/Nipunkhattri/stack-overflow-website">
            <button className='btnn2'>Github Code</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <h4 style={
                {
                    "textAlign":"center"
                }
            }>News App</h4>
          <img src={Imagenews}/>
          <div className='over'>
          <a target="_blank" href="https://daily-news-update1.netlify.app/">
            <button className='btnn1'>Live</button>
            </a>
            <a target="_blank" href="https://github.com/Nipunkhattri/News-app">
            <button className='btnn2'>Github Code</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide >
            <h4 style={
                {
                    "textAlign":"center"
                }
            }>Insta Clone</h4>
          <img src={Insta} />
          <div className='over'>
            <a target="_blank" href="https://www.youtube.com/watch?v=JWZZrtZ3RUw">
            <button className='btnn1'>Live</button>
            </a>
            <a target="_blank" href="https://github.com/Nipunkhattri/Insta-App-production">
            <button className='btnn2'>Github Code</button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects
