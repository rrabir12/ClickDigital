import React from "react";
import img from '../assets/logo.png'

function PartnerCompany() {
  return (
    <div className="bg-gradient-to-b from-[#0A1128] to-[#001233] py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-[#001233] rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-[#0A1128] rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>
      <div className="text-center mb-8 md:mb-16 relative">
        <div style={{ opacity: 1, transform: "none" }}>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4">
            <span className="text-blue-400">&lt;</span>Empowering businesses
            through innovative solutions
            <span className="text-blue-400">/&gt;</span>
          </p>
        </div>
      </div>
      {/* <div className="relative flex flex-col gap-4 md:gap-6 overflow-hidden"> */}
          <div className="relative flex-shrink-0 w-28 md:w-40 h-28 md:h-40 mx-2 md:mx-3 p-3 md:p-5 bg-[#0A1128]/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/5" style={{marginLeft: "43.2%", border: "0.1px solid #f2f2f2"}}>
            <div className="relative h-full flex items-center justify-center">
              <img
                alt="Espresso"
                fetchpriority="high"
                width="80"
                height="80"
                decoding="async"
                className="object-contain w-16 md:w-24"
                src={img}
              />
            </div>
          </div>
        {/* </div> */}
      <div className="mt-12 md:mt-20 text-center relative">
        <div style={{ opacity: 1, transform: "none" }}>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#001233] to-[#0A1128] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full border border-white/10 hover:border-white/20" style={{border: "1px solid #f5f5f5"}}
          >
            <span>Partner With Us</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PartnerCompany;
