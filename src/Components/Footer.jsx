import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1D2453] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

      
          <div className="lg:col-span-1">
            <img
              src="/assets/logo.svg"
              alt="Sampada Group"
              className="mb-4 rounded-xl bg-white"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Sampada Group is committed to delivering premium interior
              and lifestyle solutions with quality craftsmanship and
              customer-first approach.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Team</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Interior Design</a></li>
              <li><a href="#" className="hover:text-white">Curtain Solutions</a></li>
              <li><a href="#" className="hover:text-white">Furniture</a></li>
              <li><a href="#" className="hover:text-white">Consultation</a></li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Portfolio</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* COLUMN 5 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>📍 Gurugram, Haryana</li>
              <li>📞 <a href="tel:9834873487" className="hover:text-white">9834873487</a></li>
              <li>✉️ <a href="mailto:info@sampadagroup.com" className="hover:text-white">info@sampadagroup.com</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Sampada Group. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
