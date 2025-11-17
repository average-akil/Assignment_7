import React from "react";
import logo from "../../../../assets/logo.png";
import dot from "../../../../assets/0.png";

const Footer = () => {
  return (
    <footer className="pt-48 bg-[#040D11] text-white ">
      {/* Logo */}
      <div className="flex justify-center items-center mb-8">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      {/* Main content */}
      <div className="container mx-auto flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center pb-12 ">
        
        {/* About Us */}
        <div>
          <h1 className="font-bold mb-2">About Us</h1>
          <p className="text-xs text-slate-400">
            We are a passionate team <br />
            dedicated to providing the best <br />
            services to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="font-bold mb-2">Quick Links</h1>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h1 className="font-bold mb-2">Subscribe</h1>
          <p className="text-xs text-slate-400 mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md bg-white rounded-2xl p-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
            />
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-2xl hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;