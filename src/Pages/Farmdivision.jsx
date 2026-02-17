import React from 'react'
import M from '../Components/M'
import { FaCheckCircle } from "react-icons/fa";
import Testimonials from '../Components/Testimonials';
import BlogSection from '../Components/Blogpost';
import FAQSection from '../Components/Faq';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';


function Farmdivision() {
  return (
    <>
    <section className="relative w-full">
  <img
    src="/assets/farm1.svg"
    alt="Banner"
    className="w-full aspect-video md:h-[60vh] object-fill block"
  />

  {/* Overlay (text/button etc.) */}
  <div className="absolute inset-0 flex items-center">
    {/* content here */}
  </div>
</section>

    <M/>
    <section className="w-full py-16 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <h5 className='text-[25px] text-[#1D2453] mb-2'>We have years of sustainable farming expertise</h5>
            <h2 className="text-[32px] font-bold text-[#1D2453] mb-2">
              Providing Pure, Natural & Traceable Farm
Solutions
            </h2>

            <p className="text-[#0E2A46] text-[20px] mb-6">
              Sampada Farms Division is the agricultural backbone of the Sampada
Group, dedicated to producing high-quality, naturally cultivated
ingredients that support our pharmaceutical, wellness, and nutraceutical
verticals.
            </p>
            
            <p className='text-[#0E2A46] text-[20px] mb-5'>We blend traditional farming wisdom with modern sustainable practices
to ensure purity, traceability, and consistent quality from soil to solution.
Our farms are not just growing spaces; they are living ecosystems built
on respect for nature, farmers, and future generations.</p>

            <button className="bg-[#51C5D0] border-none rounded-full p-2 px-4 text-[#FFFFFF]">
              Learn More
            </button>

            {/* Image below button */}
            <div className="mt-8">
              <img
                src="/assets/farm2.svg"
                alt="Farm"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>

    
<div className="flex flex-col gap-6 h-full text-[#FFFFFF]">

  
  <div className="bg-[#05AF79] p-14 rounded-2xl flex flex-col text-[20px]   flex-[1] shadow-xl">
    <p className=" font-bold mb-2">
      Trust by Partners
    </p>
    <span className='text-[32px] font-semibold'>12,980+</span>
    <p>Healthcare and wellness brands rely on
Sampada Farms for premium agricultural
sourcing.</p>
  </div>


  <div className="bg-[#51C5D0] p-14 rounded-2xl flex flex-col flex-[2] shadow-xl text-white">

  {/* LIST WITH CHECK ICON */}
  <ul className="mb-6 space-y-3 text-[20px]">
    <li className="flex items-start gap-3">
      <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-white text-[#51C5D0] text-sm font-bold">
        ✓
      </span>
      <span>
        Sustainable & chemical-responsible cultivation
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-white text-[#51C5D0] text-sm font-bold">
        ✓
      </span>
      <span>
        Advanced irrigation and soil health management
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-white text-[#51C5D0] text-sm font-bold">
        ✓
      </span>
      <span>
        Farm-to-formulation quality monitoring
      </span>
    </li>
  </ul>

  {/* ITEM 1 */}
  <div className="flex items-start gap-4 mb-4">
    <div className="h-14 w-14 rounded-full bg-[#29A3AE] flex items-center justify-center flex-shrink-0">
      <img src="/assets/farm3.svg" alt="" className="h-8 w-8" />
    </div>

    <div>
      <h2 className="text-[20px] font-semibold">
        AGRICULTURE-DRIVEN FARM INITIATIVES
      </h2>
      <p className="text-[18px]">
        Dedicated to advancing farm-based innovation and rural development.
      </p>
    </div>
  </div>

  {/* ITEM 2 */}
  <div className="flex items-start gap-4 mb-6">
    <div className="h-14 w-14 rounded-full bg-[#29A3AE] flex items-center justify-center flex-shrink-0">
      <img src="/assets/farm4.svg" alt="" className="h-8 w-8" />
    </div>

    <div>
      <h2 className="text-[20px] font-semibold">
        QUALITY, SUSTAINABILITY &
HEALTH FOCUS
      </h2>
      <p className="text-[18px]">
        Committed to eco-friendly, high-purity,
and wellness-oriented farming practices.
      </p>
    </div>
  </div>

  {/* BUTTON */}
  <div>
    <button className="bg-white text-[#51C5D0] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
      Read More
    </button>
  </div>

</div>


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
          src="/assets/farm5.svg"
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
<section className="w-full py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div>
        <img
          src="/assets/farm6.svg"
          alt="Farm Growth"
          className="w-full rounded-3xl object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-[32px] text-[#1D2453] font-bold \ mb-4">
          What We Grow
        </h2>

        <p className="text-[25px] text-[#0E2A46] mb-6">
          We focus on cultivating crops that align with
healthcare and wellness applications, including
        </p>

        {/* LIST CARD */}
       <ul className="space-y-4 text-white text-[18px]">

  <li className="flex items-start gap-3 bg-[#51C5D0] rounded-full p-4">
    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white text-[#51C5D0] font-bold flex-shrink-0">
      ✓
    </span>
    <span>Medicinal herbs and botanicals</span>
  </li>

  <li className="flex items-start gap-3 bg-[#51C5D0] rounded-full p-4">
    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white text-[#51C5D0] font-bold flex-shrink-0">
      ✓
    </span>
    <span>Nutraceutical-grade agricultural produce</span>
  </li>

  <li className="flex items-start gap-3 bg-[#51C5D0] rounded-full p-4">
    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white text-[#51C5D0] font-bold flex-shrink-0">
      ✓
    </span>
    <span>Natural raw materials for pharmaceutical formulations</span>
  </li>
  <li className="flex items-start gap-3 bg-[#51C5D0] rounded-full p-4">
    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-white text-[#51C5D0] font-bold flex-shrink-0">
      ✓
    </span>
    <span>Wellness-oriented crops with high nutritional value</span>
  </li>

</ul>
      </div>

    </div>
  </div>
</section>
<section className="w-full py-20">
  <div className="max-w-9xl mx-auto px-6">

  
    <h2 className="text-[32px] font-bold text-[#000000] text-center mb-12">
     Our Farming Philosophy
    </h2>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  
      <div className=" p-6 rounded-2xl shadow-2xl ">
        <img
          src="/assets/farm9.svg"
          alt=""
          className="h-40 w-30 object-cover mb-4"
        />
        <h3 className="text-[20px] font-semibold text-[#1D2453] mb-2">
          Sustainable Agriculture
        </h3>
        <p className="text-[18px] text-[#0E2A46]">
          Soil conservation, organic inputs, and
water-efficient irrigation systems.
        </p>
      </div>

     
      <div className="bg-[#51C5D0] p-6 rounded-2xl shadow-2xl ">
        <img
          src="/assets/farm8.svg"
          alt=""
          className="h-40 w-30 object-cover mb-4"
        />
        <h3 className="text-[20px] font-semibold text-[#1D2453] mb-2">
          Quality & Traceability
        </h3>
        <p className="text-[18px] text-[#0E2A46]">
          Complete farm-to-formulation
monitoring to ensure purity and
compliance.
        </p>
      </div>

      
      <div className="p-6 rounded-2xl shadow-2xl ">
        <img
          src="/assets/farm10.svg"
          alt=""
          className=" h-40 w-30 object-cover mb-4"
        />
        <h3 className="text-[20px] font-semibold text-[#1D2453] mb-2">
          Farmer Empowerment
        </h3>
        <p className="text-[16px] text-[#0E2A46]">
        Skill development, fair compensation,
and technology-driven productivity.
        </p>
      </div>

      
      <div className="bg-[#51C5D0] p-6 rounded-2xl shadow-2xl ">
        <img
          src="/assets/farm7.svg"
          alt=""
          className="h-40 w-30 object-cover mb-4"
        />
        <h3 className="text-[20px] font-semibold text-[#1D2453] mb-2">
          Eco-Friendly Infrastructure
        </h3>
        <p className="text-[16px] text-[#0E2A46]">
          Renewable-powered operations and
waste-minimization practices.
        </p>
      </div>

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
<section className="w-full bg-[#1D2453] py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

      {/* LEFT CONTENT */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
          Let’s Build Something Great Together
        </h2>

        <p className="text-lg text-[#FFFFFF]">
          We help businesses grow by delivering innovative, scalable, and
          high-performance digital solutions tailored to your needs.
        </p>
      </div>

      {/* RIGHT BUTTON */}
      <div>
        <button className="bg-[#51C5D0] border-none rounded-full p-2 px-4 text-[#FFFFFF]">
          Contact Us
        </button>
      </div>

    </div>
  </div>
</section>
<Testimonials/>
<BlogSection/>
<FAQSection/>
<Contact/>
<Footer/>
    </>
  )
}

export default Farmdivision
