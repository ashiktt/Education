"use client";

import React, { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { motion } from "framer-motion";
import AdminLayout from "../../../components/page";
import RichTextEditor from "@/app/components/RichText";
import { UploadCloud } from "lucide-react";
import {
    createServicesAsync,
    deleteServicesAsync,
    fetchServicestAsync,
    updateServicesAsync,
} from "@/app/redux/service/servicesSlice";
import { ServiceRecommendation } from "@/app";
import Image from "next/image";

const Courses = () => {
    const dispatch = useDispatch<AppDispatch>();
    const courses = useSelector((state: RootState) => state.services.Services);
    const [editorContent, setEditorContent] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentCourse, setCurrentCourse] = useState({
        id: "",
        authorName: "",
        bannerImg: "",
        courseName: "",
        authorImg: "",
        totalAdmission: "",
        semesterCost: "",
        universityName: "",
        tag: "",
        duration: "",
        level: "",
        semester: "",
        description: "",
        recommendation: ServiceRecommendation.RECOMMENDED,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCurrentCourse({ ...currentCourse, [e.target.name]: e.target.value });
    };

    const handleOpenCreateModal = () => {
        setIsEditMode(false);
        setCurrentCourse({
            id: "",
            authorName: "",
            bannerImg: "",
            courseName: "",
            authorImg: "",
            totalAdmission: "",
            semesterCost: "",
            universityName: "",
            tag: "",
            duration: "",
            level: "",
            semester: "",
            recommendation: ServiceRecommendation.RECOMMENDED,
            description: "",
        });
        setEditorContent("");
        setIsModalOpen(true);
    };

    const handleEditCourse = (course: any) => {
        setIsEditMode(true);
        setCurrentCourse(course);
        setEditorContent(course.description);
        setIsModalOpen(true);
    };

    const handleDeleteCourse = (id: string) => {
        if (confirm("Are you sure you want to delete this course?")) {
            dispatch(deleteServicesAsync({ id }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const courseData = { ...currentCourse, description: editorContent };
        if (isEditMode) {
            dispatch(updateServicesAsync({ update: courseData }));
        } else {
            dispatch(createServicesAsync(courseData));
        }
        setIsModalOpen(false);
    };

    useEffect(() => {
        dispatch(fetchServicestAsync());
    }, [dispatch]);


    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-4">Courses</h1>
            <button
                onClick={handleOpenCreateModal}
                className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add New Course
            </button>

            <div className="overflow-x-scroll">
                <table className="w-full mt-6 text-sm text-left border border-gray-200 min-w-[1200px]">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Course</th>
                            <th className="px-4 py-2 border">Author</th>
                            <th className="px-4 py-2 border">Type</th>
                            <th className="px-4 py-2 border">University</th>
                            <th className="px-4 py-2 border">Duration</th>
                            <th className="px-4 py-2 border">Level</th>
                            <th className="px-4 py-2 border">Semester</th>
                            <th className="px-4 py-2 border">Tag</th>
                            <th className="px-4 py-2 border">Admission</th>
                            <th className="px-4 py-2 border">Cost</th>
                            <th className="px-4 py-2 border">Banner</th>
                            <th className="px-4 py-2 border">Author Img</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {courses.map((course) => (
                            <tr key={course.id} className="border-t">
                                <td className="px-4 py-2">{course.courseName}</td>
                                <td className="px-4 py-2">{course.authorName}</td>
                                <td className="px-4 py-2">{course.recommendation}</td>
                                <td className="px-4 py-2">{course.universityName}</td>
                                <td className="px-4 py-2">{course.duration}</td>
                                <td className="px-4 py-2">{course.level}</td>
                                <td className="px-4 py-2">{course.semester}</td>
                                <td className="px-4 py-2">{course.tag}</td>
                                <td className="px-4 py-2">{course.totalAdmission}</td>
                                <td className="px-4 py-2">₹{course.semesterCost}</td>
                                <td className="px-4 py-2">
                                    <Image height={40} width={40} src={course.bannerImg} alt="Banner" className="h-10 w-20 object-cover rounded" />
                                </td>
                                <td className="px-4 py-2">
                                    <Image height={40} width={40} src={course.authorImg} alt="Author" className="h-10 w-10 rounded-full object-cover" />
                                </td>
                                <td className="px-4 py-2 space-x-2">
                                    <button
                                        onClick={() => handleEditCourse(course)}
                                        className="bg-yellow-400 text-white px-2 py-1 rounded text-xs"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteCourse(course.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded text-xs"
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
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 backdrop-blur-md flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-xl"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                            {isEditMode ? "Edit Course" : "Create New Course"}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4 max-h-[65vh] overflow-y-auto">
                            <input type="text" name="authorName" placeholder="Author Name" value={currentCourse.authorName} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="text" name="courseName" placeholder="Course Name" value={currentCourse.courseName} onChange={handleChange} className="w-full p-2 border rounded" required />
                            {/* Single Select for Popularity/Recommendation */}
                            <label htmlFor="recommendation" className="block text-sm font-medium mb-2">
                                Popularity / Recommendation
                            </label>
                            <select
                                id="recommendation"
                                name="recommendation"
                                value={currentCourse.recommendation}
                                onChange={handleChange}
                                className="w-full p-2 mb-4 border border-gray-300 rounded"
                            >
                                <option value="">Select Popularity/Recommendation</option>
                                <option value="New">New</option>
                                <option value="RECOMMENDED">Recommended</option>
                                <option value="POPULAR">Popular</option>
                            </select>
                            <input type="text" name="universityName" placeholder="University Name" value={currentCourse.universityName} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="number" name="totalAdmission" placeholder="Total Admission" value={currentCourse.totalAdmission} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="number" name="semesterCost" placeholder="Semester Cost" value={currentCourse.semesterCost} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="text" name="tag" placeholder="Tag (e.g., BCA)" value={currentCourse.tag} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="text" name="duration" placeholder="Duration (e.g., 4 Years)" value={currentCourse.duration} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="text" name="level" placeholder="Level (e.g., Science, Arts)" value={currentCourse.level} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="number" name="semester" placeholder="Total Semesters" value={currentCourse.semester} onChange={handleChange} className="w-full p-2 border rounded" required />

                            <RichTextEditor editorContent={editorContent} setEditorContent={setEditorContent} />

                            <CldUploadWidget uploadPreset="gudsky" onSuccess={(result: any) => setCurrentCourse((prev) => ({ ...prev, bannerImg: result?.info?.secure_url }))}>
                                {({ open }) => (
                                    <button type="button" onClick={() => open()} className="flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-lg hover:bg-blue-600">
                                        <UploadCloud size={20} /> Upload Banner Image
                                    </button>
                                )}
                            </CldUploadWidget>
                            {currentCourse.bannerImg && <Image height={200} width={200} src={currentCourse.bannerImg} alt="Banner" className="mt-4 w-full max-w-xs rounded-lg" />
                            }

                            <CldUploadWidget uploadPreset="gudsky" onSuccess={(result: any) => setCurrentCourse((prev) => ({ ...prev, authorImg: result?.info?.secure_url }))}>
                                {({ open }) => (
                                    <button type="button" onClick={() => open()} className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg hover:bg-green-600">
                                        <UploadCloud size={20} /> Upload Author Image
                                    </button>
                                )}
                            </CldUploadWidget>
                            {currentCourse.authorImg && <Image height={96} width={96} src={currentCourse.authorImg} alt="Author" className="mt-4 w-24 h-24 rounded-full shadow" />}

                            <div className="flex justify-between mt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
                                <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded">{isEditMode ? "Update" : "Create"}</button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AdminLayout>
    );
};

export default Courses;
