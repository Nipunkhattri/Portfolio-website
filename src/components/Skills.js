import React from 'react'
import "./Skills.css"
import ig1 from "../html-1.svg"
import ig2 from "../css.png"
import ig3 from "../js.png"
import ig4 from "../react.jpg"
import ig5 from "../node.png"
import ig6 from "../firebase.png"
import ig7 from "../images.png"
import ig8 from "../figma.png"
import ig9 from "../git.png"
import ig10 from "../boot.png"

const Skills = () => {
  return (
    <>
    <div className='skills' id='servicesbar'>
      {/* <h3 className='skillhead'>SKILLS</h3> */}
      <div className="all">
        <div className='headskill'>
      <h3 style={
            {
                "textAlign":"center",
                "color":"white",
                "rotate": "270deg",
                "width": "100px",
                "border": "2px solid white",
            }
        }>SKILLS</h3>
        </div>
        <div style={
          {
            "marginTop":"61px"
          }
        }>

      <div className="sone">
        <div className="a">
            <img src={ig1} alt="" className='ig1'/>
        </div>
        <div className="a">
            <img src={ig2} alt="" className='iga'/>
        </div>
        <div className="a">
            <img src={ig3} alt="" className='ig3'/>
        </div>
        <div className="a">
            <img src={ig4} alt="" className='ig1'/>
        </div>
      <div className="a">
            <img src={ig5} alt="" className='ig5'/>
        </div>
      </div>
      <div className="stwo">
        <div className="a">
            <img src={ig6} alt="" className='ig6'/>
        </div>
        <div className="a">
            <img src={ig7} alt="" className='ig7'/>
        </div>
        <div className="a">
            <img src={ig8} alt="" className='ig1'/>
        </div>
        <div className="a">
            <img src={ig9} alt="" className='ig1'/>
        </div>
        <div className="a">
            <img src={ig10} alt="" className='ig1'/>
        </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Skills
