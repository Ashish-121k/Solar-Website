import React from 'react'
import 'animate.css'
import '../index.css'
import { NavLink } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 pb-16 pt-[120px]">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <span className="text-[#1230AE] font-semibold">Our Portfolio</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Featured Projects</h2>
        <p className="text-gray max-w-2xl mx-auto">Explore our successful solar installations across residential and commercial properties</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl overflow-hidden animate__animated animate__fadeInUp">
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
              <img src="/photo_1.jpg" width="100%" height="100%" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">2kW System Installation</h3>
            {/* <p className="text-gray mb-4">2kW System Installation</p> */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1230AE] px-3 py-1 rounded-full text-sm text-white">Residential</span>
              <span className="bg-[#C84C05] px-3 py-1 rounded-full text-sm text-white">2kW</span>
              <span className="bg-[#17594A] px-3 py-1 rounded-full text-sm text-white">Battery Backup</span>
            </div>
            <div className="flex justify-between items-center text-black">
              {/* <span>Completion: 2023</span> */}
              {/* <NavLink to="" className="text-[#1230AE] hover:underline">View Details →</NavLink> */}
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl overflow-hidden animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
          <img src="/photo_3.jpg" width="100%" height="100%" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">3kW Commercial Installation</h3>
            {/* <p className="text-gray mb-4">3kW Commercial Installation</p> */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1230AE] px-3 py-1 rounded-full text-sm text-white">Commercial</span>
              <span className="bg-[#C84C05] px-3 py-1 rounded-full text-sm text-white">3kW</span>
              <span className="bg-[#17594A] px-3 py-1 rounded-full text-sm text-white">Grid-Tied</span>
            </div>
            <div className="flex justify-between items-center text-black">
              {/* <span>Completion: 2023</span> */}
              {/* <NavLink to="#" className="text-[#1230AE] hover:underline">View Details →</NavLink> */}
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] rounded-2xl overflow-hidden animate__animated animate__fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
          <img src="/photo_6.jpg" width="100%" height="100%" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">5kW Community Project</h3>
            <p className="text-gray mb-4">5kW Community Project</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1230AE] px-3 py-1 rounded-full text-sm text-white">Community</span>
              <span className="bg-[#C84C05] px-3 py-1 rounded-full text-sm text-white">5kW</span>
              <span className="bg-[#17594A] px-3 py-1 rounded-full text-sm text-white">Ground Mount</span>
            </div>
            <div className="flex justify-between items-center text-black">
              {/* <span>Completion: 2023</span> */}
              {/* <NavLink to="#" className="text-[#1230AE] hover:underline">View Details →</NavLink> */}
            </div>
          </div>
        </div>
      </div>


      <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] p-6 rounded-2xl animate__animated animate__fadeIn">
          <div className="text-4xl font-bold text-[#1230AE] mb-2">100+</div>
          <div className="text-black">Projects Completed</div>
        </div>
        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] p-6 rounded-2xl animate__animated animate__fadeIn" style={{animationDelay: '0.2s'}}>
          <div className="text-4xl font-bold text-[#1230AE] mb-2">2MW+</div>
          <div className="text-black">Power Installed</div>
        </div>
        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] p-6 rounded-2xl animate__animated animate__fadeIn" style={{animationDelay: '0.4s'}}>
          <div className="text-4xl font-bold text-[#1230AE] mb-2">98%</div>
          <div className="text-black">Client Satisfaction</div>
        </div>
        <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] p-6 rounded-2xl animate__animated animate__fadeIn" style={{animationDelay: '0.6s'}}>
          <div className="text-4xl font-bold text-[#1230AE] mb-2">10+</div>
          <div className="text-black">Years Experience</div>
        </div>
      </div>


      <div className="text-center mt-16">
        <NavLink to="/contactus" className="inline-block text-white px-8 py-4 rounded-full font-semibold bg-[#1230AE] hover:bg-[#ffffff] hover:border border-[#1230AE] hover:text-[#1230AE] transition-colors animate__animated animate-pulse animate__infinite">
          Start Your Solar Project
        </NavLink>
      </div>
    </div>
  )
}

export default Portfolio