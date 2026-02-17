import React from "react";
import { Check } from "lucide-react";
import Testimonials from "../Components/Testimonials";
import BlogSection from "../Components/Blogpost";
import FAQSection from "../Components/Faq";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Mi from "../Components/Mi";
import M from "../Components/M";

const services = [
    {
      icon: "assets/h.svg",
      title: "Web Development dsaoiasd fstgds",
      description: "Build modern and responsive websites with latest technologies.",
    },
    {
      icon: "assets/i.svg",
      title: "UI/UX Design dsafsadf",
      description: "Design user-friendly interfaces and engaging experiences.",
    },
    {
      icon: "assets/Glyph.svg",
      title: "SEO Optimization fdsafsfd",
      description: "Boost your website traffic and improve search engine rankings.",
    },
    {
      icon: "assets/Vector.svg",
      title: "Support sdafasd fsad",
      description: "24/7 customer support to help you with all queries.",
    },
  ];

function AboutUs() {
  return (
    <div>
      {/* Header Section */}
    <section className="relative w-full h-[10vh] md:h-[20vh] lg:h-[40vh] overflow-hidden">
  <img
    src="/assets/Abanner.svg"
    alt="Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay (text/button etc.) */}
  <div className="absolute inset-0 flex items-center justify-center">
    {/* content here */}
  </div>
</section>

         <M/>
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <div className="w-full flex flex-col sm:flex-row justify-center">
           <img
            src="/assets/aabout1.svg"
            alt="About Us"
            className=" h-auto rounded-2xl border-[#1D2453] border border-l-2 border-r-0 border-[#1D2453] rounded-full"
          />
          <div className="mt-[10px] sm:mt[100px] ml-[10px]">
          <img
            src="/assets/aabout.svg"
            alt="About Us"
            className="  border border-l-2 border-r-0 border-[#1D2453] rounded-full "
          />
          </div>
         
        </div>

      
        <div className="flex flex-col items-start">
          <button className="mb-4 px-6 py-2 bg-transparent text border border-white rounded-full text-sm text-[#1D2453] border border-[#1D2453] font-medium">
  About Us
</button>

          <h2 className="text-[#1D2453] font-bold text-[32px]">About the sampada Group</h2>

          <p className="text-[#0E2A46] text-20px  leading-relaxed">
            Swasth Sampada Group is a diversified organization
committed to building a healthier, more sustainable future
through innovation, integrity, and excellence. With strong
foundations in healthcare and expanding footprints in
agriculture, cottage industries, and renewable energy, the
Group brings together multiple business verticals under one
unified vision — to create long-term value for communities,
partners, and the nation.
Driven by a purpose to improve quality of life, Swasth
Sampada Group operates with a corporate, scalable, and
future-ready approach while staying rooted in ethical
practices and social responsibility.
          </p>
        </div>

      </div>
    </section>
  <section
      className="relative w-full py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/aabout1.svg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#1D2453]/90"></div>

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 text-white">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[28px] lg:text-4xl font-bold mb-4">
            Our Vision
          </h2>

          <p className="text-[18px] lg:text-[20px] mb-10 leading-relaxed">
            To become a trusted multi-sector organization that transforms lives
            through quality healthcare, sustainable development, and renewable
            energy innovation.
          </p>

          <h3 className="text-[28px] lg:text-[32px] font-bold mb-6">
            Our Mission
          </h3>

          <ul className="space-y-6 text-[18px] lg:text-[20px] leading-relaxed">
            <li className="grid grid-cols-[24px_1fr] gap-4">
              <Check className="text-green-400 mt-[2px]" size={20} />
              <span>
                To deliver ethical, reliable, and wellness-focused healthcare
                solutions.
              </span>
            </li>

            <li className="grid grid-cols-[24px_1fr] gap-4">
              <Check className="text-green-400 mt-[2px]" size={20} />
              <span>
                To promote sustainability through responsible farming,
                community-driven cottage initiatives, and clean energy.
              </span>
            </li>

            <li className="grid grid-cols-[24px_1fr] gap-4">
              <Check className="text-green-400 mt-[2px]" size={20} />
              <span>
                To build future-ready infrastructure that supports India’s
                growth while protecting the environment.
              </span>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div>
  <h2 className="text-[28px] lg:text-[32px] font-bold mb-6">
    Our Core Values
  </h2>

  <ul className="space-y-6 text-[18px] lg:text-[20px] leading-relaxed">
    
    <li className="grid grid-cols-[24px_1fr] gap-4">
      <Check className="text-green-400 mt-[3px]" size={20} />
      <p>
        <span className="font-semibold">Integrity:</span>{" "}
        Transparent and ethical practices across all divisions.
      </p>
    </li>

    <li className="grid grid-cols-[24px_1fr] gap-4">
      <Check className="text-green-400 mt-[3px]" size={20} />
      <p>
        <span className="font-semibold">Quality:</span>{" "}
        Uncompromised standards in products, services, and processes.
      </p>
    </li>

    <li className="grid grid-cols-[24px_1fr] gap-4">
      <Check className="text-green-400 mt-[3px]" size={20} />
      <p>
        <span className="font-semibold">Innovation:</span>{" "}
        Continuous improvement and adoption of future-focused solutions.
      </p>
    </li>

    <li className="grid grid-cols-[24px_1fr] gap-4">
      <Check className="text-green-400 mt-[3px]" size={20} />
      <p>
        <span className="font-semibold">Sustainability:</span>{" "}
        Commitment to environmental and social responsibility.
      </p>
    </li>

    <li className="grid grid-cols-[24px_1fr] gap-4">
      <Check className="text-green-400 mt-[3px]" size={20} />
      <p>
        <span className="font-semibold">Community Impact:</span>{" "}
        Creating meaningful change at grassroots levels.
      </p>
    </li>

  </ul>
</div>


      </div>
    </section>

    <section className="w-full py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-14">
          Our Division
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT BOX (spans height of 3 right boxes) */}
          <div className="bg-[#F1FBFC] rounded-3xl p-8 lg:p-10 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-[25px] font-semibold mb-4">
                Swasth Sampada Healthcare Cure
Division (Core Business)
              </h3>

              <p className="text-[#1D2453] leading-relaxed mb-6 text-[18px]">
                Swasth Sampada Healthcare is the flagship division and
the core strength of the Group. It focuses on delivering
quality healthcare solutions, ethical pharmaceutical
products, and wellness-driven outcomes that improve
patient lives.
              </p>
              <p className="font-medium text-[#1D2453] text-[18px]">Simpson Healthcare – Sub-Division under Swasth
Sampada Healthcare</p>
<p className="text-[#1D2453] text-[18px] mb-6"><strong> Simpson Healthcare</strong> is a specialized vertical dedicated
exclusively to:</p>

              <ul className="space-y-4 ">
                <li className="grid grid-cols-[20px_1fr] gap-3">
                  <Check className="text-green-500 mt-[3px]" size={18} />
                  <span>Gynecology (GYN)</span>
                </li>

                <li className="grid grid-cols-[20px_1fr] gap-3">
                  <Check className="text-green-500 mt-[3px]" size={18} />
                  <span>Child Health / Pediatrics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN (3 stacked boxes) */}
          <div className="grid grid-rows-3 gap-6 text-[#FFFFFF]">

            <div className="bg-[#51C5D0] rounded-3xl p-7 shadow-sm">
              <h4 className="font-semibold mb-1 text-[25px] ">
                Renewable Energy
              </h4>
              <p className="text-[18px] leading-relaxed">
                Driving sustainable growth through clean energy initiatives
                that reduce environmental impact.
              </p>
            </div>

            <div className="bg-[#85AEFA] rounded-3xl p-7 shadow-sm">
              <h4 className=" font-semibold mb-1 text-[25px]">
                Agriculture & Farming
              </h4>
              <p className="text-[18px] leading-relaxed">
                Supporting responsible farming practices that empower rural
                communities and promote sustainability.
              </p>
            </div>

            <div className="bg-[#1D2453] rounded-3xl p-7 shadow-sm">
              <h4 className=" font-semibold mb-1  text-[25px]">
                Infrastructure Development
              </h4>
              <p className="text-[18px] leading-relaxed">
                Building future-ready infrastructure that supports economic
                growth while protecting the environment.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
    <section className="w-full ">
      <div className=" mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3  text-white">

          
          <div
            className="relative p-8 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/aabout.svg')" }}
          >
            <div className="absolute inset-0 bg-[#51C5D0]/80"></div>

            <div className="relative">
              <h3 className="text-[32px] font-semibold">
                Our Leadership
              </h3>
              <p className="text-[20px] leading-relaxed">
                The strategic vision and growth of Swasth
Sampada Group are guided by experienced
leadership with a deep commitment to
ethical business practices and social
impact.
              </p>
            </div>
          </div>

          <div className="bg-[#F0FAFF]  p-8 text-gray-900">
            <h3 className="text-[25px] font-semibold ">
              Mr. Raaghvendra Shukla
            </h3>
            <p className="text-[20px]">Director</p>
            <p className="text-[20px] leading-relaxed">
              Empowering communities through responsible agriculture,
              renewable energy, and long-term development initiatives.
            </p>
          </div>


          <div className="bg-[#F0FAFF] p-8 text-gray-900 md:border-l md:border-gray-300">
  <h3 className="text-[25px] font-semibold">
    Mrs. Smriti Shukla
  </h3>
  <p className="text-[20px]">Director</p>
  <p className="text-[20px] leading-relaxed">
    Plays a pivotal role in shaping
    organizational culture, operational
    excellence, and sustainable
    development initiatives.
  </p>
</div>


        </div>
      </div>
    </section>
   <Mi/>
    <Testimonials/>
    <BlogSection/>
    <FAQSection/>
    <Contact/>
    <Footer/>


    </div>
  );
}

export default AboutUs;
