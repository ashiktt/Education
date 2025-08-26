"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React ,{ useState } from 'react';


const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const router = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <div className="flex h-screen flex-col md:flex-row">
            {/* Sidebar for large screens / Sliding sidebar for mobile */}
            <div
                className={`fixed md:relative top-0 left-0 z-0 w-3/4 md:w-1/4 h-full bg-gray-800 text-white p-5 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
            >
                <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
                <ul className="space-y-4">
                    <li>
                        <Link className={`${router === '/pages/admin/users' ? 'text-blue-500' : 'inline-block w-full hover:text-gray-300'}`} href="/pages/admin/users">
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router === '/pages/admin/appointment' ? 'text-blue-500' : ' hover:text-gray-300'}`} href="/pages/admin/appointment">
                            Appointment
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router === '/pages/admin/testimonial' ? 'text-blue-500' : ' hover:text-gray-300'}`} href="/pages/admin/testimonial">
                            Testimonial
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router === '/pages/admin/service' ? 'text-blue-500' : ' hover:text-gray-300'}`} href="/pages/admin/service">
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link className={`${router === '/pages/admin/member' ? 'text-blue-500' : ' hover:text-gray-300'}`} href="/pages/admin/member">
                            Our member
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <button
                    className="text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main content */}
            <div className="flex-1 overflow-hidden bg-gray-100 p-5 w-full md:ml-0 ml-[0px] md:pl-20 transition-all duration-300">
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
