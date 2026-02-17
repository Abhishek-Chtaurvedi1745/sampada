import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Testimonials from "../Components/Testimonials";
import BlogSection from "../Components/Blogpost";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Cottagedivision() {
  return (
    <>
   <section className="relative w-full">
  <img 
    src="/assets/cd1.svg" 
    alt="Banner" 
    className="w-full h-auto block" 
  />
  
  {/* If you need text on top of the image, use this div: */}
  <div className="absolute inset-0 flex items-center justify-center">
  </div>
</section>
    <section className="w-full py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

      
    <div className="space-y-6">
  {[
    {
      title: "24/7 Community Support",
      text: "Continuous guidance for artisans and cottage entrepreneurs.",
      icon: "/assets/cd6.svg",
    },
    {
      title: "Skill Development Programs",
      text: "Training and empowerment for traditional craftsmen.",
      icon: "/assets/cd4.svg",
    },
    {
      title: "Sustainable Livelihoods",
      text: "Eco-friendly practices that ensure long-term growth",
      icon: "/assets/cd3.svg",
    },
    
  ].map((item, index) => (
    <div key={index} className="flex gap-4">
      {/* ICON */}
      <img
        src={item.icon}
        alt="icon"
        className="w-10 h-10 flex-shrink-0"
      />

      {/* TEXT CONTENT */}
      <div>
        <h4 className="text-lg font-semibold text-[#1D2453]">
          {item.title}
        </h4>
        <p className="text-gray-600">
          {item.text}
        </p>
      </div>
    </div>
  ))}
</div>

    <div className="">
  <img
    src="/assets/cd2.svg"
    alt="Center"
    className=" object-cover rounded-2xl shadow-lg"
  />
</div>




      <div>
        <h2 className="text-3xl font-bold text-[#1D2453] mb-4">
          Preserving Tradition
Empowering Communities
        </h2>
        <p className="text-[#0E2A46] text-[20px] mb-3">
          Our Cottage Division is built on the belief that true
growth begins at the grassroots. Through small-scale
and cottage-based initiatives, Swasth Sampada
nurtures traditional craftsmanship, sustainable
production, and community-driven enterprises that
create meaningful livelihood opportunities while
safeguarding cultural heritage.
        </p>
        <p className="text-[#0E2A46] text-[20px]">
These thoughtfully developed cottage spaces reflect
simplicity, dignity, and self-reliance — where people,
skills, and sustainability come together.</p>
      </div>

    </div>

  </div>
</section>
 <section className="w-full py-20 bg-[#1D2453]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div>
        <img
          src="/assets/cd7.svg"
          alt="Farm"
          className="w-full rounded-3xl object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col gap-8">

        {/* BLOCK 1 */}
        <div>
          <button className="border border-white border-1 text-white px-6 py-2 rounded-full mb-4 font-medium">
            Our Vision
          </button>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-[#1D2453] text-[18px]">
              To build self-reliant communities by promoting cottage-based
industries that preserve traditional craftsmanship, foster
sustainable livelihoods, and create long-term socio-economic
impact.
            </p>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div>
          <button className="border border-white border-1 text-white px-6 py-2 rounded-full mb-4 font-medium">
            Our Mission
          </button>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-[#1D2453] text-[18px]">
              To empower artisans and local entrepreneurs by providing
access to skill development, ethical production practices, and
sustainable market opportunities enabling them to achieve
financial independence while preserving cultural heritage.
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
<section className="w-full py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADING */}
    <div className="text-center max-w-3xl mx-auto mb-14">
      <h2 className="text-4xl font-bold text-[#1D2453] mb-4">
        What We Do
      </h2>
      <p className="text-[#1D2453]  text-[20px]">
        We work hand-in-hand with local artisans and community groups to strengthen cottage enterprises through
      </p>
    </div>

    {/* IMAGE GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* IMAGE CARD */}
      {[
        {
          title: "Skill Development",
          text: "Training artisans to enhance traditional skills and modern techniques.",
          img: "/assets/cd8.svg",
        },
        {
          title: "Community Empowerment",
          text: "Creating opportunities for local communities to thrive.",
          img: "/assets/cd9.svg",
        },
        {
          title: "Sustainable Production",
          text: "Promoting eco-friendly practices for long-term impact.",
          img: "/assets/cd10.svg",
        },
        {
          title: "Cultural Preservation",
          text: "Safeguarding heritage through cottage-based initiatives.",
          img: "/assets/cd11.svg",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relativ rounded-2xl overflow-hidden group"
        >
          {/* IMAGE */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full object-cover group-hover:scale-105 transition duration-500"
          />

          {/* BOTTOM GRADIENT OVERLAY */}
         
        </div>
      ))}

    </div>

  </div>
</section>
<section
  className="relative w-full bg-cover bg-center py-20"
  style={{ backgroundImage: "url('/assets/farm5.svg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#1D2453]/80"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
         Our Impact
        </h2>

        <p className="text-lg text-gray-200 mb-6">
          Through Sampada Farms Division, we aim to
        </p>

        <button className="bg-[#51C5D0] border-none rounded-full p-2 px-4 text-[#FFFFFF]">
          Connect With Us
        </button>
      </div>

      {/* RIGHT LIST */}
      <div className="space-y-4">
  {[
    "Promote clean and chemical-responsible cultivation",
    "Strengthen rural livelihoods and farming communities",
    "Reduce environmental impact through green farming models",
    "Support Sampada Group’s commitment to holistic healthcare solutions"
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-xl px-6 py-4 shadow-md flex items-center gap-4"
    >
      <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />

      <p className="text-[#1D2453] font-medium">
        {item}
      </p>
    </div>
  ))}
</div>


    </div>
  </div>
</section>
<Testimonials/>
<BlogSection/>
<Contact/>
<Footer/>
    </>
  );
}

export default Cottagedivision;
