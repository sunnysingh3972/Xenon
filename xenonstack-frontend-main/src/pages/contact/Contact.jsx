import React, { useState } from 'react'
import './contactPage.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios';
import toast from 'react-hot-toast';
function Contact() {
  const [name, setName] = useState('');
  const [subject,setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async()=>{
    if(!name || !subject || !message){
      // alert("fill all fields");
      toast.error("fill all the fields");
    }
    else{
      const obj = {
        name: name,
        subject: subject,
        message: message
      };
     axios.post('http://localhost:8000/api/user/message',obj)
      .then(res=>{
            // console.log(res);
           
            // console.log("data saved",res);

        }).catch(err => console.log(err));
  
    toast.success("submitted");
    setName('');
    setSubject('');
    setMessage('');
    }
    // console.log("submitting...")
    
    // router.push('/');
}

  return (
    <div className="contact__wrapper">

      <h1 className='heading'>Contact</h1>
      <div className='messageContainer'>
        <div className='leftPanel'>
          <input className='input' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='NAME' />
          <input className='input' type="email" value={subject} onChange={(e)=>setSubject(e.target.value)} name="email" id="" placeholder='EMAIL'/>
          <textarea className='inputMessage' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='MESSAGE' name="message" id="" cols="30" rows="9" />
          <button className='submitBtn' onClick={handleSubmit}>SUBMIT</button>
        </div>
        <div className='rightPanel'>
          <div className='contactDetails'>
            <p className='info'><FaLocationDot />Mohali, Punjab</p>
            <p className='info'><IoCall />(+91) 776 123 8644</p>
            <p className='info'><IoMail />buntysingh@gmail.com</p>
            <div className='socialLinks'>
              <div><FaGithub /> </div>
              <div><FaTwitter /> </div>
              <div><FaLinkedin /></div>
              <div><FaInstagram /></div>
            </div>
            <p className='info'>© All rights are researved</p>
          </div>
        </div>
      </div>
    </div>
      


  )
}

export default Contact;