import React, { useState } from "react";

function Process() {

  const [activeprocess, setActiveProcess] = useState("development");

  const Development_steps = [
    {
      id: "01",
      title: "Discovery Session",
      description: "Understanding your vision and planning the path forward",
      steps: [
        {
          title: "Project Scope",
          description:
            "We collaborate to understand your requirements and identify the optimal solutions for your needs.",
        },
        {
          title: "Project Roadmap & Estimation",
          description:
            "Detailed timeline and cost breakdown for complete project transparency.",
        },
      ],
    },
    {
      id: "02",
      title: "Development Phase",
      description: "Bringing your vision to life with cutting-edge technology",
      steps: [
        {
          title: "Frontend Development",
          description:
            "Creating responsive, user-friendly interfaces with modern frameworks and best practices.",
        },
        {
          title: "Backend Integration",
          description:
            "Building robust server-side solutions and APIs to power your application.",
        },
      ],
    },
    {
      id: "03",
      title: "Testing & QA",
      description: "Ensuring quality and performance across all platforms",
      steps: [
        {
          title: "Quality Assurance",
          description:
            "Rigorous testing to ensure functionality, security, and optimal performance.",
        },
        {
          title: "User Testing & Feedback",
          description:
            "Real-world testing to validate user experience and interface design.",
        },
      ],
    },
    {
      id: "04",
      title: "Deployment",
      description: "Launching your project with confidence",
      steps: [
        {
          title: "Launch Preperation",
          description:
            "Final checks and optimizations to ensure a smooth deployment.",
        },
        {
          title: "Ongoing Support",
          description:
            "Continued maintenance and updates to keep your project running smoothly.",
        },
      ],
    },
  ];

  const Design_steps = [
    {
      id: "01",
      title: "Discovery Session",
      description: "Understanding your brand vision and design requirements",
      steps: [
        {
          title: "Project Scope",
          description:
            "We'll work with you to understand your requirements and identify what needs to be done. Our goal is to help you clarify your needs and determine the best course of action.",
        },
        {
          title: "Project Roadmap & Estimation",
          description:
            "We will provide you with a detailed project roadmap and a cost estimate. That way, you're going to know exactly how long the entire project is going to take and how much it's going to cost you.",
        },
      ],
    },
    {
      id: "02",
      title: "Logo Design",
      description: "Crafting your brand's visual identity",
      steps: [
        {
          title: "Collaborative Refinement",
          description:
            "Through collaboration and refinement, we ensure every element aligns seamlessly with your brand identity, leaving a lasting impression.",
        },
        {
          title: "Brand Refinment",
          description:
            "Creating primary and secondary logos that perfectly convey your brand's values and personality across all platforms.",
        },
      ],
    },
    {
      id: "03",
      title: "Visual Elements",
      description: "Developing your complete brand aesthetic",
      steps: [
        {
          title: "Color & Typography",
          description:
            "We choose colors to evoke feelings, fonts to show personality, and images to tell the brand's story. Graphic elements like patterns add extra flair.",
        },
        {
          title: "Design Syatem",
          description:
            "Creating a cohesive visual language that ensures consistency across all your brand materials.",
        },
      ],
    },
    {
      id: "04",
      title: "Brand Guidelines",
      description: "Documenting your brand's visual standards",
      steps: [
        {
          title: "Comprehensive Guide",
          description:
            "This file contains detailed explanations of your logo design, color palette, and how to apply them in various contexts. It serves as a comprehensive guide to maintaining a cohesive brand identity.",
        },
        {
          title: "Implementation Support",
          description:
            "Guidance and resources to help you properly implement your new brand identity across all platforms and materials.",
        },
      ],
    },
  ];

  return (
    <section className="relative bg-[#0A0F1E] px-4 md:px-20 py-24 pt-36" id="process">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm">
            <p className="text-blue-400 font-medium tracking-wider uppercase text-sm">
              Our Process
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
            Guiding You Through Each <br className="hidden md:block" />
            <span className="text-gradient-blue">Essential Step</span>
          </h2>
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <button
              className={`relative cursor-pointer px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300
                ${activeprocess === "development" 
                ?  "text-white bg-gradient-to-r from-blue-600/20 to-blue-500/20 shadow-lg shadow-blue-500/10" : "text-zinc-400 hover:text-zinc-200"}`}
                  onClick={()=>setActiveProcess("development")}
            >
              Development Process
            </button>
            <button
              className={`relative cursor-pointer px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300
                ${activeprocess === "design" 
                ?  "text-white bg-gradient-to-r from-blue-600/20 to-blue-500/20 shadow-lg shadow-blue-500/10" : "text-zinc-400 hover:text-zinc-200"}`}
                  onClick={()=>setActiveProcess("design")}
            >
              Design Process
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-12">
              {(activeprocess === "development" ? Development_steps : Design_steps).map((step) => (
                <div key={step.id} className="relative group">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#1e3a8a]/20 border border-[#3B82F6]/20">
                      <span className="text-[#3B82F6] font-bold text-2xl">
                        {step.id}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white text-2xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 ml-0">
                    {step.steps.map((substep, index) => (
                      <div key={index} className="relative group/card h-full">
                        <div className="h-full p-6 rounded-2xl border border-[#1e3a8a]/20 bg-[#0f172a] hover:bg-[#1e3a8a]/10 transition-colors">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1e3a8a]/20 flex items-center justify-center">
                              <div className="w-5 h-5 rounded-full bg-[#3B82F6]/20 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[#3B82F6] font-semibold mb-2">
                                {substep.title}
                              </h4>
                              <p className="text-zinc-400 text-sm leading-relaxed">
                                {substep.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
