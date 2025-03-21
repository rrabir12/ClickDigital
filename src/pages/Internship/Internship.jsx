import React from "react";

function Internship() {
  const features = [
    {
      title: "UX/UI Design",
      description:
        "Join our team as a UX/UI Designer and craft intuitive and visually stunning designs for web and mobile.",
    },
    {
      title: "React Developer",
      description:
        "Join our team as a React Developer to build dynamic and responsive web applications. Collaborate with.",
    },
    {
      title: "Node/Next.js Developer",
      description:
        "Be part of our team as a Node/Next.js Developer and work on backend and server-side rendered applications.",
    },
    {
      title: "Flutter Developer",
      description:
        "Join us as a Flutter Developer and design cross-platform mobile applications with superior.",
    },
    {
      title: "React Native Developer",
      description:
        "Become a React Native Developer on our team and help create high-quality mobile applications. Focus on.",
    },
    {
      title: "Wordpress Developer",
      description:
        "Become a Wordpress Developer on our team and help create high-quality websites and web applicatios.",
    },
    {
      title: "DevOps Engineer",
      description:
        "Step into the world of DevOps and gain hands-on experience in automation, cloud infrastructure.",
    },
    {
      title: "Django",
      description:
        "Step into the world of Django and gain practical experience in python which can be very beneficial for future.",
    },
  ];

  return (
    <div className="bg-[#171e34] px-1 md:px-10 py-6 md:py-10 z-[10] relative">
      <div
        className="text-center mb-12 pt-32"
        style={{ opacity: "1", transform: "none" }}
      >
        <div className="inline-flex items-center gap-4 mb-8">
          <div className="h-[1px] w-8 bg-blue-500"></div>
          <h3 className="text-3xl font-bold text-white">Open Roles</h3>
          <div className="h-[1px] w-8 bg-blue-500"></div>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          career opportunities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-4 md:py-8 px-2 md:px-8 items-stretch">
        {features.map(({ title, description }, index) => (
          <div key={index} className="relative flex flex-col">
            <div className="flex-grow w-full">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl opacity-50"></div>
              <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 md:px-6 py-6 md:py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-between">
                <div className="mt-4">
                  <div
                    className=" text-white rounded-xl py-3 px-7 inline"
                    style={{ border: "1px solid #bdbdbd" }}
                  >
                    <span>Internship</span>
                  </div>
                  <h1 className="font-bold text-xl mt-8 md:text-2xl text-white mb-4 md:mb-6 relative z-50">
                    {title}
                  </h1>
                  <p className="font-normal text-base md:text-lg text-slate-500 mb-4 md:mb-6 relative z-50">
                    {description}
                  </p>
                </div>
                <a
                  className="border px-4 md:px-6 py-2 rounded-lg text-white mt-4 text-center bg-gradient-to-r from-orange-400 to-orange-600 font-medium"
                  href="/quickenquiry"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internship;
