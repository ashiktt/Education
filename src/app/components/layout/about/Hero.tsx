import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative h-[500px] w-full">
      {/* Background Image */}
      <Image
        src="/aboutHero.webp" 
        alt="Hero Background"
        className="object-cover"
      fill
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 text-white bg-black bg-opacity-50 px-4">
        <div className="max-w-6xl h-full mx-auto flex lg:items-start items-center flex-col justify-center">
        <h1 className="text-4xl font-bold lg:w-1/2 mb-4">
          WE ARE NUMBER ONE CONSULTATION FIRM
        </h1>
        <p className="mb-8 max-w-xl">
          Lorem ipsum dolor sit amet, an labores explicari qui, eu nostrum
          copiosae argumentum has. Latine propriae quo no, unum ridens
          expetenda id est.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
          >
            Read More
          </a>
          <a
            href="#"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded"
          >
            Contact Us
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
