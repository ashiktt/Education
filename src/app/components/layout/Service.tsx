"use client"
import React, { useRef, useState, useEffect } from 'react';
import ServiceCard from '../service/ServiceCard';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ServiceData } from '@/app';

function Service({ bg, title, note ,data}: { bg?: string; title: string; note: string , id: string , data: ServiceData[]}) {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Check if scrolling is needed
  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        setShowLeft(scrollRef.current.scrollLeft > 0);
        setShowRight(
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
        );
      }
    };

    checkScroll(); // Run on mount
    window.addEventListener('resize', checkScroll); // Run on resize

    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeft(scrollRef.current.scrollLeft > 0);
      setShowRight(
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
      );
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
      handleScroll();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
      handleScroll();
    }
  };

  return (
    <div className={`${bg} relative`}>
      {/* container */}
      <div className="max-w-6xl mx-auto container">
        {/* heading  */}
        <div className="pb-10 pt-5">
          <h1 className="text-4xl text-heading font-semibold mb-4">{title}</h1>
          <p className="text-color">{note}</p>
        </div>

        {/* Scrollable section */}
        <div className="relative">
          {/* Left Button (Show only if needed) */}
          {showLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300"
            >
              <FaChevronLeft size={20} />
            </button>
          )}

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide max-w-6xl mx-auto"
            onScroll={handleScroll}
          >
            {data.map((item) => (
              <Link key={item.id} href={`/pages/service/${item.id}`}>
                <ServiceCard items={item}/>
              </Link>
            ))}
          </div>

          {/* Right Button (Show only if needed) */}
          {showRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300"
            >
              <FaChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Service;
