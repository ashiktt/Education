"use client";

import { useDispatch, useSelector } from "react-redux";
import OurPartners from "./components/layout/about/OurPartners";
import Categories from "./components/layout/home/Categories";
import MotiveBanner from "./components/layout/home/MotiveHero";
import Projects from "./components/layout/Projects";
import Service from "./components/layout/Service";
import Slider from "./components/layout/Slider";
import SubscriptionSection from "./components/layout/Subscrib";
import TestimonialSection from "./components/layout/Testimonials";
import { AppDispatch, RootState } from "./redux/store";
import { useEffect } from "react";
import { fetchServicestAsync } from "./redux/service/servicesSlice";
import { CldOgImage } from "next-cloudinary";
import Loading from "./components/loading";

export default function Page() {

  const dispatch = useDispatch<AppDispatch>();

  const { Services: data, status } = useSelector((state: RootState) => state.services)

  console.log(status)

  useEffect(() => {
    dispatch(fetchServicestAsync())
  }, [dispatch])

  const heroSlider = [
    {
      image: "/banner.jpg",
      heading: "Heading Title 1",
      description: "This is the paragraph describing the content. Make it short and impactful.",
    },
    {
      image: "/banner2.jpg",
      heading: "Heading Title 2",
      description: "This is the paragraph describing the content. Make it short and impactful.",
    },
    {
      image: "/banner3.jpg",
      heading: "Heading Title 3",
      description: "This is the paragraph describing the content. Make it short and impactful.",
    },
  ];

  // testimonials
  const testimonials = [
    {
      id: "1",
      image: "/01.png",
      name: "Nattasha Mith",
      role: "Senior Developer",
      text: "“One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.”",
      rating: 5,
    },
    {
      id: "2",
      image: "/02.png",
      name: "Mike Davis",
      // location: "Greenville, USA",
      rating: 5,
      role: "Senior Developer",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corporis itaque error.",
    },
    {
      id: "3",
      image: "/03.png",
      name: "Olivia Wilson",
      // location: "Greenville, USA",
      rating: 5,
      role: "Senior Developer",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corporis itaque error.",
    },
  ];



  const prop = [
    {
      id: "1",
      bg: "",
      title: "Popular Courses",
      note: "Discover what people are learning",
      data: data
    },
    {
      id: "2",
      bg: "bg-surface",
      title: "New courses",
      note: "Learn new skills, pursue your interests or advance your career with our short online courses",
      data: data
    },
    {
      id: "3",
      bg: "",
      title: "Recommended for you",
      note: "Embrace Learning in Every Discovery",
      data: data
    }
  ]

  return (
    <>
      <Slider slider={heroSlider} perView={1} />
      {status === "loading" ? <Loading
        spin="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        section="flex items-center justify-center min-h-screen"
      /> : <Service id={prop[0].id} bg={prop[0].bg} title={prop[0].title} note={prop[0].note} data={prop[0].data} />}
      <MotiveBanner />
      <Categories />

      {status === "loading" ? <Loading
        spin="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        section="flex items-center justify-center min-h-screen"
      /> : <Service id={prop[1].id} bg={prop[1].bg} title={prop[1].title} note={prop[1].note} data={prop[1].data} />}

      {status === "loading" ? <Loading
        spin="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        section="flex items-center justify-center min-h-screen"
      /> : <Service id={prop[2].id} bg={prop[2].bg} title={prop[2].title} note={prop[2].note} data={prop[2].data} />}
      

      <Projects />
      <TestimonialSection testimonial={testimonials} perView={1} />
      <OurPartners />
      <SubscriptionSection />
    </>
  );
}
