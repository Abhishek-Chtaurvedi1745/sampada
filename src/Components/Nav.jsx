import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white relative z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src="/assets/logo.svg" alt="Logo" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-[45px] font-medium">
              <li>
                <Link to="/" className="hover:text-[#1D2453] text-[18px]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1D2453] text-[18px]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/sampadahealthcare" className="hover:text-[#1D2453] text-[18px]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/simpsonhealthcare" className="hover:text-[#1D2453] text-[18px]">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/sampadafarm" className="hover:text-[#1D2453] text-[18px]">
                  Sampadafarm
                </Link>
              </li>
              <li>
                <Link to="/cottagedivision" className="hover:text-[#1D2453] text-[18px]">
                  cottage division
                </Link>
              </li>
              <li>
                <Link to="/windandrenewable" className="hover:text-[#1D2453] text-[18px]">
                  Wind and Renewable
                </Link>
              </li>
              {/* <li>
                <Link to="/contact" className="hover:text-[#1D2453] text-[18px]">
                  Contact
                </Link>
              </li> */}
            </ul>

            {/* Toggle Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-2xl focus:outline-none focus:ring-0"
            >
              <FaBars />
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src="/assets/logo.svg" alt="Logo" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-xl focus:outline-none focus:ring-0"
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile Menu */}
         <ul className="flex flex-col gap-5 p-6 text-[18px] font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/sampadahealthcare" },
            { name: "Healthcare", path: "/simpsonhealthcare" },
            { name: "Sampadafarm", path: "/sampadafarm" },
            { name: "Cottage Division", path: "/cottagedivision" },
            { name: "Wind & Renewable", path: "/windandrenewable" },
          ].map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Nav;
