import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

export default function QuickEnquiry() {
  const [value, setValue] = useState();

  return (
    <div className="bg-[#000000] pb-20">
      <div className="max-w-5xl pt-36 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-28">
        {/* Left Side: Form Section */}
        <div>
          <p className="text-white text-xl">Have a Project in Mind</p>
          <h2 className="text-5xl text-white font-bold mt-4">
            tell us a bit more
          </h2>
          <form className="mt-6 space-y-4">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Phone and Dropdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={setValue}
              />
              <select className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Services</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>System/Software development</option>
                <option>UI/UX</option>
                <option>Search Engine Optimization(SEO)</option>
                <option>Social Media Marketing</option>
                <option>Graphics Design</option>
                <option>Content Writing</option>
                <option>Pay Per Click</option>
                <option>Digital Marketing</option>
                <option>Internship</option>
              </select>
            </div>
            {/* Message Box */}
            <textarea
              placeholder="Your Message"
              className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {/* Submit Button */}
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full md:w-auto">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Contact Details */}
        <div className="block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500  ">
          <p className="text-white text-xl">We would love to hear from you.</p>
          <h2 className="text-2xl text-white font-bold mt-2">Get In Touch</h2>
          <div className="mt-10 space-y-12 text-white">
            <div className="flex items-center space-x-4">
              {/* Icon with background */}
              <div className="bg-blue-500 p-3 rounded-full flex items-center justify-center">
                <FaPhone className="text-white text-xl" />
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <div className="text-xl font-semibold">Our Phone Number</div>
                <span className="text-md text-[#99A1AF]">+977 234 567 890</span>
              </div>
            </div>

            {/* Other Contact Details */}
            <div className="flex items-center space-x-4">
              {/* Icon with background */}
              <div className="bg-blue-500 p-3 rounded-full flex items-center justify-center">
              <HiOutlineMail className="text-white text-xl"/>
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <div className="text-xl font-semibold">Our Email</div>
                <span className="text-md text-[#99A1AF]">Career23@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Icon with background */}
              <div className="bg-blue-500 p-3 rounded-full flex items-center justify-center">
              <FaLocationDot className="text-white text-xl"/>
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <div className="text-xl font-semibold">Our Office Address</div>
                <span className="text-md text-[#99A1AF]">Itahari, Deurali Marga, Sunsari, Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
