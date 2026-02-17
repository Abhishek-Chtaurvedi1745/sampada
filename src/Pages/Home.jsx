import React from 'react'


import WhoWeAre from '../Components/WhoweAre';
import Whychoose from '../Components/Whychoose';
import Testimonials from '../Components/Testimonials';
import BlogSection from '../Components/Blogpost';
import FAQSection from '../Components/Faq';
import Footer from '../Components/Footer';
import Mi from '../Components/Mi';
import Contact from '../Components/Contact';
import M from '../Components/M';



  const divisions = [
  {
    leftImg: "/assets/he.svg",
    title: "Healthcare Our Foundation",
    desc1: "Swasth Sampada Healthcare delivers ethical pharmaceutical solutions. Simpson Healthcare specializes in Gynecology and Child Health.",
    desc2: "Comfort-focused designs.",
    bg: "bg-[#A0F7FF]"
  },
  {
    leftImg: "/assets/barn.svg",
    title: "Swasth Sampada Farms",
    desc1: "We promote sustainable, health-oriented farming practices that support food quality, environmental balance, and rural empowerment.",
    desc2: "Built for growth.",
    bg: "bg-[#8BC1E9]"
  },
  {
    leftImg: "/assets/cabin.svg",
    title: "Swasth Sampada Cottage",
    desc1: "Our cottage division nurtures traditional, small-scale initiatives — preserving heritage, creating livelihoods, and strengthening communities.",
    desc2: "Elegant & functional.",
    bg: "bg-[#B4CEFF]"
  },
  {
    leftImg: "/assets/poer.svg",
    title: "Wind Energy & Renewable Solutions",
    desc1: "We are investing in clean energy with a strong focus on wind power for EV charging infrastructure, building a greener, future-ready ecosystem.",
    desc2: "Seamless transformation.",
    bg: "bg-[#A9E3FF]"
  }
];


function Home() {
  return (
    <>
   
    
    <section className="py-20 bg-white">
     
      <div className="max-w-[1050px] mx-auto px-6 md:px-[30px]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[20px] lg:gap-20">
          
          {/* LEFT SIDE: CONTENT (Takes 1/2 width on desktop) */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-[32px] text-[#51C5D0] font-semibold text-[#1D2453]">
              Strengthening Health, Nourishing
Communities & Powering a Sustainable
Future.
            </h2>
            
            <p className="text-gray-600 text-[20px]  text-[#1D2453]">
             Sampada Group is a diversified organization driven by
a single purpose to improve quality of life through healthcare
excellence, sustainable agriculture, community-based
enterprises, and renewable energy innovation.
            </p>
            <div className='flex flex-col md:flex-row gap-[10px]'>
            <button className="bg-[#51C5D0] text-white px-6 text-[18px] whitespace-nowrap py-3 rounded-lg font-bold uppercase tracking-wider transition-all border-none outline-none  shadow-lg">
              Explore Our World
            </button>
             <button className="bg-[#51C5D0] border-none outline-none whitespace-nowrap text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider transition-all shadow-lg">
              Book An Appointment
            </button>
            </div>
          </div>

     
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <img 
                src="assets/doctor.svg" 
                alt="Interior Blind Design" 
                className="w-full h-[392px] "
              />
              
        
            </div>
          </div>

        </div>
      </div>
    </section>
   {/* <section className="py-14 bg-[#1D2453]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bg} flex  justify-between transition-shadow text-white`}
            >
              <div className="h-[70px] w-[70px] px-3 flex justify-center items-center shadow-xl rounded">
  <img
    src={service.icon}
    alt="service icon"
    className="h-full w-full object-contain"
  />
</div>

              <h3 className="text-[20px] font-semibold mt-5 lg:mt-0">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <M/>
    <WhoWeAre/>
     <section className="py-20 bg-[#F0FAFF]">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-[32px] font-semibold text-center mb-14">
      Our Core Division
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {divisions.map((item, index) => (
        <div
          key={index}
          className={`${item.bg} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col`}
        >
          <div className="flex items-center justify-center gap-5 mb-4">
            <img
              src={item.leftImg}
              alt=""
              className="w-10 h-10 object-contain"
            />
            <h3 className="text-[#1D2453] text-[22px] font-semibold">
              {item.title}
            </h3>
          </div>

          <p className="text-[#1D2453] text-[16px] leading-relaxed mb-2 ">
            {item.desc1}
          </p>

          
        </div>
      ))}
    </div>

  </div>
</section>
<Whychoose/>
<Mi/>
<Testimonials/>
<BlogSection/>
<FAQSection/>
<Contact/>
    <Footer/>
    </>
  )
}

export default Home