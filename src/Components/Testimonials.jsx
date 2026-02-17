import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const testimonials = [
  { img: "/assets/clt.svg", name: "ANIRUDH BHATTACHARYA", rating: 5, text: "Baby D3 Drop is one of the best vitamin supplements for infants. No side effects, pleasant taste, and very safe. I can see great results in my child’s growth and energy”" },
  { img: "/assets/clt.svg", name: "ANIRUDH BHATTACHARYA", rating: 5, text: "Baby D3 Drop is one of the best vitamin supplements for infants. No side effects, pleasant taste, and very safe. I can see great results in my child’s growth and energy”" },
  { img: "/assets/clt.svg", name: "ANIRUDH BHATTACHARYA", rating: 5, text: "Baby D3 Drop is one of the best vitamin supplements for infants. No side effects, pleasant taste, and very safe. I can see great results in my child’s growth and energy”" },
  { img: "/assets/clt.svg", name: "ANIRUDH BHATTACHARYA", rating: 5, text: "Baby D3 Drop is one of the best vitamin supplements for infants. No side effects, pleasant taste, and very safe. I can see great results in my child’s growth and energy”" },
  { img: "/assets/clt.svg", name: "ANIRUDH BHATTACHARYA", rating: 5, text: "Baby D3 Drop is one of the best vitamin supplements for infants. No side effects, pleasant taste, and very safe. I can see great results in my child’s growth and energy”" },
 
];

function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - visibleCount : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + visibleCount >= testimonials.length ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[32px] font-bold text-center mb-16 text-[#565353]">
          What Our Clients Say
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  style={{ minWidth: `${100 / visibleCount}%` }}
                  className="px-3" 
                >
                  {/* The Card */}
                  <div className="bg-white rounded-xl shadow-md p-8 flex gap-5 items-start h-full border border-gray-100">
                    
                    
                    <div className="flex-shrink-0">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover shadow-sm"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[16px] font-bold text-[#51C5D0] leading-none">
                        {t.name}
                      </h3>
                      <div className="flex items-center mt-2 mb-2">
                        {[...Array(t.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-xs mr-0.5" />
                        ))}
                      </div>
                      {/* Paragraph now touches the edges of its container */}
                      <p className="text-gray-600 leading-relaxed text-[15px] w-full m-0 p-0 text-justify">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-[#1D2453] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all z-20"
          >
            <AiOutlineLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[#1D2453] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all z-20"
          >
            <AiOutlineRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;