// import { CldUploadWidget } from 'next-cloudinary';
// import Image from 'next/image';
// import React from 'react'
// import RichTextEditor from './RichText';

// function Modal({isEditMode,handleSubmit,currentService,handleChange,setCurrentService ,editorContent ,setEditorContent,setIsModalOpen}) {
//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-scroll">
//             <div className="w-1/2 bg-white p-8 rounded-md shadow-md">
//                 <h2 className="text-xl font-bold mb-4">{isEditMode ? "Edit Service" : "Create New Service"}</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="title" className="block mb-1">Title</label>
//                         <input
//                             id="title"
//                             name="title"
//                             type="text"
//                             value={currentService.title}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border rounded"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <CldUploadWidget uploadPreset="gudsky" onSuccess={(result: any) => {
//                             const imageUrl = result?.info?.secure_url;
//                             setCurrentService((prev) => ({ ...prev, imgSrc: imageUrl }));
//                         }}>
//                             {({ open }) => {
//                                 return (
//                                     <div onClick={() => open()} className='flex cursor-pointer items-center gap-2'>
//                                         <Image src={currentService ? currentService.imgSrc : "/user.png"} alt="image" height={100} width={100} />
//                                         <span>Add Photo</span>
//                                     </div>
//                                 );
//                             }}
//                         </CldUploadWidget>
//                     </div>
//                     {/* <div className="mb-4">
//                         <label htmlFor="rating" className="block mb-1">Rating</label>
//                         <input
//                             id="rating"
//                             name="rating"
//                             type="number"
//                             value={currentService.rating}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border rounded"
//                             min="0"
//                             max="5"
//                             required
//                         />
//                     </div> */}
//                     <div className="mb-4">
//                         <label htmlFor="text" className="block mb-1">Description</label>
//                         <RichTextEditor editorContent={editorContent} setEditorContent={setEditorContent} />
//                     </div>
//                     <div className="flex justify-end">
//                         <button
//                             onClick={() => setIsModalOpen(false)}
//                             className="mr-4 bg-gray-300 text-gray-800 px-4 py-2 rounded"
//                         >
//                             Cancel
//                         </button>
//                         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//                             {isEditMode ? "Update" : "Create"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Modal