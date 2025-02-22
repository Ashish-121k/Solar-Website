import React from 'react'
import 'animate.css'
import '../index.css'
import { NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <div className="container mx-auto px-4 pb-16 pt-[120px]">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <span className="text-[#1230AE] font-semibold">Our Products</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Smart, Secure & Sustainable Solutions</h2>
        <p className="text-gray max-w-2xl mx-auto">Our products ensure efficiency, reliability, and peace of mind!</p>
      </div>

      <div className="grid mb-5 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl overflow-hidden animate__animated animate__fadeInUp">
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
              <img src="/photo_8.jpg" width="100%" height="100%" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">Solar Power Solutions</h3>
            <p className="text-gray mb-4"></p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1230AE] px-3 py-1 rounded-full text-sm text-white">On-Grid Solar</span>
              <span className="bg-[#C84C05] px-3 py-1 rounded-full text-sm text-white">Off-Grid Solar</span>
              <span className="bg-[#17594A] px-3 py-1 rounded-full text-sm text-white">Hybrid Solar</span>
            </div>
            <div className="flex justify-between items-center text-black">
              <span>Battery Backup | Independent Power</span>
              <NavLink to="/product-details" className="text-[#1230AE] hover:underline">View Details →</NavLink>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl overflow-hidden animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
          <img src="/photo_9.jpg" width="100%" height="100%" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">Closed-Circuit Television (CCTV)</h3>
            <p className="text-gray mb-4"></p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1230AE] px-3 py-1 rounded-full text-sm text-white">24/7 Surveillance</span>
              <span className="bg-[#17594A] px-3 py-1 rounded-full text-sm text-white">Remote Monitoring</span>
              
            </div>
            <div className="flex justify-between items-center text-black">
              <span>Remote access | Recording </span>
              {/* <NavLink to="#" className="text-[#1230AE] hover:underline">View Details →</NavLink> */}
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl overflow-hidden animate__animated animate__fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
          <img src="/photo_10.jpg" width="100%" height="100%" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">Attendance Biometric Systems</h3>
            <p className="text-gray mb-4"></p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1230AE] px-3 py-1 rounded-full text-sm text-white">Fingerprint Access</span>
              <span className="bg-[#17594A] px-3 py-1 rounded-full text-sm text-white">Secure Authentication</span>
            </div>
            <div className="flex justify-between items-center text-black">
              <span>Advanced Authentication Technology</span>
              {/* <NavLink to="#" className="text-[#1230AE] hover:underline">View Details →</NavLink> */}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl overflow-hidden animate__animated animate__fadeInUp">
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
              <img src="/photo_11.jpg" width="100%" height="100%" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">Intercom Security Devices</h3>
            <p className="text-gray mb-4"></p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1230AE] px-3 py-1 rounded-full text-sm text-white"> Video Intercoms</span>
              <span className="bg-[#17594A] px-3 py-1 rounded-full text-sm text-white">Audio Intercoms</span>
              
            </div>
            <div className="flex justify-between items-center text-black">
              <span>Video & Audio Verification</span>
              {/* <NavLink to="" className="text-[#1230AE] hover:underline">View Details →</NavLink> */}
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl overflow-hidden animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
          <img src="/photo_12.jpg" width="100%" height="100%" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">Fire Alarm Systems</h3>
            <p className="text-gray mb-4"></p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1230AE] px-3 py-1 rounded-full text-sm text-white">Automatic Alerts</span>
              <span className="bg-[#17594A] px-3 py-1 rounded-full text-sm text-white">Early Fire Detection</span>
              
            </div>
            <div className="flex justify-between items-center text-black">
              <span>Manual Call Points</span>
              {/* <NavLink to="#" className="text-[#1230AE] hover:underline">View Details →</NavLink> */}
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl overflow-hidden animate__animated animate__fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
          <img src="/photo_13.jpg" width="100%" height="100%" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">Smoke Detectors</h3>
            <p className="text-gray mb-4"></p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1230AE] px-3 py-1 rounded-full text-sm text-white">Quick Smoke Sensing</span>
              <span className="bg-[#17594A] px-3 py-1 rounded-full text-sm text-white">Fire Safety</span>
             
            </div>
            <div className="flex justify-between items-center text-black">
              <span>Ionization & Photoelectric Types</span>
              {/* <NavLink to="#" className="text-[#1230AE] hover:underline">View Details →</NavLink> */}
            </div>
          </div>
        </div>
      </div>


      


      <div className="text-center mt-16">
        <NavLink to="/contactus" className="inline-block text-white px-8 py-4 rounded-full font-semibold bg-[#1230AE] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] transition-colors animate__animated animate-pulse animate__infinite">
          Buy Your Products
        </NavLink>
      </div>
    </div>
  )
}

export default Product