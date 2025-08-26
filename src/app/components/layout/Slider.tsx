"use client"

import { motion } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SliderProps } from '@/app';
import Image from "next/image";

export default function App({ slider, perView }: SliderProps) {

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={perView}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slider && slider.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[400px]">
              {/* Background image */}
              <Image
                fill
                src={slide.image}
                alt="Background"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              {/* Centered content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{slide.heading}</h2>
                <p className="text-base lg:text-lg max-w-[80%]">{slide.description}</p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
