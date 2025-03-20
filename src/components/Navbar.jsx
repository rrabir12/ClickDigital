import { useState, useEffect } from "react";
import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-500 ${isScrolled ? "py-6 modern-glass" : "py-4 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a className="flex items-center space-x-3" href="/">
            <img
              alt="Clicks Logo"
              width="140"
              height="140"
              className="h-10 w-36 transition-all duration-300 hover:scale-105"
              src={logo}
              style={{ color: "transparent" }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-2">
            <a className="relative px-4 py-2 text-white/90 hover:text-white font-medium text-sm modern-nav-item" href="/">Home</a>
            <a className="cursor-pointer relative px-4 py-2 text-white/90 hover:text-white font-medium text-sm modern-nav-item">Services</a>
            <a className="cursor-pointer relative px-4 py-2 text-white/90 hover:text-white font-medium text-sm modern-nav-item">Our Process</a>
            <a className="cursor-pointer relative px-4 py-2 text-white/90 hover:text-white font-medium text-sm modern-nav-item">Internship</a>
            <a className="ml-4 px-8 py-3 rounded-lg text-white font-medium text-sm modern-button" href="/contact">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden modern-button p-2 rounded-lg"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="rounded-xl modern-glass-mobile p-4">
            <div className="flex flex-col gap-2">
              <a className="w-full px-4 py-3 text-white/90 hover:text-white font-medium text-sm modern-nav-item-mobile" href="/">Home</a>
              <a className="cursor-pointer w-full px-4 py-3 text-white/90 hover:text-white font-medium text-sm modern-nav-item-mobile">Services</a>
              <a className="cursor-pointer w-full px-4 py-3 text-white/90 hover:text-white font-medium text-sm modern-nav-item-mobile">Our Process</a>
              <a className="cursor-pointer w-full px-4 py-3 text-white/90 hover:text-white font-medium text-sm modern-nav-item-mobile">Our Process</a>
              <a className="w-full py-3 mt-2 rounded-lg text-white font-medium text-center text-sm modern-button" href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
