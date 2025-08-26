import Image from "next/image";

const SubscriptionSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-8">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left flex items-center justify-center">
        <Image
          src="/bg-mail.png" // Replace with your image path
          alt="Newsletter"
          width={192}
          height={192}
          className="w-48 h-48"
        />
        <p className="text-gray-600 mt-4 lg:mt-0 lg:ml-6">
          Subscribe now and receive weekly newsletters with educational
          materials, new courses, interesting posts, popular books, and much
          more!
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
        <form className="flex items-center bg-white shadow-md rounded-2xl">
          <input
            type="email"
            placeholder="Your email here"
            className="px-4 py-3 flex-grow focus:outline-none rounded-l-2xl text-gray-700"
          />
          <button
            type="submit"
            className="flex items-center bg-yellow-500 font-semibold text-white px-6 py-3 rounded-r-2xl hover:bg-yellow-600"
          >
            
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionSection;
