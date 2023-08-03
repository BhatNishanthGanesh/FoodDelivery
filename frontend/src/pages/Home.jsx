import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Carousel from '../components/carousel';
import Card from '../components/card';
function Home() {
    return (
        <div>
            <div><Navbar/></div>
            <div><Carousel /></div>
            <div className='d-flex'>
                <div><Card/></div>
                <div><Card/></div>
                <div><Card/></div>
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Home
