import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

export default function QuickEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const options = [
    { value: "services", label: "Services" },
    { value: "web-development", label: "Web Development" },
    { value: "app-development", label: "App Development" },
    { value: "system-software", label: "System/Software Development" },
    { value: "ui-ux", label: "UI/UX" },
    { value: "seo", label: "Search Engine Optimization (SEO)" },
    { value: "social-media-marketing", label: "Social Media Marketing" },
    { value: "graphics-design", label: "Graphics Design" },
    { value: "content-writing", label: "Content Writing" },
    { value: "pay-per-click", label: "Pay Per Click" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "internship", label: "Internship" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#27272a",
      border: "none",
      borderRadius: "0.5rem",
      padding: "9px",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#27272a",
      borderColor: "#4A5568",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#FFF" : "",
      color: "#7D7D80",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#D1D5DB",
    }),
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };

  const handleServiceChange = (selectedOption) => {
    setFormData({ ...formData, service: selectedOption.label });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .send(
  //       "service_f8rxvsm",
  //       "template_h7khze8",
  //       formData,
  //       "52iljLFXnqCyso1I9"
  //     )
  //     .then(
  //       (response) => {
  //         alert("Message sent successfully!");
  //         setFormData({
  //           name: "",
  //           email: "",
  //           phone: "",
  //           service: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         alert("Failed to send message. Please try again.");
  //       }
  //     );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_f8rxvsm",
        "template_h7khze8",
        formData,
        "52iljLFXnqCyso1I9"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.log("Email sending failed:", error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );

    e.target.reset(); 
  };

  return (
    <div className="bg-[#000000] px-1 md:px-10 py-6 md:py-10 z-[10] relative">
      <ToastContainer style={{top: "80px"}}/>
      <div className="max-w-5xl mb-10 pt-36 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-28">
        {/* Left Side: Form Section */}
        <div>
          <p className="text-white text-xl">Have a Project in Mind</p>
          <h2 className="text-5xl text-white font-bold mt-4">
            tell us a bit more
          </h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PhoneInput
                country={"np"}
                value={formData.phone}
                onChange={handlePhoneChange}
                containerClass="w-full mt-2"
                inputClass="w-full text-zinc-300 p-4 focus:ring-1 focus:ring-blue-500"
                inputStyle={{
                  height: "53px",
                  backgroundColor: "#27272A",
                  width: "100%",
                  border: "none",
                  borderRadius: "6px",
                }}
                buttonStyle={{
                  backgroundColor: "#27272A",
                  border: "none",
                  height: "52px",
                }}
                dropdownClass="bg-zinc-900 text-zinc-500"
                dropdownStyle={{ backgroundColor: "#27272A", width: "210px" }}
              />

              <Select
                options={options}
                styles={customStyles}
                placeholder="Services"
                onChange={handleServiceChange}
                className="mt-2"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-orange-500/25 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Contact Details */}
        <div className="block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300">
          <p className="text-white text-xl">We would love to hear from you.</p>
          <h2 className="text-2xl text-white font-bold mt-2">Get In Touch</h2>
          <div className="mt-10 space-y-12 text-white">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-full">
                <FaPhone className="text-white text-xl" />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-semibold">Our Phone Number</div>
                <span className="text-md text-[#99A1AF]">+977-9814711234</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-full">
                <HiOutlineMail className="text-white text-xl" />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-semibold">Our Email</div>
                <span className="text-md text-[#99A1AF]">
                  Clickdigitals2024@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-full flex items-center justify-center">
                <FaLocationDot className="text-white text-xl" />
              </div>
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
