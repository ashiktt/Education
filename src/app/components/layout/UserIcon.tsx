"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function UserIcon() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={() => setOpen(!open)} className="focus:outline-none">
                <Image height={80} width={80} src="/shimu.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-300 hover:border-blue-500 transition" alt="Avatar" />
            </button>
            {open && (
                <div className="absolute mt-2 w-40 top-14 right-4 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-2 flex flex-col">
                        <Link href="/pages/profile" className="px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition">
                            Profile
                        </Link>
                        <Link href="/settings" className="px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition">
                            Settings
                        </Link>
                        <Link href="/help" className="px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition">
                            Help
                        </Link>
                        <Link href="/logout" className="px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition">
                            Logout
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserIcon