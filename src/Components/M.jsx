import React from 'react'

const services = [
    {
      icon: "assets/h.svg",
      title: "Integrated Wellness Ecosystem",
      description: "Build modern and responsive websites with latest technologies.",
    },
    {
      icon: "assets/i.svg",
      title: "Purpose-Driven Innovation",
      description: "Design user-friendly interfaces and engaging experiences.",
    },
    {
      icon: "assets/Glyph.svg",
      title: "Ethical Quality Leadership",
      description: "Boost your website traffic and improve search engine rankings.",
    },
    {
      icon: "assets/Vector.svg",
      title: "Scalable & Future-Ready Model",
      description: "24/7 customer support to help you with all queries.",
    },
  ];

function M() {
  return (
    <div>
      <section className="py-14 bg-[#1D2453]">
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

              <h3 className="text-[20px] font-semibold text-left mt-5 lg:mt-0">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default M
