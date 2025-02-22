import React from 'react'
import 'animate.css'
import '../../index.css'
import { NavLink } from 'react-router-dom'

const Hero2 = () => {
  return (
    <div className="container mx-auto px-4 pt-[160px] py-20 bg-[#E9F2FF]">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        <div className ="relative max-sm:hidden max-lg:hidden">
            <div className ="absolute -inset-4 bg-[#1230AE] opacity-10 blur-xl rounded-full"></div>
            <div className ="relative p-4 rounded-2xl">
              <div className ="grid grid-cols-2 gap-4">
                <div className ="p-2 rounded-lg h-[400px] flex items-center justify-center animate__animated animate__fadeInUp"
                  style={{animationDelay: "0.2s"}}>
                  <img src="/banner_4.jpg" alt=""className='w-full h-full rounded-tr-[40px] rounded-bl-[40px] shadow-lg shadow-blue-500 hover:scale-105 transition-all duration-800'/>
                </div>
                <div className ="p-2 rounded-lg h-[400px] flex items-center justify-center animate__animated animate__fadeInUp"
                  style={{animationDelay: "0.4s"}}
                >
                  <img src="/banner_6.avif" alt=""className='w-full h-full rounded-tr-[40px] rounded-bl-[40px] shadow-lg shadow-blue-500 hover:scale-105 transition-all duration-800'/>
                </div>
              </div>
            </div>
          </div>

        <div className="animate__animated animate__fadeInRight">
          <span className="text-[black] font-semibold mb-4 block">Switch to Solar Energy Today</span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#1230AE]">
            Transform Your Home with Solar Power
          </h1>
          <p className="text-xl mb-8 text-black">
          At Vaibhav Enterprises, we are dedicated to providing sustainable and cost-effective solar energy solutions for both residential and commercial properties.<br/> Our expert team ensures a seamless transition to solar energy, helping you save money and reduce your carbon footprint.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => window.open('/product_quotation.pdf', '_blank')}
              className="bg-[#17594A] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] px-8 py-3 rounded-full text-white font-semibold transition-colors shadow-lg shadow-gray-500 hover:shadow-lg hover:shadow-blue-500 animate__animated animate__pulse animate__infinite cursor-pointer">
              Get Free Quote
            </button>
          </div>
          <div className="mt-12 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-[#DF6D14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>25 Years Warranty On Module</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-[#DF6D14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Low Maintenance Cost</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative animate__animated animate__fadeInRight pt-[100px] flex justify-center">
        <div className="absolute -inset-4 bg-[#1230AE] opacity-20 blur-2xl rounded-full"></div>
        <div className="relative bg-black p-8 rounded-2xl w-3xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-[#FFF7F7] rounded-lg">
              <div>
                <h3 className="font-bold text-[#1230AE]">Limited Time Offer*</h3>
                <p className="text-sm text-black">Save upto 50% on installation</p>
              </div>
              <div className="flex flex-col text-[#DF6D14] text-2xl font-bold">50%
                <div className='text-neutral-500 text-xs'>T&C Apply</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#FFF7F7] rounded-lg">
              <div>
                <h3 className="font-bold text-[#1230AE]">Government Subsidy</h3>
                <p className="text-sm text-black">Additional tax benefits</p>
              </div>
              <div className="text-[#DF6D14] text-2xl font-bold">70%
              <div className='text-neutral-500 text-xs'>T&C Apply</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#FFF7F7] rounded-lg">
              <div>
                <h3 className="font-bold text-[#1230AE]">Energy Savings</h3>
                <p className="text-sm text-black">Average monthly savings</p>
              </div>
              <div className="text-[#DF6D14] text-2xl font-bold">60%
              <div className='text-neutral-500 text-xs'>T&C Apply</div>
              </div>
            </div>
            <NavLink to= "/contactus">
              <button className="w-full cursor-pointer bg-[#17594A] hover:bg-[#44786b] py-4 rounded-lg font-semibold transition-colors text-white">
              Claim Offer Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2