import mahesh from '../../assets/mahesh.png'
import sagar from '../../assets/sagar.png'
import rabi from '../../assets/mypic.png'

function Teams() {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-8 md:mb-16"
          style={{ opacity: "1", transform: "none" }}
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Team
            </h2>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <p className="text-blue-200 text-lg mt-6">
            Building the Future Together
          </p>
        </div>
        <div className="text-center mb-12" style={{ opacity: "1", transform: "none" }}>
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-blue-500"></div>
            <h3 className="text-3xl font-bold text-white">Leading Team</h3>
            <div className="h-[1px] w-8 bg-blue-500"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-24">
          <div className="relative group h-full" style={{ opacity: "1" }}>
            <div className="relative h-full overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-lg border border-blue-500/20">
              <div className="flex flex-col items-center p-4 md:p-8 h-full">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 md:mb-6 ring-2 md:ring-4 ring-blue-500/20">
                  <img
                    alt=""
                    loading="lazy"
                    width="128"
                    height="128"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src={mahesh}
                  />
                </div>
                <div className="text-center flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mahesh Das
                  </h3>
                  <p className="text-blue-300 text-lg mb-4">
                    CEO &amp; Founder
                  </p>
                  <p className="text-blue-100 mb-4">
                    A visionary leader who excels in business development,
                    strategic planning, and operations management. His natural
                    leadership abilities and hands-on approach have created a
                    culture of innovation and excellence throughout the company.
                  </p>
                  <p className="text-blue-200 italic mb-6">
                    "The foundation of lasting business success lies in
                    strategic thinking, decisive action, and an unwavering
                    commitment to excellence in everything we do."
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="text-blue-300 hover:text-white transition-colors text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="#"
                      className="text-blue-300 hover:text-white transition-colors text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group h-full" style={{ opacity: "1" }}>
            <div className="relative h-full overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-lg border border-blue-500/20">
              <div className="flex flex-col items-center p-4 md:p-8 h-full">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 md:mb-6 ring-2 md:ring-4 ring-blue-500/20">
                  <img
                    alt=""
                    loading="lazy"
                    width="128"
                    height="128"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src={sagar}
                  />
                </div>
                <div className="text-center flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Sagar Thapa
                  </h3>
                  <p className="text-blue-300 text-lg mb-4">
                    CEO 
                  </p>
                  <p className="text-blue-100 mb-4">
                    A visionary leader who excels in business development,
                    strategic planning, and operations management. His natural
                    leadership abilities and hands-on approach have created a
                    culture of innovation and excellence throughout the company.
                  </p>
                  <p className="text-blue-200 italic mb-6">
                    "The foundation of lasting business success lies in
                    strategic thinking, decisive action, and an unwavering
                    commitment to excellence in everything we do."
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="text-blue-300 hover:text-white transition-colors text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="#"
                      className="text-blue-300 hover:text-white transition-colors text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other team members */}
        </div>
        <div className="text-center mb-12" style={{ opacity: "1", transform: "none" }}>
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-[1px] w-6 bg-blue-500/50"></div>
            <h3 className="text-2xl font-bold text-white">Management Team</h3>
            <div className="h-[1px] w-6 bg-blue-500/50"></div>
          </div>
        </div>
        <div className="flex justify-center">
  <div className="grid grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-32 max-w-4xl">
    <div className="relative group" style={{ opacity: "1" }}>
      <div className="relative overflow-hidden rounded-xl bg-blue-800/20 backdrop-blur-sm border border-blue-700/20 p-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        <div className="text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden mb-6 ring-2 ring-blue-500/20">
            <img
              alt="Omar Nabulsi"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              className="w-full h-full object-cover"
              // srcset="/_next/image?url=%2Fteam%2Fomar.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fteam%2Fomar.png&amp;w=256&amp;q=75 2x"
              src={rabi}
              style={{ color: "transparent" }}
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Rabi Roy</h3>
          <p className="text-blue-200 mb-4">Developer</p>
          <p className="text-blue-100 text-sm mb-4">
            Operations expert with a focus on scaling businesses.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="relative group" style={{ opacity: "1" }}>
      <div className="relative overflow-hidden rounded-xl bg-blue-800/20 backdrop-blur-sm border border-blue-700/20 p-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        <div className="text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden mb-6 ring-2 ring-blue-500/20">
            <img
              alt="Omar Nabulsi"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              className="w-full h-full object-cover"
              srcset="/_next/image?url=%2Fteam%2Fomar.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fteam%2Fomar.png&amp;w=256&amp;q=75 2x"
              src="/_next/image?url=%2Fteam%2Fomar.png&amp;w=256&amp;q=75"
              style={{ color: "transparent" }}
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Bipin Xettry</h3>
          <p className="text-blue-200 mb-4">Developer</p>
          <p className="text-blue-100 text-sm mb-4">
            Operations expert with a focus on scaling businesses.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

export default Teams;
