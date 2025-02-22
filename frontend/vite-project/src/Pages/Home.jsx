import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offer from './Offer'
import Hero2 from '../Components/Hero/Hero2'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import CarouselHero from '../Components/Hero/CarouselHero'



const Home = () => {
  return (
    <>
      <CarouselHero/>
      <Hero/>
      <Hero2/>
      {/* <About/> */}
      <Services/>
      <Offer/>
      <Portfolio/>
      {/* <Contact/> */}
    </>
  )
}

export default Home