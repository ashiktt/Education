"use client"
import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Rating() {

    const [reviews] = useState([0, 0, 5, 0, 0]);

    const calculateAverage = () => {
        const totalRatings = reviews.reduce((acc, count, index) => acc + count * (5 - index), 0);
        const totalReviews = reviews.reduce((acc, count) => acc + count, 0);
        return totalReviews ? parseFloat((totalRatings / totalReviews).toFixed(1)) : 0;
    };

    const averageRating = calculateAverage();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:items-start gap-6 p-6 bg-gray-50 rounded-lg">
                                {/* Average Rating Section */}
                                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
                                    <h2 className="text-lg font-semibold">Average Rating</h2>
                                    <div className="text-6xl font-bold">{averageRating}</div>
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, index) => (
                                            <span key={index}>
                                                {index < Math.round(averageRating) ? <AiFillStar /> : <AiOutlineStar />}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-500">{reviews.reduce((acc, count) => acc + count, 0)} ratings</p>
                                </div>
    
                                {/* Detailed Rating Section */}
                                <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
                                    <h2 className="text-lg font-semibold mb-4">Detailed Rating</h2>
                                    {reviews.map((count, index) => (
                                        <div key={index} className="flex items-center mb-2">
                                            <span className="w-10 text-gray-700 font-medium">{5 - index}</span>
                                            <div className="flex-1 h-3 bg-gray-200 rounded-lg overflow-hidden mx-2">
                                                <div
                                                    className="h-full bg-yellow-400"
                                                    style={{ width: `${count ? (count / Math.max(...reviews)) * 100 : 0}%` }}
                                                />
                                            </div>
                                            <span className="w-8 text-gray-600">{count} %</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
  )
}

export default Rating