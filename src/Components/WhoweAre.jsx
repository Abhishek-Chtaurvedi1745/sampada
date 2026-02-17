import React from "react";

function WhoWeAre() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">

          {/* LEFT COLUMN */}
          <div>
            <img
              src="/assets/whoweare.svg"
              alt="About us"
              className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
            />
            <p className="mt-6 text-[#1D2453] leading-relaxed text-[18px]">
              Sampada Group is a diversified corporate entity with
core competencies across healthcare, agriculture,
cottage-based enterprises, and renewable energy. Our
mission is to deliver superior products and services
that elevate wellbeing, empower communities, and
contribute to a sustainable and equitable future.
            </p>
          </div>

          {/* MIDDLE COLUMN (BOTTOM ALIGNED) */}
          <div className="flex flex-col justify-end">
            <div>
              <h4 className="text-[#51C5D0] text-[20px]">Sampada Group</h4>
              <h3 className="text-3xl font-bold mb-6">
                Who we Are
              </h3>

              <div className="bg-[#F0FAFF] p-11 rounded-2xl shadow-xl mt-[90px] space-y-6 mb-5">
                <div>
                  <h4 className="text-[25px] text-[#1D2453] font-semibold mb-2">
                    OUR VISION
                  </h4>
                  <p className="text-gray-600">
                   To be a global leader in human
wellness, sustainable living, and
green innovation -inspiring healthier,
happier, and more resilient societies.
                  </p>
                </div>

                <div>
                  <h4 className="text-[25px] text-[#1D2453] font-semibold mb-2">
                    OUR MISSION
                  </h4>
                  <p className="text-gray-600">
                    To integrate quality, innovation, and
responsibility into every business we
operate, ensuring long-term value for
customers, partners, and
communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (BOTTOM ALIGNED) */}
          <div className="flex items-end">
            <img
              src="/assets/wwa.svg"
              alt="Our work"
              className="w-full rounded-2xl mt-3"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
