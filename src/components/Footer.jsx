import React from "react";
import logo from '../assets/Click Digitals logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#stack" className="hover:underline">
                    Tech Stack
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/quickenquiry" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 flex dark:text-gray-400 font-medium space-x-4">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/share/18wUWM79sm/"
                    className="bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-full flex items-center justify-center"
                  >
                    <FaFacebookF className="text-white text-xl"/>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/click.digitals?igsh=ZnE0Y2UyejU3ZDhz"
                    className="bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-full flex items-center justify-center"
                  >
                    <FaInstagram className="text-white text-xl"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" style={{border: "1px solid gray,"}}/>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024
            <a href="/" className="hover:underline">
              Click Digitals™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
