import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const blogPosts = [
  { img: "/assets/bgl1.svg", title: "How Integrated Healthcare Ecosystems Are", desc: "Explore the latest interior design trends that will transform your home." },
  { img: "/assets/bgl2.svg", title: "From Farm to Future: The Role of Sustainable", desc: "A complete guide to selecting the right curtains for every room." },
  { img: "/assets/bgl3.svg", title: "Wind Energy & EV Charging:Powering India’s", desc: "Tips and tricks to make the most of small living areas." },
  { img: "/assets/bgl1.svg", title: "Color Schemes That Work", desc: "Learn how to pick color schemes that make your home vibrant." },
  { img: "/assets/bgl2.svg", title: "Furniture Placement Ideas", desc: "Practical ideas for arranging furniture for better flow." },
];

function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogPosts.length - visibleCount : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + visibleCount >= blogPosts.length ? 0 : prev + 1));
  };

  return (
    <section className="py-10 bg-[#F0FAFF]">
      <div className="max-w-7xl mx-auto px-10 relative"> {/* Increased px-10 to make room for buttons */}
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1D2453] mb-4">Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest insights, tips, and inspiration for modern interiors.
          </p>
        </div>

        {/* RELATIVE WRAPPER (No overflow-hidden here) */}
        <div className="relative group">
          
          {/* THE VIEWPORT (Overflow hidden here only) */}
          <div className="overflow-hidden py-8"> {/* py-8 gives room for the bottom shadow */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                width: `${(blogPosts.length * 100) / visibleCount}%`,
                transform: `translateX(-${(currentIndex * 100) / blogPosts.length}%)`,
              }}
            >
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="px-3" // The GAP between cards
                  style={{ width: `${100 / blogPosts.length}%` }}
                >
                  <div className="bg-white rounded-2xl flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-[#1D2453] mb-3">{post.title}</h3>
                      {/* <p className="text-gray-600 text-sm leading-relaxed">{post.desc}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons (Outside the overflow box) */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-[-25px] -translate-y-1/2 bg-white text-[#1D2453] p-4 rounded-full shadow-2xl hover:bg-[#1D2453] hover:text-white transition-all z-30"
          >
            <AiOutlineLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 right-[-25px] -translate-y-1/2 bg-white text-[#1D2453] p-4 rounded-full shadow-2xl hover:bg-[#1D2453] hover:text-white transition-all z-30"
          >
            <AiOutlineRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;