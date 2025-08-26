import Image from 'next/image'
import React from 'react'

function TeamMember() {

    const members = [
        { _id: 1, img: "/shimu.jpg", name: "Brent Grundy", role: "Founder" },
        { _id: 1, img: "/shimu.jpg", name: "Brent Grundy", role: "Member" },
        { _id: 1, img: "/shimu.jpg", name: "Brent Grundy", role: "Member" }
    ]

    return (
        <div className='max-w-6xl mx-auto sm:py-10 lg:py-20'>
            {/* heading */}
            <div className="text-center">
                <h1 className="sm:text-3xl lg:text-4xl font-bold text-blue-500">Our Team</h1>
                <p className='text-slate-700'>Meet with all our members</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mt-5 mt-10 gap-10">
                {/* team members */}
                {
                    members.map(member => (
                        <div key={member._id} className="group bg-white border shadow-md rounded-lg text-center py-10 px-5 relative overflow-hidden">
                             
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ backgroundImage: "url('/bg.jpg')" }}></div>

                            {/* Card Content */}
                            <div className="relative z-10">
                                <div className="relative mx-auto w-48 h-48 mb-4 rounded-full">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        className="rounded-full object-cover"
                                        fill
                                    />
                                </div>
                                <div>
                                    <h3 className="text-gray-800 group-hover:text-white text-lg font-semibold mb-2">{member.name}</h3>
                                    <p className="text-green-500 group-hover:text-white text-sm font-medium uppercase">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TeamMember