import { ServiceData } from '@/app';
import Image from 'next/image';

function ServiceCard({ items }: { items: ServiceData }) {

  return (
    <>
      <div className="w-72 h-full bg-white border rounded-lg shadow-lg overflow-hidden">
        {/* Banner Section */}
        <div className="relative">
          <Image
            height={150}
            width={300}
            src={items.bannerImg}
            alt="Course Banner"
            className="w-full h-36 object-cover"
          />
          {/* User Avatar */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <Image
              height={150}
              width={300}
              src={items.authorImg}
              alt="User Avatar"
              className="w-16 h-16 rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 pt-8 text-center">
          {/* User Name */}
          <h4 className="text-sm font-medium text-gray-700">{items.authorName}</h4>
          {/* Course Title */}
          <h3 className="text-lg text-center font-semibold text-gray-800 mt-1">
            {items.courseName} in {items.universityName}
          </h3>
          {/* Icons and Price Section */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4 text-gray-500 text-sm">
              {/* Icons Section */}
              <div className="flex items-center">
                <span className="material-icons">person</span> {/* Example Icon */}
                <span className="ml-1">{items.totalAdmission}</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons">comment</span> {/* Example Icon */}
                <span className="ml-1">0</span>
              </div>
            </div>
            {/* Price Section */}
            <div className="text-right">
              <p className="text-red-500 font-semibold">₹{items.semesterCost}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
