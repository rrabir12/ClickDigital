import img1 from '../../assets/mobile-app-developing.png'
import img2 from '../../assets/ux.png'
import img3 from '../../assets/digital-marketing.png'
import img4 from '../../assets/web-programming.png'
import img5 from '../../assets/graduate.png'

const Services = () => {

  const services = [
    {
      title: "Website Development & SEO",
      description:
        "Achieve your business goals with a custom-built, fast, reliable, and user-friendly website.",
      imgSrc: img4,
    },
    {
      title: "Digital Marketing",
      description:
        "Reach the right audience at the right time with targeted digital marketing strategies.",
      imgSrc: img3,
    },
    {
      title: "App Development",
      description:
        "Boost your business with our user-friendly web app development using the latest tech.",
      imgSrc: img1,
    },
    {
      title: "UI/UX Design & Branding",
      description:
        "Transform your brand with our UI/UX design and branding service tailored to your audience.",
      imgSrc: img2,
    },
    {
      title: "Training",
      description:
        "Empowering students with industry-relevant skills and hands-on experience to bridge the gap between academic learning and corporate excellence.",
      imgSrc: img5,
    },
  ];

  return (
    <div className="relative min-h-screen pt-16 overflow-hidden bg-[#040B14]" id="services">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0A192F,#040B14)]"></div>
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-sky-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-blue-500/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-blue-500/20 rotate-12"></div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </h2>
          </div>
          <p className="text-blue-200/60 mt-6 text-lg md:text-xl font-light">
            Transforming ideas into digital excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="relative service-card backdrop-blur-lg bg-blue-950/10 rounded-3xl p-6 md:p-8 h-full border border-blue-500/10 hover:border-blue-500/20 hover:transform hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,30,60,0.3)] transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-xl bg-white">
                    <img
                      alt={service.title}
                      width="30"
                      height="30"
                      className="w-6 h-6 transition-transform duration-300"
                      src={service.imgSrc}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-50">
                    {service.title}
                  </h3>
                </div>
                <p className="text-blue-200/60 mb-8">{service.description}</p>
                <a
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-orange-500/25"
                  href="/quickenquiry"
                >
                  <span>Contact Us</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Services;
