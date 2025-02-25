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
      <h1 className ="animate__animated animate__fadeIn text-5xl font-bold  leading-tight text-[#1230AE] text-center bg-linear-to-r from-[#FFF7F7] to-blue-200">Fire Alarm Systems</h1>
      <div className ="container mx-auto px-4 py-20 flex items-center pt-[10px] bg-linear-to-r from-[#FFF7F7] to-blue-200">
          
          <div className ="flex gap-12 items-center">
            <div>
              <div className ="animate__animated animate__fadeInLeft" style={{animationDelay: "0.2s"}}>
              <h3 className='text-2xl font-bold mb-2 leading-tight text-[#1230AE]' >What we offer</h3>
              <p className ="text-2xs mb-8 pl-2.5">
                  <ul className='list-disc'>
                    <li>Automatic Fire Detection – Smoke, heat, and carbon monoxide sensors.</li>
                    <li>Loud Alarm &amp; Emergency Alerts – Instant notifications to prevent disasters.</li>
                    <li>Centralized Monitoring &amp; Control Panels – Easy access and quick response time.</li>
                    <li>Sprinkler System Integration – Automatic fire suppression for quick action.</li>
                    <li>Regular Maintenance &amp; Compliance – Meets industry safety regulations.</li>
                    <li>Ideal for: Hotels, Shopping Malls, Schools, Industrial Plants, Residential Complexes.</li>
                  </ul>
              </p>
              </div>
            </div>
          </div>
        </div>
      </>  
    },   
  ];

const Product_details05 = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-[100px]'>
        <div className="text-center mb-5 animate__animated animate__fadeIn">
            <span className="text-[#1230AE] font-semibold">Product Details</span>
            <h2 className="text-4xl font-bold mt-2 mb-4"> Our Security &amp; Surveillance Solutions</h2>
            <p className="text-gray max-w-2xl mx-auto">Early fire detection to prevent hazards and ensure safety.
            </p>
        </div>
        <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} />
    </div> 
    <Footer/> 
    </>
  )
}

export default Product_details05