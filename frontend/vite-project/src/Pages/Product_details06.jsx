import React from 'react'
import { Tabs } from 'antd';
import Navbar from '../Components/Navbaar/Navbar';
import Footer from '../Components/Footer/Footer';
import 'animate.css'
import '../index.css'

const onChange = (key) => {
    console.log(key);
};

const items = [
    {
      key: '1',
      children: 
      <>
      <h1 className ="animate__animated animate__fadeIn text-5xl font-bold  leading-tight text-[#1230AE] text-center bg-linear-to-r from-[#FFF7F7] to-blue-200">Smoke Detectors</h1>
      <div className ="container mx-auto px-4 py-20 flex items-center pt-[10px] bg-linear-to-r from-[#FFF7F7] to-blue-200">
          
          <div className ="flex gap-12 items-center">
            <div>
              <div className ="animate__animated animate__fadeInLeft" style={{animationDelay: "0.2s"}}>
              <h3 className='text-2xl font-bold mb-2 leading-tight text-[#1230AE]' >What we offer</h3>
              <p className ="text-2xs mb-8 pl-2.5">
                  <ul className='list-disc'>
                    <li>Photoelectric &amp; Ionization Smoke Detectors – Detects slow and fast-burning fires.</li>
                    <li>Wireless Smoke Alarms – Easy installation with real-time mobile alerts.</li>
                    <li>Multi-Sensor Detectors – Combines heat, smoke, and CO2 detection.</li>
                    <li>Battery Backup &amp; Long Lifespan – Ensures continuous protection even during power failures.</li>
                    <li>Smart Home Integration – Connects with home automation systems for quick response.</li>
                    <li>Ideal for: Homes, Offices, Restaurants, High-Rise Buildings, Warehouses.</li>
                  </ul>
              </p>
              </div>
            </div>
          </div>
        </div>
      </>  
    },   
  ];

const Product_details06 = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-[100px]'>
        <div className="text-center mb-5 animate__animated animate__fadeIn">
            <span className="text-[#1230AE] font-semibold">Product Details</span>
            <h2 className="text-4xl font-bold mt-2 mb-4"> Our Security &amp; Surveillance Solutions</h2>
            <p className="text-gray max-w-2xl mx-auto">Instant alerts for smoke and fire hazards to safeguard lives and property.
            </p>
        </div>
        <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} />
    </div> 
    <Footer/> 
    </>
  )
}

export default Product_details06