// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// function MotiveBanner() {
//   const [isInView, setIsInView] = useState(false);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       { threshold: 0.4 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col lg:flex-row items-center justify-between overflow-hidden px-6 py-12 gap-10"
//     >
//       {/* Text Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1 }}
//         className="lg:w-1/2 w-full text-center lg:text-left"
//       >
//         <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
//           Limitless Learning,
//           <br /> More Possibilities
//         </h1>
//         <p className="text-lg lg:text-xl py-5 text-gray-700 font-medium">
//           Discover your passion and unlock opportunities by answering just a few questions.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-4 py-3 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg"
//         >
//           JOIN FOR FREE
//         </motion.button>
//       </motion.div>

//       {/* Image */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={isInView ? { scale: 1, opacity: 1 } : {}}
//         transition={{ duration: 1.2, delay: 0.2 }}
//         className="lg:w-1/2 w-full relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl"
//       >
//         <Image
//           src="/motive.webp"
//           alt="Student motivation"
//           fill
//           className="object-cover"
//         />
//       </motion.div>
//     </div>
//   );
// }

// export default MotiveBanner;


"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function MotiveBanner() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Store the current ref value in a variable
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false); // Added to reset when element leaves view
        }
      },
      { threshold: 0.4 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        // Alternatively, you could use: observer.disconnect();
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col lg:flex-row items-center justify-between overflow-hidden px-6 py-12 gap-10"
    >
      {/* Text Content - No changes needed here */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 w-full text-center lg:text-left"
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
          Limitless Learning,
          <br /> More Possibilities
        </h1>
        <p className="text-lg lg:text-xl py-5 text-gray-700 font-medium">
          Discover your passion and unlock opportunities by answering just a few questions.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 py-3 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg"
        >
          JOIN FOR FREE
        </motion.button>
      </motion.div>

      {/* Image - No changes needed here */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="lg:w-1/2 w-full relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl"
      >
        <Image
          src="/motive.webp"
          alt="Student motivation"
          fill
          className="object-cover"
          priority // Added for better loading of important image
        />
      </motion.div>
    </div>
  );
}

export default MotiveBanner;