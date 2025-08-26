"use client"
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function Review() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');

    const handleStarClick = (ratingValue: number) => {
        setRating(ratingValue);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Review submitted! Rating: ${rating}, Description: ${review}`);
        // Reset form
        setRating(0);
        setReview('');
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Rate this Course</h2>

            {/* Star Rating */}
            <div className="flex mb-4">
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                className="hidden"
                                onClick={() => handleStarClick(ratingValue)}
                            />
                            <FaStar
                                className={`cursor-pointer transition-colors duration-200 ${ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-400'}`}
                                size={40}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                            />
                        </label>
                    );
                })}
            </div>

            {/* Review Text Area */}
            <form onSubmit={(e) => handleSubmit(e)} className="w-full max-w-md">
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-md resize-none"
                    rows={5}
                    placeholder="Write your review here..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>

                <button
                    type="submit"
                    className="mt-4 w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors duration-200"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
}

export default Review;
