import React from 'react'
import 'animate.css'
import '../../index.css'
import { NavLink } from 'react-router-dom'


const Hero = () => {
  return (
      <div className ="container mx-auto px-4 py-20 flex items-center pt-[120px] bg-linear-to-r from-[#FFF7F7] to-blue-200">
        <div className ="grid lg:grid-cols-2 gap-12 items-center">
          <div className ="animate__animated animate__fadeInLeft">
          <span className="text-[black] font-semibold mb-4 block">Welcome to Vaibhav Enterprises</span>
            <h1 className ="text-5xl font-bold mb-6 leading-tight text-[#1230AE]">Power Your Home with Solar Energy</h1>
            <p className ="text-xl mb-8">Leading the way in solar energy solutions with professional installation services and cutting-edge technology.</p>
            <div className ="flex gap-4">
              <NavLink to="/getstarted" className ="bg-[#17594A] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] px-8 py-3 rounded-full text-white font-semibold transition-colors shadow-lg shadow-gray-500 hover:shadow-lg hover:shadow-blue-500">Get Started</NavLink>
              <NavLink to="offers" className ="bg-[#C84C05] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] px-8 py-3 rounded-full text-white font-semibold transition-colors shadow-lg shadow-gray-500 hover:shadow-lg hover:shadow-blue-500">View Offers</NavLink>
            </div>
          </div>
          <div className ="relative max-sm:hidden max-lg:hidden">
          {/* <div className="absolute -inset-4 bg-[#1230AE] opacity-20 blur-2xl rounded-full"></div> */}
            <div className ="relative p-4 rounded-2xl">
              <div className ="grid grid-cols-2 gap-4">
                <div className ="p-2 rounded-lg h-[400px] flex items-center justify-center animate__animated animate__fadeInUp"
                  style={{animationDelay: "0.2s"}}>
                  <img src="/banner_1.avif" alt=""className='w-full h-full rounded-tr-[40px] rounded-bl-[40px] shadow-lg shadow-blue-500 hover:scale-105 transition-all duration-800'/>
                </div>
                <div className ="p-2 rounded-lg h-[400px] flex items-center justify-center animate__animated animate__fadeInUp"
                  style={{animationDelay: "0.4s"}}
                >
                  <img src="/banner_3.avif" alt=""className='w-full h-full rounded-tr-[40px] rounded-bl-[40px] shadow-lg shadow-blue-500 hover:scale-105 transition-all duration-800'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Hero