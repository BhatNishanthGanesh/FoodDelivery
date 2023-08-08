import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Carousel from '../components/carousel';
import Card from '../components/card';
function Home() {
    const [foodCategory,setfoodCategory]=useState({})
    const [foodItem,setfoodItem]=useState({})

    const loadData=async()=>{
        let response = await fetch('http://localhost:5000/api/Food',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            }
        });
        response = await response.json()
        console.log(response[0],response[1]);
    }

    useEffect(()=>{
        loadData()
    })
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
