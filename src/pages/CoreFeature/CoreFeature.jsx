import React from "react";

function CoreFeature() {
  const features = [
    {
      title: "Top Notch Performance",
      description:
        "Enjoy top-notch performance, solid structure, and well-crafted website code with our services. Our websites guarantee lightning-fast loading speeds and seamless user experiences across all devices.",
    },
    {
      title: "Clean and Modern Design",
      description:
        "Impress your audience with our clean and modern website designs. We prioritize simplicity and elegance, creating visually appealing interfaces that highlight your content and brand identity.",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your online visibility and attract more organic traffic with our SEO optimization services. From strategic keyword placement to metadata optimization, we ensure that your website gets a high SEO score.",
    },
  ];

  return (
    <div className="bg-[#171e34] px-1 md:px-10 py-6 md:py-10 z-[10] relative">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 md:p-8 shadow-lg mb-8 md:mb-12 mx-2 md:mx-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          <h4 className="text-zinc-100 w-full md:w-[40%] mx-auto text-center md:text-left text-xl md:text-3xl font-semibold leading-tight">
            Core Features Included in Every Website We Create
          </h4>
          <p className="text-zinc-300 w-full md:w-[45%] mx-auto text-center md:text-left text-sm md:text-lg leading-relaxed mt-4 md:mt-0">
            Our websites are built on essential features, ensuring top-notch
            performance, seamless navigation, stunning design, and effective SEO
            optimization.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 py-4 md:py-8 px-2 md:px-8 items-stretch">
        {features.map(({ title, description }, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-[30%] relative flex flex-col"
            >
              <div className="flex-grow w-full">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl opacity-50"></div>
                <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 md:px-6 py-6 md:py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="h-7 w-7 rounded-full border flex items-center justify-center mb-6 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-3 w-3 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        ></path>
                      </svg>
                    </div>
                    <h1 className="font-bold text-xl md:text-2xl text-white mb-4 md:mb-6 relative z-50">
                      {title}
                    </h1>
                    <p className="font-normal text-base md:text-lg text-slate-500 mb-4 md:mb-6 relative z-50">
                      {description}
                    </p>
                  </div>
                  <a
                    className="border px-4 md:px-6 py-2 rounded-lg text-white mt-4 text-center bg-gradient-to-r from-orange-400 to-orange-600 font-medium"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoreFeature;
