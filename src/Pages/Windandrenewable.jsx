import React from 'react'
import M from '../Components/M'
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Testimonials from '../Components/Testimonials'
import BlogSection from '../Components/Blogpost'
import FAQSection from '../Components/Faq'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'


  const cards = [
    {
      img: "/assets/lpr.svg",
      title: "Renewable Energy",
      desc: "Clean power solutions integrating wind and green technologies.",
    },
    {
      img: "/assets/lps.svg",
      title: "Solar & Wind Maintenance",
      desc: "Preventive servicing to ensure maximum energy output.",
    },
    {
      img: "/assets/lpc.svg",
      title: "Energy Saving Devices",
      desc: "Smart systems that optimize power usage efficiently.",
    },
    {
      img: "/assets/lpe.svg",
      title: "Wind Eco-Power",
      desc: "Wind-based generation supporting EV charging networks.",
    },
  ];


function Windandrenewable() {
  return (
    <>
   <section className="relative w-full h-[13vh] sm:h-[20vh] md:h-[20vh] lg:h-[65vh] flex items-center justify-center shadow-inner">
  <img
    src="/assets/wd1.svg"
    alt="Banner"
    className="w-full h-full object-cover object-center block"
  />

  {/* Overlay (Title/Button etc.) */}
  <div className="absolute inset-0 flex items-center justify-center">
    {/* content here */}
  </div>
</section>

    <M/>
    <section className="w-full py-14 mt-10">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      

      <div className="relative">
        
        <button className="absolute -top-16 left-4 bg-white text-[#51C5D0] px-5 py-2 rounded-full border border-1 border-[#51C5D0]  text-sm font-semibold">
          About Us
        </button>

        <img
          src="/assets/lp1.svg"
          alt="About"
          className="w-full h-[380px] md:h-[450px] object-cover rounded-2xl"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-[32px] font-semibold text-[#1D2453]">
          Wind Energy & Renewable Energy Division
        </h2>

        <p className="text-[20px] text-[#0E2A46] leading-relaxed">
          Sampada Group’s Wind & Renewable Energy Division is committed to
building a greener future through advanced wind power generation and
EV charging infrastructure. By integrating smart renewable
technologies, we help businesses and communities reduce carbon
emissions while achieving long-term energy independence.
        </p>

        {/* 2 row / 2 column list */}
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
  {[
    "24/7 Customer Support",
    "Expert Engineering Team",
    "Lower Energy Costs",
    "Energy Independence",
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-start gap-3 bg-[#EFF2FB] rounded-xl px-4 py-4"
    >
      <FaCheckCircle className="mt-1 text-[#51C5D0] text-lg shrink-0" />
      <p className="text-gray-700">{item}</p>
    </div>
  ))}
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm">
    <img
      src="/assets/lp2.svg"
      alt="Team"
      className="w-16 h-16 rounded-xl object-cover"
    />
    <div>
      <h4 className="text-[32px] font-semibold text-[#0E2A46]">456K+</h4>
      <p className="text-[#0E2A46]  text-[18px]">
        Renewable energy
generated through
optimized wind.
      </p>
    </div>
  </div>

  <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm">
    <img
      src="/assets/lp3.svg"
      alt="Support"
      className="w-16 h-16 rounded-xl object-cover"
    />
    <div>
      <h4 className="text-[32px] font-semibold text-[#0E2A46]">97%</h4>
      <p className="text-[#0E2A46]  text-[18px]">
        Customer satisfaction
through reliable
renewable delivery.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</section>
<section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        {/* Wrapper must be relative for absolute cards */}
        <div className="pl-9 relative grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-60 items-center bg-[#F0FAFF] rounded-2xl">
          
          {/* Left Content */}
          <div className="lg:pr-16">
            <button className="text-[#51C5D0] px-5 py-2 rounded-full border border-[#51C5D0] font-semibold">
              Our Focus
            </button>

            <h2 className="mt-5 text-[32px]  font-bold text-[#1D2453] leading-tight">
             Complete renewable
energy solutions with
smart maintenance
            </h2>

            <button className="mt-7 inline-flex items-center gap-2 bg-[#51C5D0] text-white px-7 py-3 rounded-full font-semibold shadow-md">
              Connect With us <FaArrowRight />
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:pl-16">
            <img
              src="/assets/lp4.svg"
              alt="Solar"
              className="w-full h-[420px] md:h-[600px] object-cover rounded-2xl"
            />
          </div>

         
        {/* Cards: normal flow on small screens, absolute in middle on xl */}
<div className="mt-8 xl:mt-0 xl:absolute xl:right-[10%] xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 w-full xl:max-w-md">
  <div className="space-y-4 px-0 xl:px-3">
    {cards.map((c, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-lg border p-4 flex items-start gap-4"
      >
        <img src={c.img} alt={c.title} className="w-12 h-12 object-contain" />
        <div>
          <h4 className="text-[25px] font-semibold text-[#1D2453]">{c.title}</h4>
          <p className="mt-1 text-[20px] text-[#1D2453] leading-relaxed ">{c.desc}</p>
        </div>
      </div>
    ))}
  </div>
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

export default Windandrenewable
