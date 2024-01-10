import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        <div className="upper__footer">
            <div className="left__section">
                <div className="footer__logo"><img src="./assets/logo.png" alt="" /></div>
                <div className="social__icons">
                    <a href=""><FaFacebook /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaXTwitter /></a>
                    <a href=""><FaLinkedin /></a>
                </div>
            </div>
            <div className="mid__section">
                <div className="list1">
                    <Link to="">About Us</Link>
                    <Link to="">Sitemap</Link>
                    <Link to="">Credits</Link>
                    <Link to="">Help Center</Link>
                    <Link to="">Community Guidelines</Link>
                </div>
                <div className="list1">
                    <Link to="">Accessibility</Link>
                    <Link to="">Mobile</Link>
                    <Link to="">Marketing</Link>
                    <Link to="">Advertising</Link>
                    <Link to="">Report Issue</Link>
                </div>
                <div className="list1">
                    <Link to="">Privacy Policy</Link>
                    <Link to="">Terms & Conditions</Link>
                    <Link to="">Trust & Safety</Link>
                </div>
            </div>
            <div className="right__section">
                <a href=""><img src="./assets/play_store.png" alt="" /></a>
                <a href=""><img src="./assets/app_store.png" alt="" /></a>
            </div>
        </div>
        <div className="down__footer">
            <p>All trademarks are the property of their respective owners</p>
            <p>All rights reserved © 2024 intellfill Tect Pvt. Ltd</p>
        </div>
    </div>
  )
}

export default Footer