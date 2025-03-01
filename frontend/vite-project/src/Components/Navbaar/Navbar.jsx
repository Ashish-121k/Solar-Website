import React, { useState } from 'react'
import '../../index.css'
import 'animate.css'
import { NavLink } from 'react-router-dom';



const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className = "navbar flex justify-between p-0.5 pr-6 pl-6 bg-[#E9F2FF] text-[rgb(0,0,0)] z-50 fixed w-full border-b-1 border-gray-300 ">
        <img src = "/logo2.png" className="w-20 h-20 p-0.5"/>
        <div className='flex flex-col'>
          <div className='flex items-center justify-end w-full'>
            <a href="https://www.facebook.com/profile.php?id=61561602052171#" target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 m-2  animate__animated animate__wobble animate__infinite" stroke="currentColor" viewBox="0 0 512 512">
                <path fill="#106aff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@vaibhavsharma-t5g" target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7 h-7 m-2 animate__animated animate__wobble animate__infinite" stroke="currentColor">
                <path fill="#ff0000" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/vaibhavsolarpower/?fbclid=IwZXh0bgNhZW0CMTEAAR3Ljy1fzy6NPt7JXxEnLNQtmB_bB0koR6JVOeKeHzIqZwkz0YwOTS3uKYU_aem_1sgNMfxg3oqdNWc9nZCtlQ" target='_blank'>
              <img src="/instagram_logo.png" className="m-2 mt-2.5 w-6.5 h-6.5 animate__animated animate__wobble animate__infinite" alt=""/>
            </a>
            
            

          </div>
          <div className="nav-logo flex justify-end items-center w-full">
            {/* <img src = "/logo2.png" className="w-18 h-18 p-0.5"/> */}
            {/* <h1 className = "text-[#1230AE] font-extrabold text-3xl">Vaibhav Enterprises</h1> */}
            <button id="menu-btn" className ="lg:hidden cursor-pointer" aria-label="Menu"
            onClick={()=>setOpen(!isOpen)}
            >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#1230AE]">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </div>
            </button>
            <ul className='nav-menu hidden lg:flex justify-between items-center gap-8'>
              <li>
                <NavLink style = {{textDecoration: 'none'}} to = '/' 
                  className={
                    ({ isActive }) => 
                    isActive ? "bg-[#17594A] text-[#ffffff] p-2 rounded-[30px] transition-all duration-500 shadow-lg shadow-blue-500" 
                    :"text-[#1230AE] hover:bg-[#FFF7F7] hover:text-[#1230AE] p-2 rounded-[30px] hover:border border-[#1230AE] transition-all duration-500"
                  }>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink style = {{textDecoration: 'none'}} to = '/about' 
                  className={
                    ({ isActive }) => 
                    isActive ? "bg-[#17594A] text-[#ffffff] p-2 rounded-[30px] shadow-lg shadow-blue-500 transition-all duration-500" 
                    :"text-[#1230AE] hover:bg-[#FFF7F7] hover:text-[#1230AE] p-2 rounded-[30px] hover:border border-[#1230AE] transition-all duration-500"
                  }>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink style = {{textDecoration: 'none'}} to = '/services' 
                  className={
                    ({ isActive }) => 
                    isActive ? "bg-[#17594A] text-[#ffffff] p-2 rounded-[30px] transition-all duration-500 shadow-lg shadow-blue-500" 
                    :"text-[#1230AE] hover:bg-[#fff7f7] hover:text-[#1230AE] p-2 rounded-[30px] hover:border border-[#1230AE] transition-all duration-500"
                  }>
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink style = {{textDecoration: 'none'}} to = '/products' 
                  className={
                    ({ isActive }) => 
                    isActive ? "bg-[#17594A] text-[#ffffff] p-2 rounded-[30px] transition-all duration-500 shadow-lg shadow-blue-500" 
                    :"text-[#1230AE] hover:bg-[#FFF7F7] hover:text-[#1230AE] p-2 rounded-[30px] hover:border border-[#1230AE] transition-all duration-500"
                  }>
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink style = {{textDecoration: 'none'}} to = '/offers' 
                  className={
                    ({ isActive }) => 
                    isActive ? "bg-[#17594A] text-[#ffffff] p-2 rounded-[30px] transition-all duration-500 shadow-lg shadow-blue-500" 
                    :"text-[#1230AE] hover:bg-[#FFF7F7] hover:text-[#1230AE] p-2 rounded-[30px] hover:border border-[#1230AE] transition-all duration-500"
                  }>
                  Offers
                </NavLink>
              </li>

              <li>
                <NavLink style = {{textDecoration: 'none'}} to = '/portfolio' 
                  className={
                    ({ isActive }) => 
                    isActive ? "bg-[#17594A] text-[#ffffff] p-2 rounded-[30px] transition-all duration-500 shadow-lg shadow-blue-500" 
                    :"text-[#1230AE] hover:bg-[#FFF7F7] hover:text-[#1230AE] p-2 rounded-[30px] hover:border border-[#1230AE] transition-all duration-500"
                  }>
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink style = {{textDecoration: 'none'}} to = '/contactus' 
                  className={
                  ({ isActive }) => 
                  isActive ? "bg-[#17594A] text-[#ffffff] p-2 rounded-[30px] transition-all duration-500 shadow-lg shadow-blue-500" 
                  :"text-[#1230AE] hover:bg-[#FFF7F7] hover:text-[#1230AE] p-2 rounded-[30px] hover:border border-[#1230AE] transition-all duration-500"
                  }>
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
          {
              isOpen &&
              <div id="mobile-menu" className="lg:hidden flex justify-end animate__animated animate__slideInRight">
                <ul className="py-4 ml-2">
                <li className="py-2"
                  onClick={()=>setOpen(!isOpen)}
                >
                  <NavLink to="/" className="block hover:text-[#1230AE] transition-colors">Home
                  </NavLink>
                </li>
                <li className="py-2"
                  onClick={()=>setOpen(!isOpen)}
                >
                  <NavLink to="/about" className="block hover:text-[#1230AE] transition-colors">About
                  </NavLink>
                </li>
                <li className="py-2"
                  onClick={()=>setOpen(!isOpen)}
                >
                  <NavLink to="/services" className="block hover:text-[#1230AE] transition-colors">Services
                  </NavLink>
                </li>
                <li className="py-2"
                  onClick={()=>setOpen(!isOpen)}
                >
                  <NavLink to="/products" className="block hover:text-[#1230AE] transition-colors">Products
                  </NavLink>
                </li>
                <li className="py-2"
                  onClick={()=>setOpen(!isOpen)}
                >
                  <NavLink to="/offers" className="block hover:text-[#1230AE] transition-colors">Offers
                  </NavLink>
                  </li>
                <li className="py-2"
                  onClick={()=>setOpen(!isOpen)}
                >
                  <NavLink to="/portfolio" className="block hover:text-[#1230AE] transition-colors">Portfolio
                  </NavLink>
                </li>
                <li className="py-2"
                  onClick={()=>setOpen(!isOpen)}
                >
                  <NavLink to="/contactus" className="block hover:text-[#1230AE] transition-colors">Contact
                  </NavLink>
                </li>
                </ul>
              </div>
            }
        </div>
      </div>
    </>
    
  )
}

export default Navbar