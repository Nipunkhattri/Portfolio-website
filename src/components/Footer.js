import React from 'react'
import "./Footer.css";
import link from "../link.png"
import git from "../github.png"
import code from "../code.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div style={
            {
                "position":"relative",
                "top":"24px"
            }
        }>
      <p className="fp" >CheckOut more..</p>
      <a target="_blank" href="https://www.linkedin.com/in/nipun-khatri-80b168224/">
        <img src={link} className="cig2" alt="" />
      </a>
      <a target="_blank" href="https://github.com/Nipunkhattri">
      <img src={git} className="cig2" alt="" />
      </a>
      <a target="_blank" href="https://www.codechef.com/users/nipunkhatri">
      <img src={code} className="cig2" alt="" />
      </a>
      <p className='fp1'>@2022 Made by Nipun Khatri</p>
        </div>
    </div>
  )
}

export default Footer
