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
      <h1 className ="animate__animated animate__fadeIn text-5xl font-bold  leading-tight text-[#1230AE] text-center bg-linear-to-r from-[#FFF7F7] to-blue-200">Closed Circuit Television (CCTV) Systems</h1>
      <div className ="container mx-auto px-4 py-20 flex items-center pt-[10px] bg-linear-to-r from-[#FFF7F7] to-blue-200">
          
          <div className ="flex gap-12 items-center">
            <div>
              <div className ="animate__animated animate__fadeInLeft" style={{animationDelay: "0.2s"}}>
              <h3 className='text-2xl font-bold mb-2 leading-tight text-[#1230AE]' >What we offer</h3>
              <p className ="text-2xs mb-8 pl-2.5">
                  <ul className='list-disc'>
                      <li>HD &amp; IP Cameras – Crystal-clear image quality with night vision and motion detection.</li>
                      <li>Remote Monitoring – Access live feeds via mobile or desktop applications.</li>
                      <li>Cloud &amp; Local Storage – Securely store footage for easy retrieval.</li>
                      <li>Wide-Angle &amp; 360° Cameras – Get complete coverage with advanced positioning.</li>
                      <li>AI-Powered Security – Facial recognition, object tracking, and intrusion detection.</li>
                      <li>Ideal for: Homes, Offices, Retail Stores, Warehouses, Parking Areas.</li>
                  </ul>
              </p>
              </div>
            </div>
          </div>
        </div>
      </>  
    },   
  ];

const Product_details02 = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-[100px]'>
        <div className="text-center mb-5 animate__animated animate__fadeIn">
            <span className="text-[#1230AE] font-semibold">Product Details</span>
            <h2 className="text-4xl font-bold mt-2 mb-4"> Our Security &amp; Surveillance Solutions</h2>
            <p className="text-gray max-w-2xl mx-auto">Stay protected with real-time surveillance and remote monitoring.
            </p>
        </div>
        <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} />
    </div> 
    <Footer/> 
    </>
  )
}

export default Product_details02