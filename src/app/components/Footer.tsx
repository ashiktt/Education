import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
  <div className="max-w-xlmx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <p className="text-sm text-gray-400">
          We are dedicated to providing the best services in the industry. Our focus is on quality and customer satisfaction.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="text-sm text-gray-400 space-y-2">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">Services</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Our Services</h3>
        <ul className="text-sm text-gray-400 space-y-2">
          <li><a href="#" className="hover:text-white">Consulting</a></li>
          <li><a href="#" className="hover:text-white">Development</a></li>
          <li><a href="#" className="hover:text-white">Design</a></li>
          <li><a href="#" className="hover:text-white">Marketing</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p className="text-sm text-gray-400">
          Email: contact@company.com
        </p>
        <p className="text-sm text-gray-400">
          Phone: +123 456 789
        </p>
        <div className="flex mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H7a2 2 0 00-2 2v3a2 2 0 002 2h3v3a2 2 0 002 2h3a2 2 0 002-2v-3h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3V7a2 2 0 012-2h3V2z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9 5-9 5-9-5 9-5z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div className="mt-8 border-t border-gray-800 pt-4">
      <p className="text-center text-sm text-gray-400">
        © 2024 Company Name. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer