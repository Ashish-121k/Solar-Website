import React from 'react'
import 'animate.css'
import '../index.css'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className="container mx-auto px-4 pb-16 pt-[120px]">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <span className="text-[#1230AE] font-semibold">About Us</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Why Choose Our Solar Solutions?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">We're committed to providing sustainable energy solutions that help homeowners save money while contributing to a greener future.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate__animated animate__fadeInLeft">
          <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-[#1230AE] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[rgb(0,0,0)]">Expert Installation</h3>
                  <p className="text-gray-600">Our certified technicians ensure professional installation with attention to detail and safety.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#17594A] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Cost Effective</h3>
                  <p className="text-gray-600">Maximize your ROI with our efficient solar solutions and available tax incentives.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#C84C05] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">25-Year Warranty On Module</h3>
                  <p className="text-gray-600">We stand behind our products with comprehensive warranty coverage.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#1230AE] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">7-Year Warranty On Inverter</h3>
                  <p className="text-gray-600">We stand behind our products with comprehensive warranty coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate__animated animate__fadeInRight space-y-6">
          <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-black">Our Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C84C05]">1000+</div>
                <p className="text-gray-600">Installations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C84C05]">5MW+</div>
                <p className="text-gray-600">Power Generated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C84C05]">$2M+</div>
                <p className="text-gray-600">Customer Savings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C84C05]">10K+</div>
                <p className="text-gray-600">CO₂ Reduction (tons)</p>
              </div>
            </div>
          </div>

          <div className="bg-[#17594A] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Go Solar?</h3>
            <p className="mb-6">Get a free consultation and custom quote for your home.</p>
            <NavLink to="/contactus" className="inline-block bg-white text-[#17594A] px-8 py-3 rounded-full font-semibold hover:bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] transition-colors animate__animated animate-pulse">
              Contact Us Today
            </NavLink>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="animate__animated animate__fadeInLeft space-y-6">
          <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-black">Our Objective</h3>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#1230AE] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700">Our objective is to provide seamless and efficient solar energy solutions through a user-friendly online platform. 
                  </div>
                </div>  
            </div>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#C84C05] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700"> We aim to educate and empower individuals and businesses to adopt clean energy by offering expert consultation, high-quality solar installations, and reliable after-sales support.
                  </div>
                </div>  
            </div>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#17594A] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700">By integrating advanced technology and industry best practices, we strive to simplify the solar adoption process, making it cost-effective and accessible to all. 
                  </div>
                </div>  
            </div>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#1230AE] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700">Our focus is on sustainability, customer satisfaction, and contributing to a greener planet by promoting renewable energy solutions.
                  </div>
                </div>  
            </div>
          </div>

          <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#17594A] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700">Our mission is to revolutionize the adoption of solar energy by providing high-quality, efficient, and affordable solar solutions. 
                  </div>
                </div>  
            </div>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#1230AE] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700">We are committed to helping individuals, businesses, and communities transition to sustainable energy by offering expert guidance, cutting-edge technology, and seamless installation services.
                  </div>
                </div>  
            </div>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#C84C05] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700">Through innovation, reliability, and customer-centric solutions, we aim to reduce carbon footprints, lower energy costs, and contribute to a cleaner, greener future.
                  </div>
                </div>  
            </div>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#17594A] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700"> Our focus is on empowering people with renewable energy, ensuring a brighter tomorrow for future generations.
                  </div>
                </div>  
            </div>
          </div>
        </div>

        <div className="animate__animated animate__fadeInRight">
          <div className="bg-linear-to-r from-[#FFF7F7] to-[#CCE0FF] p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-black">Our Vision</h3>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#17594A] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700">Our vision is to create a world where clean and renewable energy is accessible to all. Through our website, we aim to be the ultimate destination for individuals and businesses seeking expert solar solutions. 
                  </div>
                </div>  
            </div>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#1230AE] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700">We are committed to delivering top-quality solar panel installations, innovative energy solutions, and comprehensive guidance to help our customers transition to sustainable living.
                  </div>
                </div>  
            </div>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#C84C05] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700">By leveraging cutting-edge technology, expert knowledge, and exceptional customer service, we strive to make solar energy adoption effortless, affordable, and efficient.
                  </div>
                </div>  
            </div>
            <div className='flex justify-center items-center mb-2'>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#17594A] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-700"> Our goal is to empower communities, reduce carbon footprints, and contribute to a greener, brighter future for generations to come.
                  </div>
                </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About