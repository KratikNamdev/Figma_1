import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Slider() {
  return (
    <>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='slider-one'>
        <h1>
        Discover Your Street Style with Our
        </h1>
        <h1>
       Diverse Collection of Streetwear
        </h1>
        <p>Get your unique streetwear style with our various collections.<br/> Shop now to look fashionable with the latest trends</p>
      <button>Shop Now</button>
        </SwiperSlide>
        {/* <SwiperSlide>
        
        </SwiperSlide> */}
        
      </Swiper>
    </>
  )
}

export default Slider