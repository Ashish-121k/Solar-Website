import React from 'react'
import '../index.css'
import 'animate.css'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <div className="container mx-auto px-4 pb-16 pt-[120px]">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <span className="text-[#1230AE] font-semibold">Our Services</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Complete Solar Solutions</h2>
        <p className="text-gray max-w-2xl mx-auto">We offer comprehensive solar services from consultation to installation and maintenance</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay:'0.2s'}}>
          <div className="bg-[#1230AE] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4">Commercial Solutions</h3>
          <p className="text-gray mb-4">Large-scale solar installations for businesses and commercial properties.</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              ROI Analysis
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Custom Business Plans
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Tax Incentive Support
            </li>
          </ul>
          <button 
            onClick={() => window.open('/product_quotation.pdf', '_blank')}
            className="inline-block  text-white bg-[#1230AE] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] px-6 py-2 rounded-full transition-colors cursor-pointer">
            Get Quote
          </button>
        </div>

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp">
          <div className="bg-[#17594A] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4">Residential Installation</h3>
          <p className="text-gray mb-4">Complete home solar system installation including panels, inverters, and mounting hardware.</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Custom Design
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Professional Installation
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Permit Handling
            </li>
          </ul>
          <button 
            onClick={() => window.open('/product_quotation.pdf', '_blank')}
            className="inline-block  text-white bg-[#17594A] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] px-6 py-2 rounded-full transition-colors cursor-pointer">
            Get Quote
          </button>
        </div>


        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="bg-[#C84C05] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4">Maintenance &amp; Support</h3>
          <p className="text-gray mb-4">Comprehensive maintenance and monitoring services for optimal performance.</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              24/7 Monitoring
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Regular Inspections
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1230AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Emergency Support
            </li>
          </ul>
          <button 
            onClick={() => window.open('/product_quotation.pdf', '_blank')}
            className="inline-block  text-white bg-[#C84C05] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] px-6 py-2 rounded-full transition-colors cursor-pointer">
            Get Quote
          </button>
        </div>
      </div>

      <div className="mt-16 text-center">
        <NavLink to="/contactus" className="inline-block bg-[#1230AE] px-8 py-4 rounded-full text-white font-semibold hover:bg-[#ffffff] hover:text-black hover:border border-[#1230AE] transition-colors animate__animated animate__pulse animate__infinite">
          Schedule a Free Consultation
        </NavLink>
      </div>
    </div>
  )
}

export default Services