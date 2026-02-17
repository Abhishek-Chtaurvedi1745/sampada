import React from "react";

const sampadaData = [
  {
    img: "/assets/Vector (1).svg",
    title: "Multi-Sector Expertise",
    desc: "Integrated capabilities spanning healthcare, agriculture, cottage enterprises, and renewable energy",
  },
  {
    img: "/assets/i.svg",
    title: "Quality & Innovation",
    desc: "High standards backed by research, compliance, and ethical practices",
  },
  {
    img: "/assets/cabin.svg",
    title: "Sustainable Impact",
    desc: "Projects designed for long-term ecological and community benefit",
  },
  {
    img: "/assets/deal.svg",
    title: "Trust & Integrity",
    desc: "Built on transparent operations and stakeholder-centric values.",
  },
];

function Whychoose() {
  return (
    <section className="flex justify-center mb-10">
      <div className="max-w-7xl px-6 bg-[#1D2453] text-white rounded-3xl py-10">

        <h2 className="text-[34px] font-semibold text-center mb-14">
          Sampada Group
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sampadaData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              
              <div className="w-18 h-18  rounded-full shadow-xxl flex items-center justify-center mb-2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-14 h-14 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <h3 className="text-[25px] font-semibold mb-1 ">
                {item.title}
              </h3>

              <p className="text-[18px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Whychoose;
