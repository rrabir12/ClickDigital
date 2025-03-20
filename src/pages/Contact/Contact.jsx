import React from "react";

function Contact() {
  return (
    <div className="bg-[#000000] pb-20">
      <div className="pt-32">
        <div className="md:h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-10">
            Let's Get In Touch
          </h1>
          <div className="w-[40rem] h-40 relative mt-10">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"></div>
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"></div>
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"></div>
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"></div>
            <div className="opacity-0 w-full h-full" style={{opacity: "1"}}>
              <div id=":r0:" className="h-full w-full">
                <canvas
                  data-generated="true"
                  style={{width: "100% !important", height: "100% !important"}}
                  aria-hidden="true"
                  height="240"
                  width="960"
                ></canvas>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <div
          className="space-y-8 px-6 py-12 text-white max-w-3xl mx-auto"
          style={{opacity: "1", transform: "none"}}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="space-y-8">
            <div className="space-y-4">
              <label className="block text-lg font-semibold">Service</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center justify-center px-6 py-4 rounded-lg cursor-pointer transition transform bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:scale-105">
                  <input
                    className="hidden"
                    type="radio"
                    value="development"
                    name="service"
                  />
                  <span className="text-lg">Development</span>
                </label>
                <label className="flex items-center justify-center px-6 py-4 rounded-lg cursor-pointer transition transform bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:scale-105">
                  <input
                    className="hidden"
                    type="radio"
                    value="design"
                    name="service"
                  />
                  <span className="text-lg">Design</span>
                </label>
                <label className="flex items-center justify-center px-6 py-4 rounded-lg cursor-pointer transition transform bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:scale-105">
                  <input
                    className="hidden"
                    type="radio"
                    value="both"
                    name="service"
                  />
                  <span className="text-lg">Both</span>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-semibold">Budget</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center justify-center px-6 py-4 rounded-lg cursor-pointer transition transform bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:scale-105">
                  <input
                    className="hidden"
                    type="radio"
                    value="less_than_$1500"
                    name="budget"
                  />
                  <span className="text-lg">Less than $1500</span>
                </label>
                <label className="flex items-center justify-center px-6 py-4 rounded-lg cursor-pointer transition transform bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:scale-105">
                  <input
                    className="hidden"
                    type="radio"
                    value="$1500_-_$3000"
                    name="budget"
                  />
                  <span className="text-lg">$1500 - $3000</span>
                </label>
                <label className="flex items-center justify-center px-6 py-4 rounded-lg cursor-pointer transition transform bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:scale-105">
                  <input
                    className="hidden"
                    type="radio"
                    value="$3000_-_$6000"
                    name="budget"
                  />
                  <span className="text-lg">$3000 - $6000</span>
                </label>
                <label className="flex items-center justify-center px-6 py-4 rounded-lg cursor-pointer transition transform bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:scale-105">
                  <input
                    className="hidden"
                    type="radio"
                    value="more_than_$6000"
                    name="budget"
                  />
                  <span className="text-lg">More than $6000</span>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-semibold">
                Name
                <input
                  placeholder="Your Name"
                  className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required=""
                  type="text"
                  value=""
                  name="name"
                />
              </label>
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-semibold">
                Phone Number
                <input
                  placeholder="Your Phone Number"
                  className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required=""
                  type="tel"
                  value=""
                  name="phone"
                />
              </label>
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-semibold">
                Email
                <input
                  placeholder="Your Email"
                  className="mt-2 block w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-sm text-base p-4 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required=""
                  type="email"
                  value=""
                  name="email"
                />
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 transition duration-300 ease-in-out text-white font-semibold py-3 px-8 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
