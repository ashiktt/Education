"use client";
import React, { useState } from 'react';
import { FaDollarSign, FaCalendarAlt, FaLayerGroup, FaClock, FaBook } from 'react-icons/fa';
import CourseDetailRow from '../CourseDetailRowProps';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/redux/store';
import { createAppointmentAsync } from '@/app/redux/appointment/appointmentSlice';
import { ServiceData } from '@/app';

function ServiceRight({ course }: { course: ServiceData }) {
    const dispatch = useDispatch<AppDispatch>();

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        course: course,
        coursesid: '',
        complite: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(createAppointmentAsync(formData));
        setShowForm(false);
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            course: course,
            coursesid: '',
            complite: true
        });
    };

    return (
        <div className="bg-white p-6 w-full lg:w-1/4 h-fit border rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
            <div className="space-y-4">
                <CourseDetailRow icon={<FaDollarSign className="text-orange-500" />} label="Tuition Fees" value={course.semesterCost} />
                <CourseDetailRow icon={<FaClock className="text-blue-500" />} label="Duration" value={course.duration} />
                <CourseDetailRow icon={<FaLayerGroup className="text-green-500" />} label="Capacity" value="Unlimited" />
                <CourseDetailRow icon={<FaCalendarAlt className="text-yellow-500" />} label="Level" value={course.level} />
                <CourseDetailRow icon={<FaBook className="text-pink-500" />} label="Lessons" value="20" />
            </div>

            <button
                onClick={() => setShowForm(!showForm)}
                className="mt-6 w-full bg-yellow-500 text-white font-semibold py-3 rounded-md hover:bg-yellow-600"
            >
                {showForm ? 'Close Form' : 'Make Appointment'}
            </button>

            {showForm && (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-md px-4 py-2"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-md px-4 py-2"
                        required
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full border rounded-md px-4 py-2"
                        required
                    />
                    <input
                        type="text"
                        name="course"
                        placeholder="Course Name"
                        value={formData.course.courseName}
                        disabled
                        onChange={handleChange}
                        className="w-full border rounded-md px-4 py-2 disabled:bg-gray-200 disabled:cursor-not-allowed"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
}

export default ServiceRight;
