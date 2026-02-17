import React from 'react'
import M from '../Components/M'
import { Check } from 'lucide-react'
import Testimonials from '../Components/Testimonials'
import BlogSection from '../Components/Blogpost'
import FAQSection from '../Components/Faq'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

function Simpsonhealthcare() {
  return (
    <div>
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


<M/>
<section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/assets/simh1.svg"
              alt="About"
              className="w-full rounded-xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <button className='border border 1 border-[#51C5D0] text-[#51C5D0] rounded-full p-2 px-4 hover:bg-[#51C5D0] hover:text-[#FFFFFF]'>QUALITY CARE</button>
        

            <h2 className="text-[32px] font-bold text-[#1D2453] mb-2">
              Focused Healthcare for Women & Children
            </h2>
            <div className='flex justify-between mb-2'>
                <button className='bg-[#51C5D0] border-none rounded-full p-2 px-4 text-[#FFFFFF]'>Our Objective</button>
                <button className='bg-[#51C5D0] border-none rounded-full p-2 px-4 text-[#FFFFFF]'>Our Goal</button>
                <button className='bg-[#51C5D0] border-none rounded-full p-2 px-4 text-[#FFFFFF]'>Our Heritage</button>

            </div>

            <p className="text-[#0E2A46] text-[20px] mb-6">
              Simpson Healthcare is a specialized healthcare vertical
operating under the umbrella of Swasth Sampada
Healthcare, the core business division of Swasth Sampada
Group
            </p>
            <p className="text-[#0E2A46] text-[20px]">
                Established with a mission to address the unique healthcare
needs of women and children, Simpson Healthcare brings
together scientific expertise, ethical pharmaceutical
practices, and compassionate care. Our division is
committed to supporting healthcare professionals with
high-quality, targeted medical solutions that enhance
maternal wellbeing and child development
            </p>

            <section className="w-full py-5 bg-white">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/assets/simh3.svg"
              alt="Feature"
              className="w-full rounded-xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-[25px] font-semibold text-[#1D2453] mb-3">
              Key Focus Areas
            </h2>

            <ul className="space-y-1 text-[#1D2453] text-[18px]">
              <li className="flex items-start gap-4">
  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#51C5D0]">
    <Check size={16} className="text-white" />
  </span>
  <span className="text-gray-700">
    Maternal & women’s healthcare solutions
  </span>
</li>


             <li className="flex items-start gap-4">
  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#51C5D0]">
    <Check size={16} className="text-white" />
  </span>
  <span className="text-gray-700">
    Pediatric health and nutrition support
  </span>
</li>


              <li className="flex items-start gap-4">
  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#51C5D0]">
    <Check size={16} className="text-white" />
  </span>
  <span className="text-gray-700">
    Evidence-based pharmaceutical formulations
  </span>
</li>

<li className="flex items-start gap-4">
  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#51C5D0]">
    <Check size={16} className="text-white" />
  </span>
  <span className="text-gray-700">
    Ethical, patient-first medical practices
  </span>
</li>

            </ul>
          </div>

        </div>
      </div>
    </section>
            
          </div>

        </div>
      </div>
    </section>
     <section className="w-full py-16 bg-[#1D2453] text-[#FFFFFF]">
      <div className=" mx-auto">

        {/* Top Heading */}
        <h2 className="text-[32px] font-bold text-center">
          Before Care, After Confidence
        </h2>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="px-6 py-2 bg-[#51C5D0] text-white rounded-full font-medium hover:opacity-90 transition">
            Our Mission
          </button>
          <button className="px-6 py-2 border border-[#51C5D0] text-[#51C5D0] rounded-full font-medium hover:bg-[#51C5D0] hover:text-white transition">
            Our Vision
          </button>
        </div>

        {/* Horizontal Line */}
        <div className="flex justify-center mt-8">
          <span className="w-full h-[1px] bg-[#FFFFFF] rounded-full"></span>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-14">

    {/* Left Image */}
    <div>
      <img
        src="/assets/simh4.svg"
        alt="Approach"
        className="w-full rounded-xl object-cover"
      />
    </div>

    {/* Right Content */}
    <div>
      <h3 className="text-[32px] font-semibold mb-4">
        Our Areas of Expertise
      </h3>
      <h5 className='text-[25px]'>Child Health & Pediatrics</h5>
      <p className="text-[18px] mb-6">
        Our pediatric portfolio is designed to support safe growth,
immunity, and developmental milestones, ensuring that every
child receives the best start in life.
      </p>

      <h3 className="text-[32px] font-semibold ">
        Gynecology (GYN)
      </h3>
      <p className="text-[18px]">
        We focus on providing reliable and patient-centric solutions for
women’s health across all life stages, including reproductive care,
hormonal health, and preventive wellness
      </p>
    </div>

  </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-[50px]">
          
          <div>
            <img
              src="/assets/simh5.svg"
              alt="Healthcare"
              className="w-full rounded-xl"
            />
          </div>

         
          <div className="text-left">
            <h2 className="text-[32px] font-bold">
             Our Commitment
            </h2>
            <p className="text-[25px] mb-4">
            At Simpson Healthcare, we believe that women
and children deserve specialized attention and
tailored solutions. Every product and initiative is
guided by compassion, responsibility, and a
deep understanding of healthcare challenges
faced by families today.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h2 className="text-[32px] font-bold">
              Our Parent Division
            </h2>
            <p className="text-[25px] mb-4">
             Simpson Healthcare is a proud sub-division of
Swasth Sampada Healthcare, the flagship
healthcare arm of Swasth Sampada Group
committed to delivering ethical pharmaceutical
solutions and wellness-driven outcomes across
India.
            </p>
            <p className="text-[25px]">Together, we strive to strengthen the healthcare
ecosystem with integrity, innovation, and care.</p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/assets/simh6.svg"
              alt="Patient Care"
              className="w-full rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
    <section className="w-full bg-[#1D2453] py-9  text-[#FFFFFF]">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      
      {/* Left Content */}
      <div className="md:w-2/3">
        <h2 className="text-3xl md:text-4xl  font-bold mb-4">
          Nurturing Health from the Very Beginning
        </h2>
        <p className="text-lg leading-relaxed">
          Simpson Healthcare is dedicated to advancing women and child care—where every solution delivered today builds a healthier tomorrow.
        </p>
      </div>

      {/* Right Button */}
      <div className="md:w-1/3 flex md:justify-end">
        <button className="rounded-full bg-[#51C5D0] text-white px-8 py-4 text-lg font-medium transition">
          Connect with Us
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


    </div>
  )
}

export default Simpsonhealthcare
