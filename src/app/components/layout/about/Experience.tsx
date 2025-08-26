'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

function Experience() {
    const data = [
        {
            subject: "Engineering Studies",
            percentage: 90,
            color: "bg-pink-500"
        },
        {
            subject: "Business Studies",
            percentage: 70,
            color: "bg-yellow-500"
        },
        {
            subject: "English Studies",
            percentage: 80,
            color: "bg-blue-500"
        },
        {
            subject: "Science Studies",
            percentage: 60,
            color: "bg-green-500"
        },
    ];

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <>
            {/* Hero Banner */}
            <div
                className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url('/exBanner.webp')",
                }}
            >
                <div className="absolute inset-0 bg-blue-700 bg-opacity-90"></div>
                <div className="relative text-center px-4">
                    <p className="text-sm font-medium uppercase mb-4 tracking-wider">
                        Best Education University
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6">
                        Education Is The Backbone <br />
                        Of a Nation Expansion Of Idea
                    </h1>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md"
                        >
                            Join With Us →
                        </a>
                        <a
                            href="#"
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg transition shadow-md"
                        >
                            Read More →
                        </a>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="-mt-24 pb-16 relative bg-gray-100">
                <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row w-full gap-8 mt-12">
                        {/* Image */}
                        <div className="relative h-[455px] w-full lg:w-[50%] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/AboutBanner.webp"
                                alt="Experience Image"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Progress Bars */}
                        <div
                            className="w-full lg:w-[50%] bg-white p-8 rounded-lg shadow-xl"
                            ref={containerRef}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-indigo-900 text-center">Our Expertise</h2>
                            {data.map((item) => (
                                <div key={item.subject} className="mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-lg font-semibold text-gray-800">{item.subject}</span>
                                        <span className="text-lg font-semibold text-gray-800">{item.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                                        <div
                                            className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                                            style={{
                                                width: isInView ? `${item.percentage}%` : `0%`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
