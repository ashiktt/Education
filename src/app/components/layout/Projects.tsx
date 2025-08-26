"use client";
import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  number: number;
  label: string;
}

interface AnimatedNumberProps {
  targetNumber: number;
  isInView: boolean;
}

const AnimatedNumber = React.memo(function AnimatedNumber({
  targetNumber,
  isInView,
}: AnimatedNumberProps) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCurrentNumber(0);
      return;
    }

    let animationFrameId: number;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const value = Math.floor(progress * targetNumber);

      setCurrentNumber(value);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, targetNumber]);

  return <h1 className="text-4xl font-bold">{currentNumber}+</h1>;
});

AnimatedNumber.displayName = "AnimatedNumber";

function Projects() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { number: 52, label: "Projects" },
    { number: 100, label: "Reviews" },
    { number: 30, label: "Clients" },
    { number: 20, label: "Ideas" },
  ];

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[520px] lg:h-96 py-20 bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/image_3.jpg.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="w-full gap-10 lg:px-20 grid grid-cols-2 lg:grid-cols-4 items-center text-center text-white justify-between">
          {stats.map((item, index) => (
            <div key={`stat-${index}`}>
              <AnimatedNumber
                targetNumber={item.number}
                isInView={isInView}
              />
              <h2 className="uppercase text-2xl mt-2">{item.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;