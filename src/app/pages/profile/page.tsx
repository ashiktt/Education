// "use client"
// import React, { useState } from 'react';
// import Modal from "@/app/components/layout/Modal"


// const UserProfile = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     role: 'Software Engineer',
//     age: 28,
//     gender: 'Male',
//     location: {
//       city: 'New York',
//       state: 'NY',
//       country: 'USA',
//       postcode: '10001',
//     },
//     email: 'john.doe@example.com',
//     profileImage: 'https://res.cloudinary.com/dnofgfxwu/image/upload/v1733579651/mdddkrieszjvqzegbz75.jpg',
//   });

//   // State to manage modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // State to manage form input values
//   const [formData, setFormData] = useState(user);

//   // Function to handle form input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Function to handle form submission
//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setUser(formData); // Update user data
//     setIsModalOpen(false); // Close modal
//   };

 

//   return (
//     <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
//       {/* Profile Image */}
//       <div className="w-32 h-32 mb-4">
//         <img
//           src={user.profileImage}
//           alt="User profile"
//           className="rounded-full border border-gray-300 shadow-lg"
//         />
//       </div>

      
//       {/* User Name and Role */}
//       <h1 className="text-2xl font-semibold text-gray-800">{user.name}</h1>
//       <p className="text-gray-600">{user.role}</p>

//       {/* Divider */}
//       <hr className="w-3/4 my-4 border-gray-300" />

//       {/* User Details */}
//       <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
//         <div className="mb-4">
//           <h2 className="text-lg font-semibold text-gray-700">Personal Information</h2>
//           <p className="text-gray-500">Age: {user.age}</p>
//           <p className="text-gray-500">Gender: {user.gender}</p>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-lg font-semibold text-gray-700">Location</h2>
//           <p className="text-gray-500">City: {user.location.city}</p>
//           <p className="text-gray-500">State: {user.location.state}</p>
//           <p className="text-gray-500">Country: {user.location.country}</p>
//           <p className="text-gray-500">Postcode: {user.location.postcode}</p>
//         </div>

//         {/* Edit Button */}
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Edit Profile
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <Modal
//           title="Edit Profile"
//           handleFormSubmit={handleFormSubmit}
//           onChange={handleChange}
//           setIsModalOpen={setIsModalOpen}
//           formData={formData}
//         />
//       )}
//     </div>
//   );
// };

// export default UserProfile;
