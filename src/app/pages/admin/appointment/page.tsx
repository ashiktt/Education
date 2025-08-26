"use client";

import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/page';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { deleteAppointmentAsync, fetchAppointmentsAsync, updateAppointmentAsync } from '@/app/redux/appointment/appointmentSlice';
import { Trash } from 'lucide-react';

function AdminPage() {
    const dispatch = useDispatch<AppDispatch>();
    const [loading] = useState(false);
    const appointments = useSelector((state: RootState) => state.appointment.appointments);

    useEffect(() => {
        dispatch(fetchAppointmentsAsync());
    }, [dispatch]);

    // Create a shallow copy and sort it
    const sortedAppointments = [...appointments].sort((a, b) => {
        if (a.complite === false && b.complite === true) {
            return -1; // Move 'false' before 'true'
        } else if (a.complite === true && b.complite === false) {
            return 1; // Move 'true' after 'false'
        }
        return 0; // No sorting needed if both are the same
    });

    const handleToggleComplite = (id: string, complite: boolean) => {
        dispatch(updateAppointmentAsync({ update: { id, complite: !complite } }));
    };

    // delete appointment
    const handleDeleteAppointment = (id: string) => {
        dispatch(deleteAppointmentAsync({ id }));
    }

    return (
        <AdminLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">User Appointments</h1>

                {loading ? (
                    <div className="text-center text-gray-600">Loading...</div>
                ) : sortedAppointments.length === 0 ? (
                    <div className="text-center text-gray-500">No appointments found.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedAppointments.map((user) => (
                            <div
                                key={user.id}
                                className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 relative"
                            >
                                <Trash onClick={()=>handleDeleteAppointment(user.id)} className='text-red-500 absolute top-2 right-2 text-sm cursor-pointer'/>
                                <h2 className="text-lg font-semibold text-blue-600">{user.name}</h2>
                                <p className="text-sm text-gray-700">📧 {user.email}</p>
                                <p className="text-sm text-gray-700">📞 {user.phoneNumber}</p>
                                <p className="text-sm text-gray-700">📘 Course ID: {user.coursesid}</p>

                                <div className="flex justify-between items-center mt-2">
                                    <p
                                        className={`inline-block px-3 py-1 text-xs rounded-full ${user.complite ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}
                                    >
                                        {user.complite ? 'Completed' : 'Pending'}
                                    </p>

                                    {!user.complite && <button
                                        className="px-4 py-2 text-xs rounded-lg font-semibold bg-blue-500 text-white"
                                        onClick={() => handleToggleComplite(user.id, user.complite)}
                                    >
                                        Mark as Complite
                                    </button>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

export default AdminPage;
