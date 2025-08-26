"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { SliderProps } from "@/app";

export default function TestimonialSection({ testimonial, perView }: SliderProps) {
    return (
        <section className="testimonial my-10 relative z-20">
            <div className="bg-slate-200 rounded-[70px] px-6">
                <div className="flex flex-col items-center py-10">
                    <h2 className="text-4xl font-semibold text-blue-500 mb-9 text-center">What clients say</h2>
                    {/* Swiper slider */}
                    <div className="w-full">
                        <Swiper
                            slidesPerView={perView}
                            spaceBetween={30}
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
                            {testimonial?.map((slide, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial__item w-full max-w-[450px] h-auto bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto shadow-md relative">
                                        {/* Icon */}
                                        <div className="absolute top-10 left-6 bg-purple-500 text-white w-14 h-14 flex justify-center items-center rounded-full">
                                            <FaQuoteLeft />
                                        </div>

                                        {/* User Info */}
                                        <div className="flex gap-4 ml-9 mb-6">
                                            <div className="relative h-16 w-16">
                                                <Image
                                                    src={slide.image}
                                                    alt="Nattasha Mith"
                                                    className="object-cover rounded-full"
                                                    fill
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold">{slide.name}</h3>
                                                <div className="text-sm text-gray-500">{slide.role}</div>
                                            </div>
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="text-gray-700 text-base mb-6">
                                            “{slide.text}”
                                        </p>

                                        {/* Star Ratings */}
                                        <div className="flex gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="gold"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5"
                                            >
                                                <path d="M12 .587l3.668 7.435 8.214 1.193-5.941 5.786 1.404 8.192-7.345-3.862-7.345 3.862 1.404-8.192-5.941-5.786 8.214-1.193z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="gold"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5"
                                            >
                                                <path d="M12 .587l3.668 7.435 8.214 1.193-5.941 5.786 1.404 8.192-7.345-3.862-7.345 3.862 1.404-8.192-5.941-5.786 8.214-1.193z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="gold"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5"
                                            >
                                                <path d="M12 .587l3.668 7.435 8.214 1.193-5.941 5.786 1.404 8.192-7.345-3.862-7.345 3.862 1.404-8.192-5.941-5.786 8.214-1.193z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="gold"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5"
                                            >
                                                <path d="M12 .587l3.668 7.435 8.214 1.193-5.941 5.786 1.404 8.192-7.345-3.862-7.345 3.862 1.404-8.192-5.941-5.786 8.214-1.193z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="gold"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5"
                                            >
                                                <path d="M12 .587l3.668 7.435 8.214 1.193-5.941 5.786 1.404 8.192-7.345-3.862-7.345 3.862 1.404-8.192-5.941-5.786 8.214-1.193z" />
                                            </svg>
                                        </div>
                                    </div>

                                </SwiperSlide>

                            ))}

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
