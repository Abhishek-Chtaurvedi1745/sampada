import React from 'react'


const blogs = [
    {
      img: "/assets/ms1.svg",
      title: "Ethics, Quality & Trust at the Core",
      desc: "Learn how switching to solar reduces costs and increases long-term savings.",
      date: "Jan 10, 2026",
    },
    {
      img: "/assets/ms2.svg",
      title: "Expertise Backed by Science & Experience",
      desc: "A quick checklist to make your solar installation smooth and efficient.",
      date: "Jan 05, 2026",
    },
    {
      img: "/assets/ms3.svg",
      title: "Purpose-Driven Impact",
      desc: "Simple habits to keep your system running at peak output year-round.",
      date: "Dec 28, 2025",
    },
  ];


function Mi() {
  return (
    <div>
    
    <section className="w-full py-16 relative overflow-hidden">
      {/* Left Background Image with Overlay */}
      <div className="absolute left-0 top-0 h-full w-[30%] hidden lg:block">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/cd3.svg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center">
          <div>
             <h2 className='text-[#1D2453] text-[32px] font-bold'>Why Choose Sampada Group?</h2>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border overflow-hidden hover:-translate-y-1 transition"
            >
              <div className="relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-[#0B1220] text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.date}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-[#0B1220] leading-snug">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile left overlay image (optional) */}
        <div className="mt-10 lg:hidden rounded-2xl overflow-hidden relative">
          <img
            src="/assets/cd3.svg"
            alt="Blog background"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-[#51C5D0]/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-bold text-xl px-6 text-center">
              Explore our latest updates & insights
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Mi
