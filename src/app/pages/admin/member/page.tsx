"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../../../components/page";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { TeamMemberProp } from "@/app";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
} from "@/app/redux/store";
import {
  createTeamMemberAsync,
  deleteTeamMemberAsync,
  fetchTeamMemberAsync,
  updateTeamMemberAsync,
} from "@/app/redux/member/memberSlice";

const TeamMember = () => {
  const dispatch = useDispatch<AppDispatch>();
  const teamMembers = useSelector(
    (state: RootState) => state.member.members
  ) as TeamMemberProp[];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [img, setImg] = useState("");
  const [currentMember, setCurrentMember] = useState<TeamMemberProp>({
    id: "",
    img: "",
    name: "",
    role: "",
  });

  useEffect(() => {
    dispatch(fetchTeamMemberAsync());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentMember({ ...currentMember, [name]: value });
  };

  const handleOpenCreateModal = () => {
    setIsEditMode(false);
    setImg(""); // reset image
    setCurrentMember({ id: "", img: "", name: "", role: "" });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (member: TeamMemberProp) => {
    setIsEditMode(true);
    setImg(member.img); // preserve existing image
    setCurrentMember(member);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTeamMemberAsync({ id }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode) {
      dispatch(updateTeamMemberAsync({ update: currentMember }));
    } else {
      dispatch(createTeamMemberAsync(currentMember));
    }
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-4">Team Members</h1>

      <button
        onClick={handleOpenCreateModal}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create New Member
      </button>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers &&
            teamMembers.map((member) => (
              <tr key={member.id} className="border-b">
                <td className="px-4 py-2">
                  <Image
                  height={40}
                  width={40}
                    src={member.img}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2">{member.name}</td>
                <td className="px-4 py-2">{member.role}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleOpenEditModal(member)}
                    className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-8 rounded-md shadow-md w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">
              {isEditMode ? "Edit Team Member" : "Create Team Member"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  name="name"
                  value={currentMember.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1">Photo</label>
                <CldUploadWidget
                  key={isModalOpen ? currentMember.id || "new" : ""}
                  uploadPreset="gudsky"
                  
                  onSuccess={(results) => {
                    // info can be a string or an object, so check type
                    let imageUrl = "";
                    if (
                      results &&
                      typeof results.info === "object" &&
                      results.info !== null &&
                      "secure_url" in results.info
                    ) {
                      imageUrl = (results.info as { secure_url: string }).secure_url;
                    }
                    setImg(imageUrl);
                    setCurrentMember((prev) => ({
                      ...prev,
                      img: imageUrl,
                    }));
                  }}
                >
                  {({ open }) => (
                    <div
                      onClick={() => open()}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <Image
                        src={img || "/user.png"}
                        alt="image"
                        height={100}
                        width={100}
                        className="rounded-full object-cover"
                      />
                      <span className="text-blue-600 underline">Add Photo</span>
                    </div>
                  )}
                </CldUploadWidget>
              </div>

              <div className="mb-4">
                <label className="block mb-1">Role</label>
                <input
                  name="role"
                  value={currentMember.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
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

export default TeamMember;



// <CldUploadWidget
//                   key={isModalOpen ? currentMember.id || "new" : ""}
//                   uploadPreset="gudsky"
                  
//                   onSuccess={(result: CloudinaryResult) => {
//                     const imageUrl = result?.info?.secure_url;
//                     setImg(imageUrl);
//                     setCurrentMember((prev) => ({
//                       ...prev,
//                       img: imageUrl,
//                     }));
//                   }}
//                 >
//                   {({ open }) => (
//                     <div
//                       onClick={() => open()}
//                       className="flex cursor-pointer items-center gap-2"
//                     >
//                       <Image
//                         src={img || "/user.png"}
//                         alt="image"
//                         height={100}
//                         width={100}
//                         className="rounded-full object-cover"
//                       />
//                       <span className="text-blue-600 underline">Add Photo</span>
//                     </div>
//                   )}
//                 </CldUploadWidget>