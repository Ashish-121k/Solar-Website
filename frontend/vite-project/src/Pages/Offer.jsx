import React from 'react'
import 'animate.css'
import '../index.css'
import { NavLink } from 'react-router-dom'

const Offer = () => {
  return (
    <div className="container mx-auto px-4 pb-16 pt-[120px]">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <span className="text-[#1230AE] font-semibold">Special Offers</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Limited Time Deals</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">Take advantage of our exclusive offers and start saving with solar energy today</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    
        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] text-black rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp">
          <div className="bg-[#FDB813] inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6">Most Popular</div>
          <div className='flex text-neutral-500 text-xs justify-end'>T&C Apply</div>
          <h3 className="text-2xl font-bold mb-4">Early Bird Special</h3>
          <div className="text-4xl font-bold mb-4">
            <span className="text-[#C84C05]">50%</span> OFF
          </div>
          <p className="text-gray mb-6">Installation costs when you sign up before month end</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Free Site Survey
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Priority Installation
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Extended Warranty
            </li>
          </ul>
          <NavLink to ="/contactus" className="block text-white text-center bg-[#17594A] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] px-6 py-2 rounded-full transition-colors ">Claim Offer</NavLink>
        </div>

       
        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] text-black rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="bg-[#FDB813] inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6">Best Value</div>
          <div className='flex text-neutral-500 text-xs justify-end'>T&C Apply</div>
          <h3 className="text-2xl font-bold mb-4">Bundle &amp; Save</h3>
          <div className="text-4xl font-bold mb-4">
            <span className="text-[#C84C05]">30%</span> OFF
          </div>
          <p className="text-gray mb-6">Solar panels + battery storage package</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Premium Panels
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Battery Backup
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Smart Monitoring
            </li>
          </ul>
          <NavLink to="/contactus" className="block text-white text-center bg-[#17594A] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] px-6 py-2 rounded-full transition-colors ">Claim Offer</NavLink>
        </div>

     
        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] text-black rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="bg-[#FDB813] inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6">Referral Deal</div>
          <div className='flex text-neutral-500 text-xs justify-end'>T&C Apply</div>
          <h3 className="text-2xl font-bold mb-4">Refer &amp; Earn</h3>
          <div className="text-4xl font-bold mb-4">
            <span className="text-[#C84C05]">Rs. 5,000</span>
          </div>
          <p className="text-gray mb-6">Cash bonus for every successful referral</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Cash Rewards
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              No Limit
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Instant Payout
            </li>
          </ul>
          <NavLink to="/contactus" className="block text-white text-center bg-[#17594A] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] px-6 py-2 rounded-full transition-colors ">Claim Offer</NavLink>
        </div>
      </div>


      <div className="text-center p-8 rounded-2xl animate__animated animate__fadeIn">
        <NavLink to="/contactus" className="inline-block text-white bg-[#1230AE] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] px-6 py-2 rounded-full transition-colors animate__animated animate-pulse">
          Claim Your Offer Now
        </NavLink>
      </div>
    </div>
  )
}

export default Offer