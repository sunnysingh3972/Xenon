import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";

function Navbar({user}) {
  return (
    <div className='navbar'>
        <img className='logo' src="./assets/logo.png" alt="" />
        <NavLink  style={({ isActive }) => ({color: isActive? "#2ea3f2": "black", })} to="/home">Home</NavLink>
        {/* <NavLink style={({ isActive }) => ({color: isActive? "#2ea3f2": "black", })}  to="/result">Result</NavLink> */}
        {/* <NavLink style={({ isActive }) => ({color: isActive? "#2ea3f2": "black", })}  to="/faq">FAQ</NavLink> */}
        <NavLink style={({ isActive }) => ({color: isActive? "#2ea3f2": "black", })}  to="/about-us">About Us</NavLink>
        <NavLink style={({ isActive }) => ({color: isActive? "#2ea3f2": "black", })}  to="/contact-us">Contact Us</NavLink>
       
        <div className='notification__icon'><FaRegBell /></div>
        <div className="profilePic"><NavLink style={({ isActive }) => ({color: isActive? "#2ea3f2": "black", })}  to={user?"/profile":"/sign"}>{user? user.name: "Login / Signup"}</NavLink></div>
    </div>
  )
}

export default Navbar