import React from "react";
import Nav from "../Components/Nav";
import M from "../Components/M";
import { Check, Phone } from "lucide-react";
import Testimonials from "../Components/Testimonials";
import BlogSection from "../Components/Blogpost";
import FAQSection from "../Components/Faq";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";



const data = [
    {
      img: "/assets/ff1.svg",
      title: "Ethical pharmaceutical formulations",
    },
    {
      img: "/assets/ff2.svg",
      title: "Preventive and curative healthcare solutions",
    },
    {
      img: "/assets/ff3.svg",
      title: "Patient-centric wellness products",
    },
    {
      img: "/assets/ff4.svg",
      title: "Continuous innovation for better health outcomes",
    }
  ];

function Sampadahealthcare() {
  return (
    <>
      <section className="relative w-full h-[10vh] md:h-[20vh] lg:h-[50vh] overflow-hidden">
  <img
    src="/assets/sheath.svg"
    alt="Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay (text/button etc.) */}
  <div className="absolute inset-0 flex items-center justify-center">
    {/* content here */}
  </div>
</section>


       <section className="w-full py-20 bg-white">
      <div className=" mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      <div className="relative w-full flex justify-center">

  {/* Base Image */}
  <img
    src="/assets/ff7.svg"
    alt="About Main"
    className="relative w-[50%] rounded-2xl shadow-lg"
  />

  {/* Overlay Image */}
  <img
    src="/assets/ff8.svg"
    alt="About Overlay"
    className="
      absolute
      w-[45%]
      rounded-2xl
      shadow-lg

      left-[15%]
      bottom-[-24%]
    "
  />
</div>



         
          <div className="text-left">
         
            <button className="mb-4 inline-block px-5 py-2 text-sm font-semibold text-[#1D2453] border border-2 border-black rounded-full">
              ABOUT US
            </button>

            
            <h2 className="text-[32px] text-[#1D2453]  font-bold mb-4">
              Trusted Care Backed by Science &
Ethics
            </h2>

            <p className="text-[20px] text-[#0E2A46] mb-4">
              Swasth Sampada Healthcare Cure Division is the flagship
and core business arm of the Swasth Sampada Group,
dedicated to delivering high-quality pharmaceutical and
wellness-driven healthcare solutions that improve patient
outcomes every day.
            </p>

            <p className="text-[20px] text-[#0E2A46]">
              Built on strong ethical values and scientific excellence, we
focus on developing safe, effective, and accessible medical
products. By working closely with healthcare professionals,
we ensure every solution meets the highest standards of
quality, compliance, and patient trust.
            </p>
            <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT: Content */}
          <div className="text-left">
            <h2 className="text-[25px] font-bold text-[#1D2453] mb-6">
              Why Choose Our Healthcare Services
            </h2>

           <ul className="space-y-4">
  <li className="flex items-start gap-3">
    <Check className="mt-1 text-[#1D2453]" size={20} />
    <span className="text-[#1D2453] text-[18px]">
      Experienced and certified medical professionals
    </span>
  </li>

  <li className="flex items-start gap-3">
    <Check className="mt-1 text-[#1D2453]" size={20} />
    <span className="text-[#1D2453] text-[18px]">
      Advanced medical equipment and facilities
    </span>
  </li>

  <li className="flex items-start gap-3">
    <Check className="mt-1 text-[#1D2453]" size={20} />
    <span className="text-[#1D2453] text-[18px]">
      Patient-centered approach and personalized care
    </span>
  </li>

  <li className="flex items-start gap-3">
    <Check className="mt-1 text-[#1D2453]" size={20} />
    <span className="text-[#1D2453] text-[18px]">
      24/7 support and emergency services
    </span>
  </li>
</ul>
</div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/ff9.svg"
              alt="Healthcare Services"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
      <div className="bg-[#1D2453] p-5 rounded-xl flex items-center justify-between text-[#FFFFFF] mt-4">
    <div>
  <a
    href="tel:+917347437347"
    className="inline-flex items-center gap-3 bg-[#1D2453] text-white px-5 py-3 rounded-full hover:bg-[#0E2A46] transition"
  >
    <span className="bg-[#51C5D0] p-3 rounded-xl">
      <Phone size={18} />
    </span>
    <span className="font-medium">93483473434</span>
  </a>
</div>

    <div>
        <h4 className="bg-[#51C5D0] rounded-full p-3">Connect with Us</h4>
    </div>
</div>
    </section>
          </div>

        </div>
      </div>
    </section>
      <M/>
       <section className="w-full py-10">
        <h2 className="text-center text-[32px] font-semibold text-[#000000]">Our Key Focus Areas</h2>
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-[160px] h-[130px] mb-4"
              />

              {/* Text */}
              <h3 className="text-[20px] font-bold text-[#1D2453] mb-2 text-left">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
     <section className="relative w-full py-16 text-[#1D2453]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/ff5.svg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#F4FEFF]/90 to-[#FFFFFF]/90" />
     
     
      <div className="relative max-w-7xl mx-auto px-6 space-y-0">
        <div className="text-center mb-10">

         <h3 className="text-[32px] font-semibold">Simpson Healthcare</h3>
        <p className="text-[20px]">Operates as a specialized vertical under Swasth Sampada Healthcare with expertise in</p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-[50px]">
          
          <div>
            <img
              src="/assets/ff5.svg"
              alt="Healthcare"
              className="w-full rounded-xl"
            />
          </div>

         
          <div className="text-left">
            <h2 className="text-[32px] font-bold">
              Gynecology (GYN)
            </h2>
            <p className="font-medium text-[20px]">Simpson Healthcare Specialized Sub-Division</p>
            <p className="text-[25px] mb-4">
             Simpson Healthcare operates as a specialized
vertical under Swasth Sampada Healthcare,
with a dedicated focus on gynecological care.
Our gynecology portfolio is designed to
address women’s health needs across all life
stages, including reproductive health, hormonal
balance, maternal care, and preventive wellness.
            </p>
            <p className="text-[25px]">We are committed to delivering compassionate,
safe, and targeted solutions that support women’s
well-being with care, precision, and clinical reliability</p>


          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h2 className="text-[32px] font-bold">
              Child Health & Pediatrics
            </h2>
            <p className="font-medium text-[20px]">Simpson Healthcare Specialized Sub-Division</p>
            <p className="text-[25px] mb-4">
             As a focused sub-division under Swasth Sampada
Healthcare, Simpson Healthcare specializes in
pediatric healthcare solutions that promote
healthy growth, strong immunity, and key
developmental milestones.
            </p>
            <p className="text-[25px]">Our pediatric offerings are developed with a gentle,
patient-first approach, ensuring safe, effective,
and reliable support for child development, guided
by compassion, precision, and trust.</p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/assets/ff6.svg"
              alt="Patient Care"
              className="w-full rounded-xl"
            />
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
  );
}

export default Sampadahealthcare;
