"use client";
import Rating from '@/app/components/layout/rating/Rating';
import ServiceRight from '@/app/components/layout/ServiceRight';
import Loading from '@/app/components/loading';
import { fetchServicesByIdAsync } from '@/app/redux/service/servicesSlice';
import { AppDispatch, RootState } from '@/app/redux/store';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { FaFacebookF, FaTimes, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
function Page() {
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state.services.course)
    const status = useSelector((state: RootState) => state.services.status)


    useEffect(() => {
        if (typeof id === "string") {
            dispatch(fetchServicesByIdAsync({ id }));
        }
    }, [id,dispatch])

    if(status === "loading") {
        return  <Loading 
            spin="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
            section="flex items-center justify-center min-h-screen"
            />
    }


    return (
        <div className="bg-gray-50 p-8">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Content Section */}
                <div className="relative w-full lg:w-3/4 flex flex-col gap-4">
                    <div className="px-4 py-2">
                        {/* name */}
                        <h1 className="text-2xl font-bold mb-4 capitalize">
                            {data?.universityName}
                        </h1>
                        {/* author name */}
                        <div className='flex'>
                            <p className="pr-4 border-r border-r-gray-800">By {data?.authorName}</p>
                            <p className="px-4">{data?.courseName}</p>
                        </div>
                    </div>
                    {/* Course Image */}
                    <div className="relative w-full h-64 lg:h-[400px] rounded-lg shadow-md overflow-hidden">
                        <Image
                            src={data?.bannerImg!}
                            fill
                            alt="Course Image"
                            className="object-cover"
                        />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                        <div
                            className="text-gray-700 leading-relaxed mb-4"
                            dangerouslySetInnerHTML={{ __html: data?.description || "" }}
                        />
                        <p className="text-gray-700 leading-relaxed">
                            Master Adobe Photoshop CC 2024 without any previous knowledge. Learn the newest AI tricks to get fast results like a
                            pro.
                        </p>
                    </div>

                    <div className="p-8">
                        <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                        <div className="flex gap-6 items-center">
                            {/* Instructor Image */}
                            <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src={data?.authorImg!}
                                    alt="Instructor Keny White"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Instructor Details */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold">{data?.authorName}</h3>
                                <div className="flex gap-4 text-gray-600 text-sm my-2">
                                    <span>840 Students</span>
                                    <span className="border-l border-gray-300 px-2">{data?.totalAdmission} Courses</span>
                                </div>
                                <p className="text-gray-700">Web Designer & Best-Selling Instructor</p>
                                <div className="flex gap-4 mt-4">
                                    <a
                                        href="#"
                                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-gray-400 text-white p-2 rounded-full hover:bg-gray-500"
                                        aria-label="Times"
                                    >
                                        <FaTimes />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                                        aria-label="YouTube"
                                    >
                                        <FaYoutube />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>


                        </div>
                        {/* rating section */}
                        <Rating />
                    </div>
                </div>

                {/* Right Sidebar */}
                {data && <ServiceRight course={data} />}
            </div>
        </div>
    );
}

export default Page;
