// import React from 'react'

// function TestimonialForm() {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white max-h-[28rem] top-8 z-50 overflow-y-scroll p-8 rounded-md shadow-md w-full max-w-md">
//                         <h2 className="text-xl font-bold mb-4">
//                             {isEditMode ? "Edit Testimonial" : "Create Testimonial"}
//                         </h2>
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-4">
//                                 <label className="block mb-1">Name</label>
//                                 <input
//                                     name="name"
//                                     value={currentTestimonial.name}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2 border rounded"
//                                     required
//                                 />
//                             </div>
//                             <CldUploadWidget uploadPreset="gudsky" onSuccess={(result: any) => {
//                                 const imageUrl = result?.info?.secure_url;
//                                 setCurrentTestimonial((prev) => ({ ...prev, image: imageUrl }));
//                             }}>
//                                 {({ open }) => {
//                                     return (
//                                         <div onClick={() => open()} className='flex cursor-pointer items-center gap-2'>
//                                             <Image src={currentTestimonial ? currentTestimonial.image : "/user.png"} alt="image" height={100} width={100} />
//                                             <span>Add Photo</span>
//                                         </div>
//                                     );
//                                 }}
//                             </CldUploadWidget>
//                             <div className="mb-4">
//                                 <label className="block mb-1">Role</label>
//                                 <input
//                                     name="role"
//                                     value={currentTestimonial.role}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2 border rounded"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block mb-1">Message</label>
//                                 <textarea
//                                     name="text"
//                                     value={currentTestimonial.text}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2 border rounded"
//                                     required
//                                 />
//                             </div>
//                             <div className="flex mb-4">
//                                 {[...Array(5)].map((_, index) => {
//                                     const ratingValue = index + 1;
//                                     return (
//                                         <label key={index}>
//                                             <input
//                                                 type="radio"
//                                                 name="rating"
//                                                 value={ratingValue}
//                                                 className="hidden"
//                                                 onChange={() =>
//                                                     handleRatingChange(ratingValue)
//                                                 }
//                                             />
//                                             <FaStar
//                                                 className={`cursor-pointer transition-colors duration-200 ${ratingValue <=
//                                                         (hover || currentTestimonial.rating)
//                                                         ? "text-yellow-500"
//                                                         : "text-gray-400"
//                                                     }`}
//                                                 size={40}
//                                                 onMouseEnter={() =>
//                                                     setHover(ratingValue)
//                                                 }
//                                                 onMouseLeave={() => setHover(0)}
//                                             />
//                                         </label>
//                                     );
//                                 })}
//                             </div>
//                             <div className="flex justify-end">
//                                 <button
//                                     type="button"
//                                     onClick={() => setIsModalOpen(false)}
//                                     className="mr-4 bg-gray-300 text-gray-800 px-4 py-2 rounded"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     className="bg-blue-500 text-white px-4 py-2 rounded"
//                                 >
//                                     {isEditMode ? "Update" : "Create"}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//   )
// }

// export default TestimonialForm