"use client"

import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../components/page";
import { AppDispatch, RootState } from "@/app/redux/store";
import { useEffect } from "react";
import { fetchAllUserAsync } from "@/app/redux/user/userSlice";
import { UserData } from "@/app";
import Loading from "@/app/components/loading";

const Users = () => {
  const status = useSelector<RootState>(state => state.user.status)
  const users = useSelector<RootState>(state => state.user.users) as UserData[]
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchAllUserAsync())
  }, [dispatch])



  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <p>List of users will be displayed here.</p>
      {status === "loading" ? <Loading 
      spin="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      section="flex items-center justify-center min-h-screen"
      />
        :
        <table className="min-w-full my-5 bg-white border">
          <thead>
            <tr className="w-full bg-gray-200">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </AdminLayout>
  );
};

export default Users;