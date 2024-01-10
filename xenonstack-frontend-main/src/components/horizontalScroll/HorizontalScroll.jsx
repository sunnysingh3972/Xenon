import React from 'react'
import { Link } from 'react-router-dom'
import './horizontalScroll.css';
import { CiBookmark } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function HorizontalScroll() {
  return (
    <div className='scroll__container'>
        <div className="scroll__header">
            <div className="title">Recommended exams</div>
            <Link to="/">See All</Link>
        </div>
        {/* <div className="scroll__filters">
            <span>All</span>
            <span>Gate</span>
            <span>AP EAPCET</span>
            <span>BITSAT</span>
            <span>JEE Mains</span>
            <span>JEE Advanced</span>
        </div> */}
        <div className="scroll__list">
            <div className="scroll__item">
                <div className="header">
                    <img src="./assets/exams/nta.png" alt="" className="logo" />
                    <div className='heading'>
                        <h2>JEE Mains 2023</h2>
                        <p>National Testing Agency</p>
                    </div>
                    <span className='bookmark'><CiBookmark /></span>
                </div>
                <div className="body">
                    <div className="info">
                        <span><FaUsers /></span>
                        <p>More than 20 Lakhs</p>
                    </div>
                    <div className="info">
                        <span><FaWallet /></span>
                        <p>₹ 1200</p>
                    </div>
                    <div className="tags">
                        <span>Engineering</span>
                        <span>IIT</span>
                        <span>PCM</span>
                    </div>
                    <Link className='view__details' to="/">View details <span><FaAngleRight /></span></Link>
                </div>
            </div>
            <div className="scroll__item">
                <div className="header">
                    <img src="./assets/exams/nta.png" alt="" className="logo" />
                    <div className='heading'>
                        <h2>JEE Mains 2023</h2>
                        <p>National Testing Agency</p>
                    </div>
                    <span className='bookmark'><CiBookmark /></span>
                </div>
                <div className="body">
                    <div className="info">
                        <span><FaUsers /></span>
                        <p>More than 20 Lakhs</p>
                    </div>
                    <div className="info">
                        <span><FaWallet /></span>
                        <p>₹ 1200</p>
                    </div>
                    <div className="tags">
                        <span>Engineering</span>
                        <span>IIT</span>
                        <span>PCM</span>
                    </div>
                    <Link className='view__details' to="/">View details <span><FaAngleRight /></span></Link>
                </div>
            </div>
            <div className="scroll__item">
                <div className="header">
                    <img src="./assets/exams/nta.png" alt="" className="logo" />
                    <div className='heading'>
                        <h2>JEE Mains 2023</h2>
                        <p>National Testing Agency</p>
                    </div>
                    <span className='bookmark'><CiBookmark /></span>
                </div>
                <div className="body">
                    <div className="info">
                        <span><FaUsers /></span>
                        <p>More than 20 Lakhs</p>
                    </div>
                    <div className="info">
                        <span><FaWallet /></span>
                        <p>₹ 1200</p>
                    </div>
                    <div className="tags">
                        <span>Engineering</span>
                        <span>IIT</span>
                        <span>PCM</span>
                    </div>
                    <Link className='view__details' to="/">View details <span><FaAngleRight /></span></Link>
                </div>
            </div>
            <div className="scroll__item">
                <div className="header">
                    <img src="./assets/exams/nta.png" alt="" className="logo" />
                    <div className='heading'>
                        <h2>JEE Mains 2023</h2>
                        <p>National Testing Agency</p>
                    </div>
                    <span className='bookmark'><CiBookmark /></span>
                </div>
                <div className="body">
                    <div className="info">
                        <span><FaUsers /></span>
                        <p>More than 20 Lakhs</p>
                    </div>
                    <div className="info">
                        <span><FaWallet /></span>
                        <p>₹ 1200</p>
                    </div>
                    <div className="tags">
                        <span>Engineering</span>
                        <span>IIT</span>
                        <span>PCM</span>
                    </div>
                    <Link className='view__details' to="/">View details <span><FaAngleRight /></span></Link>
                </div>
            </div>
            <div className="scroll__item">
                <div className="header">
                    <img src="./assets/exams/nta.png" alt="" className="logo" />
                    <div className='heading'>
                        <h2>JEE Mains 2023</h2>
                        <p>National Testing Agency</p>
                    </div>
                    <span className='bookmark'><CiBookmark /></span>
                </div>
                <div className="body">
                    <div className="info">
                        <span><FaUsers /></span>
                        <p>More than 20 Lakhs</p>
                    </div>
                    <div className="info">
                        <span><FaWallet /></span>
                        <p>₹ 1200</p>
                    </div>
                    <div className="tags">
                        <span>Engineering</span>
                        <span>IIT</span>
                        <span>PCM</span>
                    </div>
                    <Link className='view__details' to="/">View details <span><FaAngleRight /></span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HorizontalScroll