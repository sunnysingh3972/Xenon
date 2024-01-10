import React from 'react'
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import HorizontalScroll from '../../components/horizontalScroll/HorizontalScroll';

function Home() {
  return (
    <div className='page__container'>
        <Navbar />
        <HorizontalScroll />
        <Footer />
    </div>
  )
}

export default Home