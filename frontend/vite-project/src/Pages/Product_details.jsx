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
    label: 'On‐Grid',
    children: 
    <>
    <h1 className ="animate__animated animate__fadeIn text-5xl font-bold  leading-tight text-[#1230AE] text-center bg-linear-to-r from-[#FFF7F7] to-blue-200">On‐Grid Solar Power System</h1>
    <div className ="container mx-auto px-4 py-20 flex items-center pt-[10px] bg-linear-to-r from-[#FFF7F7] to-blue-200">
        
        <div className ="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className ="animate__animated animate__fadeInLeft" style={{animationDelay: "0.2s"}}>
            <h3 className='text-2xl font-bold mb-2 leading-tight text-[#1230AE]' >Description</h3>
            <p className ="text-2xs mb-8 pl-2.5">
                <ul className='list-disc'>
                    <li>On-grid solar power systems are the most common and widely used by homeowners and businesses.</li>
                    <li>These systems use common solar inverters and are connected to the public electricity grid and are designed to supply excess electricity back to the grid.</li>
                    <li>On-grid systems do not need batteries.</li>
                    <li>The grid acts as the store for the excess power the on-grid solar power system generates.</li>
                    <li>The service life of the solar panel is more than 25-30 years.</li>The service life of the solar panel is more than 25-30 years.
                </ul>
            </p>
            </div>
            
            <div className ="animate__animated animate__fadeInLeft" style={{animationDelay: "0.4s"}}>
            <h3 className='text-2xl font-bold mb-2 leading-tight text-[#1230AE]'>Advantages</h3>
            <p className ="text-2xs mb-8 pl-2.5">
                <ul className='list-disc'>
                    <li>On-grid solar power systems are cost-effective and easy to install as they do not require the installation
                    of batteries or other storage systems.</li>
                    <li>It is a good choice if you want to reduce your energy bill and reduce your carbon footprint.</li>
                    <li>On-grid solar power systems are connected to the utility power grid, which means that you have a
                    reliable source of power even if your system is not producing enough energy.</li>
                    <li>On-grid solar power systems require less maintenance than off-grid systems, as they do not have
                    batteries that need to be replaced or maintained.</li>
                </ul>
            </p>
            </div>
            
          </div>
          <div className ="relative">
          {/* <div className="absolute -inset-4 bg-[#1230AE] opacity-20 blur-2xl rounded-full"></div> */}
            <div className ="relative p-4 rounded-2xl">
                <div className ="p-2 rounded-lg h-[400px] flex items-center justify-center animate__animated animate__fadeInUp"
                  style={{animationDelay: "0.2s"}}>
                  <img src="/On-grid.png" alt=""className='w-full h-full rounded-tr-[40px] rounded-bl-[40px] shadow-lg shadow-blue-500 hover:scale-105 transition-all duration-800'/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>  
  },
  {
    key: '2',
    label: 'Off‐Grid',
    children:<>
    <h1 className ="animate__animated animate__fadeIn text-5xl font-bold  leading-tight text-[#1230AE] text-center bg-linear-to-r from-[#FFF7F7] to-blue-200">Off‐Grid Solar Power System</h1>
    <div className ="container mx-auto px-4 py-20 flex items-center pt-[10px] bg-linear-to-r from-[#FFF7F7] to-blue-200">
        
        <div className ="grid lg:grid-cols-2 gap-12 items-center">
        <div className='animate__animated animate__fadeInLeft' style={{transitionDelay: 0.2}}>
            <h3 className='text-2xl font-bold mb-2 leading-tight text-[#1230AE]' >Description</h3>
            <p className ="text-2xs mb-8 pl-2.5">
                <ul className='list-disc'>
                    <li>Off-grid solar power system allows complete independence from external power grids.</li>
                    <li>It is a popular choice in places with frequent power cuts and
                    remote areas where access to the grid is difficult.</li>
                    <li>An off-grid solar power system generates electricity from the
                    sun and stores it in batteries for use when sun is not shining.</li>
                    <li>The grid acts as the store for the excess power the on-grid solar power system generates.</li>
                    <li>It is typically used in remote locations where it is not practical to run power lines, or in situations where a homeowners wants to be independent of the electricity utility</li>
                </ul>
            </p>
            <div className='animate__animated animate__fadeInLeft' style={{transitionDelay: 0.2}}>
            <h3 className='text-2xl font-bold mb-2 leading-tight text-[#1230AE]' >Advantages</h3>
            <p className ="text-2xs mb-8 pl-2.5">
                <ul className='list-disc'>
                    <li>Independence from the electric grid. Off-grid solar power system can function independently and allows
                    you to generate your own electricity.</li>
                    <li>Reduced energy costs: Solar energy is a free and renewable recourse.</li>
                    <li>These are suitable for remote areas that do not have grid power access.</li>
                    <li>A solar power system can increase the value of your property.</li>
                    <li>Using an off-grid solar power system can help to reduce your carbon footprint.</li>
                </ul>
            </p>
            </div>
          </div>
          <div className ="relative">
          {/* <div className="absolute -inset-4 bg-[#1230AE] opacity-20 blur-2xl rounded-full"></div> */}
            <div className ="relative p-4 rounded-2xl">
                <div className ="p-2 rounded-lg h-[400px] flex items-center justify-center animate__animated animate__fadeInUp"
                  style={{animationDelay: "0.2s"}}>
                  <img src="/Off-grid.png" alt=""className='w-full h-full rounded-tr-[40px] rounded-bl-[40px] shadow-lg shadow-blue-500 hover:scale-105 transition-all duration-800'/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  },
  {
    key: '3',
    label: 'Hybrid',
    children:<>
    <h1 className ="animate__animated animate__fadeIn text-5xl font-bold  leading-tight text-[#1230AE] text-center bg-linear-to-r from-[#FFF7F7] to-blue-200">Hybrid Solar Power System</h1>
    <div className ="container mx-auto px-4 py-20 flex items-center pt-[10px] bg-linear-to-r from-[#FFF7F7] to-blue-200">
        
        <div className ="grid lg:grid-cols-2 gap-12 items-center">
        <div className='animate__animated animate__fadeInLeft' style={{transitionDelay: 0.2}}>
            <h3 className='text-2xl font-bold mb-2 leading-tight text-[#1230AE]' >Description</h3>
            <p className ="text-2xs mb-8 pl-2.5">
                <ul className='list-disc'>
                    <li>Hybrid solar power systems are a mixture of the two solar power systems. This type of energy installation can operate both with the electricity grid and autonomously.</li>
                    <li>A hybrid solar power system is when your solar panels remain connected to the grid’s power lines and have a backup battery system to store excess power..</li>
                    <li>The benefit of a hybrid solar power system is
                    that you will always have power in any situation.</li>
                    <li>A hybrid solar power system works by sending solar power to your inverter, which then sends energy to
                    power your home.</li>
                    <li>Extra energy that is not used to power your home goes to your home battery for storage.</li>
                </ul>
            </p>
            <div className='animate__animated animate__fadeInLeft' style={{transitionDelay: 0.4}}>
            <h3 className='text-2xl font-bold mb-2 leading-tight text-[#1230AE]' >Advantages</h3>
            <p className ="text-2xs mb-8 pl-2.5">
                <ul className='list-disc'>
                    <li>Increased energy independence: A hybrid solar power system allows you to generate your own
                    electricity and reduces your reliance on the electric grid.</li>
                    <li>Improved energy reliability: The battery storage component of a hybrid solar power system can
                    provide backup power in the event of a power outage.</li>
                    <li>Net metering: Many utilities offer net metering, which allows you to sell excess solar electricity
                    back to the grid. This can further reduce your energy costs and provide an additional source of income.</li>
                    <li>Reduced carbon footprint.</li>
                </ul>
            </p>
            </div>
          </div>
          <div className ="relative">
          {/* <div className="absolute -inset-4 bg-[#1230AE] opacity-20 blur-2xl rounded-full"></div> */}
            <div className ="relative p-4 rounded-2xl">
                <div className ="p-2 rounded-lg h-[400px] flex items-center justify-center animate__animated animate__fadeInUp"
                  style={{animationDelay: "0.2s"}}>
                  <img src="/hybrid.png" alt=""className='w-full h-full rounded-tr-[40px] rounded-bl-[40px] shadow-lg shadow-blue-500 hover:scale-105 transition-all duration-800'/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>  
  },
];

const Product_details = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-[100px]'>
        <div className="text-center mb-5 animate__animated animate__fadeIn">
            <span className="text-[#1230AE] font-semibold">Product Details</span>
            <h2 className="text-4xl font-bold mt-2 mb-4"> Solar Power Systems</h2>
            <p className="text-gray max-w-2xl mx-auto">There are three main types of solar power systems:
            </p>
        </div>
        <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} />
    </div> 
    <Footer/> 
    </> 
  )
}

export default Product_details
