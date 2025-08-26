import React from "react";

interface CourseDetailRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const CourseDetailRow: React.FC<CourseDetailRowProps> = ({ icon, label, value }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-500 font-medium flex items-center gap-2">
        {icon}
        {label}
      </span>
      <span>{value}</span>
    </div>
  );
};

export default CourseDetailRow;
