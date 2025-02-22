import React from 'react';
import { Carousel } from 'antd';
import '../../index.css';

const CarouselHero = () => {
  return (
    <Carousel autoplay>
      <div className="mx-auto px-4 py-20 pb-[100px] lg:h-[100vh] w-[100vw] md:h-[30vh]">
        <img className="object-cover" src="/b11.jpg" alt="Banner_Image"/>
      </div>
      <div className="mx-auto px-4 py-20 pb-[100px] lg:h-[100vh] w-[100vw] md:h-[30vh]">
        <img className="object-cover" src="/b22.jpg" alt="Banner_Image"/>
      </div>
    </Carousel>
  );
}

export default CarouselHero;
