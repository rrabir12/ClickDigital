import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  
  const words = [
    "Website",
    "Application",
    "Branding",
    "Digital Marketing",
    "Web Design",
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index];
    let typingSpeed = isDeleting ? 100 : 150; // Typing and deleting speed

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1000; // Pause before deleting
      setTimeout(() => setIsDeleting(true), typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030019]">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full mix-blend-screen bg-[#4277af]/20 blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full mix-blend-screen bg-[#0d2844]/20 blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-20 md:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-6 py-2 rounded-full bg-[#4277af]/10 backdrop-blur-sm border border-[#4277af]/20 mb-8">
            <span className="text-[#4277af] text-sm font-medium">
              Full-Service Digital Agency
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Transforming Ideas Into
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#4277af] to-white text-transparent bg-clip-text">
              {text}
              <span className="">
                _
              </span>
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Your one-stop digital partner for creating exceptional digital
            experiences. From stunning websites to powerful applications, we
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-20">
            <a
              className="modern-button px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold bg-[#4277af] text-white hover:bg-[#4277af]/90 transition-colors duration-300"
              href="/contact"
            >
              Start Your Project
            </a>
            <a
              className="px-6 py-3 md:px-8 md:py-4 rounded-lg border border-[#4277af]/30 text-white hover:bg-[#4277af]/10 transition-colors duration-300 backdrop-blur-sm"
              href="/#services"
            >
              Explore Services
            </a>
          </div>
          <div className="flex justify-center gap-6 md:gap-12 px-4 md:px-8 py-4 rounded-2xl bg-[#4277af]/5 backdrop-blur-sm mx-auto max-w-3xl">
            <div className="flex flex-col items-center gap-1">
              <span className="text-white font-bold text-xl md:text-2xl">
                500+
              </span>
              <span className="text-gray-300 text-xs md:text-sm">
                Projects Delivered
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-white font-bold text-xl md:text-2xl">
                100%
              </span>
              <span className="text-gray-300 text-xs md:text-sm">
                Client Satisfaction
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-white font-bold text-xl md:text-2xl">
                In-House
              </span>
              <span className="text-gray-300 text-xs md:text-sm">
                Expert Team
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#030019] px-3 md:px-8 py-6 md:py-16">
        <div className="bg-[#0a192f] border-[#ccd6f6]/10 w-full max-w-[70rem] mx-auto rounded-lg md:rounded-2xl p-4 md:p-8">
          <h3 className="text-[#ccd6f6] text-base md:text-xl font-medium uppercase">
            Our Values
          </h3>
          <p className="text-[#ccd6f6] text-xl md:text-3xl font-bold mt-2">
            What Drives Us Forward
          </p>
          <div
            role="button"
            className="relative mt-4 md:mt-8 min-h-[120px] md:min-h-[200px] rounded-xl cursor-pointer"
          >
            <div className="flex items-center justify-center text-center p-3 md:p-4">
              <div>
                <h4 className="text-[#ccd6f6] text-lg md:text-2xl font-bold">
                  Professional Excellence
                </h4>
                <p className="text-[#8892b0] text-base md:text-lg mt-2 md:mt-4">
                  Setting the highest standards in digital solutions
                </p>
              </div>
            </div>
            <div className="absolute bottom-1 md:bottom-2 left-0 right-0 flex justify-center gap-1">
              <div className="h-1 w-3 md:w-4 bg-[#ccd6f6] rounded-full"></div>
              <div className="h-1 w-1 bg-[#8892b0]/30 rounded-full"></div>
              <div className="h-1 w-1 bg-[#8892b0]/30 rounded-full"></div>
            </div>
          </div>
          <div className="mt-2 text-center text-[#8892b0]/60 text-xs">
            1 of 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
