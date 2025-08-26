import React from 'react'
import Experience from '@/app/components/layout/about/Experience'
import Hero from '@/app/components/layout/about/Hero'
import OurPrograms from '@/app/components/layout/about/OurPrograms'
import Teams from "@/app/components/layout/Team"

function page() {
  return (
    <div>
        <Hero />
        <OurPrograms />
        <Teams />
        <Experience />
    </div>
  )
}

export default page