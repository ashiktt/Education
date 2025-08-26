// "use client"
// import React, { useState } from 'react'
// import Input from '../Input';
// import { CldUploadWidget } from 'next-cloudinary'
// import Image from 'next/image';


// const Modal: React.FC<ModalProp> = ({ title, handleFormSubmit, onChange, formData, setIsModalOpen }) => {

//   const [img,setImg] = useState<any>()
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-xl font-semibold mb-4">{title}</h2>
//         <form onSubmit={handleFormSubmit} className="space-y-4 max-h-96 overflow-y-auto">
//           <CldUploadWidget uploadPreset="gudsky" onSuccess={(result) => setImg(result?.info)}>
//             {({ open }) => {
//               return (
//                 <div onClick={() => open()} className='flex cursor-pointer items-center gap-2'>
//                   <Image src="/user.png" alt="image" height={100} width={100} />
//                   <span>Add Photo</span>
//                 </div>
//               );
//             }}
//           </CldUploadWidget>
//           <div>
//             <Input
//               lable='Name'
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={onChange}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <Input
//               type="text"
//               name="role"
//               lable="role"
//               value={formData.role}
//               onChange={onChange}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <Input
//               type="number"
//               name="age"
//               lable="Age"
//               value={formData.age}
//               onChange={onChange}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <Input
//               type="text"
//               name="gender"
//               lable="Gender"
//               value={formData.gender}
//               onChange={onChange}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <Input
//               type="text"
//               lable='City'
//               name="location.city"
//               value={formData.location?.city}
//               onChange={onChange}
//               className="w-full p-2 border rounded"
//             />

//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               onClick={() => setIsModalOpen(false)}
//               className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 mr-2"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Modal