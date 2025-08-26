"use client";

import Image from "next/image";
import React from "react";

const OurPartners = () => {
  return (
    <section className="our-partners py-16">
      <div className="container mx-auto text-center px-6">
        {/* Title and Description */}
        <h2 className="text-3xl lg:text-4xl text-blue-500 font-bold mb-4">Our Partners</h2>
        <p className="text-lg text-gray-600 mb-8">
          We are proud to collaborate with these amazing brands and companies.
        </p>

        {/* Marquee Section */}
        <div className="relative overflow-hidden">
          <div className="marquee flex items-center gap-16 animate-marquee">
            {/* Logos */}
            <Image
            width={64}
            height={64}
              src="/brands/01.svg"
              alt="Partner 1"
              className="h-16 w-auto object-contain"
            />
            <Image
            width={100}
            height={100}
              src="/brands/02.svg"
              alt="Partner 2"
              className="h-20 w-auto object-contain"
            />
            <Image
            width={100}
            height={100}
              src="/brands/03.svg"
              alt="Partner 3"
              className="h-20 w-auto object-contain"
            />
            <Image
            width={100}
            height={100}
              src="/brands/01.svg"
              alt="Partner 1"
              className="h-20 w-auto object-contain"
            />
            <Image
            width={100}
            height={100}
              src="/brands/02.svg"
              alt="Partner 2"
              className="h-20 w-auto object-contain"
            />
            <Image
            width={100}
            height={100}
              src="/brands/03.svg"
              alt="Partner 3"
              className="h-20 w-auto object-contain"
            />
            <Image
            width={100}
            height={100}
              src="/brands/01.svg"
              alt="Partner 1"
              className="h-20 w-auto object-contain"
            />
            <Image
            width={100}
            height={100}
              src="/brands/02.svg"
              alt="Partner 2"
              className="h-20 w-auto object-contain"
            />
            <Image
            width={100}
            height={100}
              src="/brands/03.svg"
              alt="Partner 3"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
