"use client"
import { useEffect, useState } from "react";

interface ProgressBarProps {
    visible: boolean;
    subject: string;
    percentage: number;
    color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ visible, subject, percentage, color }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (visible) {
            const increment = percentage / 100; // Calculate step
            let current = 0;

            const interval = setInterval(() => {
                current += increment;
                if (current >= percentage) {
                    clearInterval(interval);
                    current = percentage; // Ensure it ends at the target value
                }
                setProgress(current);
            }, 10); // Adjust the interval timing for smoother animation
        }
    }, [visible, percentage]);

    return (
        <div className="text-center text-white gap-8 justify-between w-full">
            <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-medium whitespace-nowrap">{subject}</span>
                <span className="text-lg font-medium">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className={`${color} h-2 rounded-full`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;