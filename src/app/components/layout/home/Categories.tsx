"use client"
import Image from 'next/image';
import { motion } from 'motion/react'

function Categories() {

    const cats = [
        { id: 1, title: "Business", courses: 5, icon: "/brands/business-cat.webp" },
        { id: 2, title: "Design", courses: 3, icon: "/brands/design-cat.webp" },
        { id: 3, title: "Health & Fitness", courses: 1, icon: "/brands/Health-Fitness.webp" },
        { id: 4, title: "IT & Software", courses: 5, icon: "/brands/it-cat.webp" },
        { id: 5, title: "Language", courses: 4, icon: "/brands/language-cat.webp" },
        { id: 6, title: "Lifestyle", courses: 2, icon: "/brands/life-style.webp" },
        { id: 7, title: "Marketing", courses: 3, icon: "/brands/dev-cat.webp" },
        { id: 8, title: "Photography & Video", courses: 2, icon: "/brands/marketing-cat.webp" }
    ];

    return (
        <div className='container mx-auto max-w-6xl'>
            {/* heading */}
            <h1 className='text-4xl font-bold mb-10'>Top Categories</h1>
            {/* categories */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 '>
                {cats.map((cat, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.4 }}
                        key={cat.id} className='py-8 px-4 shadow-md flex flex-col items-center gap-2'>
                        {/* images */}
                        <div className="relative h-24 w-24">
                            <Image src={cat.icon} fill alt='name' />
                        </div>
                        <h3 className='text-2xl text-center font-bold'>{cat.title}</h3>
                        <p className='text-lg '>{cat.courses} Courses</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Categories