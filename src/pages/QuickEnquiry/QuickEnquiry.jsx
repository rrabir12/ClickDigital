import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from 'react-select';
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

export default function QuickEnquiry() {
  const [state, setState] = useState({ phone: "" });
  const options = [
    { value: 'services', label: 'Services' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'app-development', label: 'App Development' },
    { value: 'system-software', label: 'System/Software Development' },
    { value: 'ui-ux', label: 'UI/UX' },
    { value: 'seo', label: 'Search Engine Optimization (SEO)' },
    { value: 'social-media-marketing', label: 'Social Media Marketing' },
    { value: 'graphics-design', label: 'Graphics Design' },
    { value: 'content-writing', label: 'Content Writing' },
    { value: 'pay-per-click', label: 'Pay Per Click' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'internship', label: 'Internship' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#27272a', 
      border: 'none', 
      borderRadius: '0.5rem', 
      padding: '9px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#27272a', 
      borderColor: '#4A5568', 
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#FFF' : '', 
      color: '#7D7D80', 
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#D1D5DB', 
    }),
  };

  return (
    <div className="bg-[#000000] px-1 md:px-10 py-6 md:py-10 z-[10] relative">
      <div className="max-w-5xl mb-10 pt-36 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-28">
        {/* Left Side: Form Section */}
        <div>
          <p className="text-white text-xl">Have a Project in Mind</p>
          <h2 className="text-5xl text-white font-bold mt-4">
            tell us a bit more
          </h2>
          <form className="mt-6 space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PhoneInput
                country={"np"}
                value={state.phone}
                onChange={(phone) => setState({ phone })}
                containerClass="w-full mt-2"
                inputClass="w-full text-zinc-300 p-4 focus:ring-1 focus:ring-blue-500"
                inputStyle={{
                  height: "53px",
                  backgroundColor: "#27272A",
                  width: "210px",
                  border: "none",
                  borderRadius: "6px"
                }}
                buttonStyle={{
                  backgroundColor: "#27272A",
                  border: "none",
                  height: "52px",
                }}
                dropdownClass="bg-zinc-900 text-zinc-500"
                dropdownStyle={{ backgroundColor: "#27272A", width: "210px"}}
              />

<Select
        options={options}
        styles={customStyles}
        placeholder="Services"
        className="mt-2 "
      />
            </div>
            {/* Message Box */}
            <textarea
              placeholder="Your Message"
              className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
            {/* Submit Button */}
            <button className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-orange-500/25">
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
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-full flex items-center justify-center">
                <FaPhone className="text-white text-xl" />
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <div className="text-xl font-semibold">Our Phone Number</div>
                <span className="text-md text-[#99A1AF]">+977-9814711234</span>
              </div>
            </div>

            {/* Other Contact Details */}
            <div className="flex items-center space-x-4">
              {/* Icon with background */}
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-full flex items-center justify-center">
                <HiOutlineMail className="text-white text-xl" />
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <div className="text-xl font-semibold">Our Email</div>
                <span className="text-md text-[#99A1AF]">
                  Clickdigitals2024@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Icon with background */}
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-full flex items-center justify-center">
                <FaLocationDot className="text-white text-xl" />
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <div className="text-xl font-semibold">Our Office Address</div>
                <span className="text-md text-[#99A1AF]">
                  <a href="https://g.co/kgs/4sMGN7e">
                    Nobel Road Kanchanbari, Biratnagar
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
