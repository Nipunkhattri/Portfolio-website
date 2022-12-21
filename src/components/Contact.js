import React, { useState } from 'react'
import "./Contact.css";
import emailjs from "@emailjs/browser";
import phone from "../phone (2).png"
import email from "../mail.png"
import loc from "../location.png"
import insta from "../insta1.png"
import link from "../link.png"
import git from "../github.png"
import cbg from "../cbg.png"

const Contact = () => {

  function sendEmail(e){
    e.preventDefault()
    emailjs.sendForm('service_qu775hs', 'template_ken4gxk', '#myForm','JHGvTZnS3F2rh-ftk')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    e.target.reset();
  }

  const [first,setfirst]=useState("")
  const [last,setlast]=useState("")
  const [phone,setphone]=useState("")
  const [email,setemail]=useState("")
  const [message,setmessage]=useState("")


  // const [inputValues, setInputValues] = useState({
  //   first: '', last: '',phone:'',email:'',message:''
  // });
  const handleOnChange1 = (e) => {
    setfirst(e.target.value);
  };
  const handleOnChange2 = (e) => {
    setlast(e.target.value);
  };
  const handleOnChange3 = (e) => {
    setphone(e.target.value);
  };
  const handleOnChange4 = (e) => {
    setemail(e.target.value);
  };
  const handleOnChange5 = (e) => {
    setmessage(e.target.value);
  };

  return (
    <div className='contact' id='contactus'>
      <div className="up">
        <h3 className='ch1'>Contact Us</h3>
        <h5>Lets talk more..</h5>
      </div>
      <div className='down'>
        <div className="cl">
            <h3 style={
              {
                // "textAlign":"center",
                "marginTop":"22px",
                "marginLeft":"32px"
              }
            }>Contact Information</h3>
            <div style={
              {
                "display": "flex",
    "flexDirection": "column",
    "margin": "25px 12px"
              }
            }>
              <div style={
                {
                  "display":"flex",
                }
              }>
            <img src={phone} className="cig1" alt="" />
            <p>+91 6386457174</p>
              </div>
              <div style={
                {
                  "display":"flex",
                }
              }>
            <img src={email} className="cig1" alt="" />
            <p>nipunkhattri321@gmail.com</p>
              </div>
              <div style={
                {
                  "display":"flex",
                }
              }>
            <img src={loc} className="cig1" alt="" />
            <p>JSS Academy of Technical Education Noida</p>
              </div>
            </div>
            <img src={cbg} alt="" className='ccbg'/>
            <div className='social'>
              <img src={insta} className="cig2" alt="" />
              <img src={link} className="cig2" alt="" />
              <img src={git} className="cig2" alt="" />
            </div>
        </div>
        <div className="cr">
          <form className='ctall' id='myForm' onSubmit={sendEmail}>
            <input type="text" className='t1' value={first} onChange={handleOnChange1} placeholder='First name'/>
            <input type="text" className='t2' value={last} onChange={handleOnChange2} placeholder='last name'/>
            <input type="email" className='t1' value={phone} onChange={handleOnChange3} placeholder='email'/>
            <input type="number" className='t2' value={email} onChange={handleOnChange4} placeholder='Phone no.'/>
            <div className='t3'>
            <textarea type="text" className='t4'value={message} onChange={handleOnChange5} placeholder='message'/>
            <button className='cbtn'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
