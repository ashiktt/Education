"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../../../components/page";
import { TestimonialProp } from "@/app";
import { FaStar } from "react-icons/fa";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { createTestimonialsAsync, deleteTestimonialsAsync, fetchTestimonialstAsync, updateTestimonialsAsync } from "@/app/redux/testimonial/testimonialSlice";

const Testimonial = () => {
    const dispatch = useDispatch<AppDispatch>()
    const testimonials = useSelector<RootState>(state => state.testimonial.Testimonials) as TestimonialProp[]
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [hover, setHover] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState<TestimonialProp>({
        id: "",
        name: "",
        image: "",
        rating: 0,
        role: "",
        text: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setCurrentTestimonial({
            ...currentTestimonial,
            [name]: value,
        });
    };

    const handleRatingChange = (ratingValue: number) => {
        setCurrentTestimonial((prev) => ({
            ...prev,
            rating: ratingValue,
        }));
    };

    const handleOpenCreateModal = () => {
        setIsEditMode(false);
        setCurrentTestimonial({
            id: "",
            name: "",
            image: "",
            rating: 0,
            role: "",
            text: "",
        });
        setIsModalOpen(true);
    };

    // open modal
    const handleOpenEditModal = (testimonial: TestimonialProp) => {
        setIsEditMode(true);
        setCurrentTestimonial(testimonial);
        setIsModalOpen(true);
    };

    // handle submit form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditMode) {
            dispatch(updateTestimonialsAsync({ update: currentTestimonial }))
        } else {
            dispatch(createTestimonialsAsync(currentTestimonial))
        }
        setIsModalOpen(false);
    };

    // handle delete
    const handleDelete = (id: string) => {
        dispatch(deleteTestimonialsAsync({ id }))
    };

    // fetch all testimonials
    useEffect(() => {
        dispatch(fetchTestimonialstAsync())
    }, [dispatch]);

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-4">Testimonials</h1>
            <button
                onClick={handleOpenCreateModal}
                className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Create New Testimonial
            </button>

            <div className="overflow-y-auto max-h-[70vh] bg-white rounded shadow-md border border-gray-200">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="text-xs uppercase bg-blue-100 text-gray-700 sticky top-0 z-0">
                        <tr>
                            <th className="px-6 py-3">Image</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Message</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonials.map((testimonial) => (
                            <tr
                                key={testimonial.id}
                                className="border-b hover:bg-gray-50 transition-all"
                            >
                                <td className="px-6 py-4">
                                    <Image
                                    height={40}
                                    width={40}
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover border"
                                    />
                                </td>
                                <td className="px-6 py-4 font-medium">{testimonial.name}</td>
                                <td className="px-6 py-4">{testimonial.text.length > 150 ? testimonial.text.slice(0,150) :testimonial.text}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button
                                        onClick={() => handleOpenEditModal(testimonial)}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(testimonial.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white max-h-[28rem] top-8 z-50 overflow-y-scroll p-8 rounded-md shadow-md w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">
                            {isEditMode ? "Edit Testimonial" : "Create Testimonial"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-1">Name</label>
                                <input
                                    name="name"
                                    value={currentTestimonial.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <CldUploadWidget uploadPreset="gudsky" onSuccess={(result: any) => {
                                const imageUrl = result?.info?.secure_url;
                                setCurrentTestimonial((prev) => ({ ...prev, image: imageUrl }));
                            }}>
                                {({ open }) => {
                                    return (
                                        <div onClick={() => open()} className='flex cursor-pointer items-center gap-2'>
                                            <Image src={currentTestimonial ? currentTestimonial.image : "/user.png"} alt="image" height={100} width={100} />
                                            <span>Add Photo</span>
                                        </div>
                                    );
                                }}
                            </CldUploadWidget>
                            <div className="mb-4">
                                <label className="block mb-1">Role</label>
                                <input
                                    name="role"
                                    value={currentTestimonial.role}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Message</label>
                                <textarea
                                    name="text"
                                    value={currentTestimonial.text}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={ratingValue}
                                                className="hidden"
                                                onChange={() =>
                                                    handleRatingChange(ratingValue)
                                                }
                                            />
                                            <FaStar
                                                className={`cursor-pointer transition-colors duration-200 ${ratingValue <=
                                                    (hover || currentTestimonial.rating)
                                                    ? "text-yellow-500"
                                                    : "text-gray-400"
                                                    }`}
                                                size={40}
                                                onMouseEnter={() =>
                                                    setHover(ratingValue)
                                                }
                                                onMouseLeave={() => setHover(0)}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="mr-4 bg-gray-300 text-gray-800 px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    {isEditMode ? "Update" : "Create"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default Testimonial;
