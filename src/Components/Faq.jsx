import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const faqs = [
  {
    question: "What is Sampada Group??",
    answer: "Sampada Group is a diversified organization operating across healthcare, sustainable agriculture, cottage enterprises, and renewable energy solutions."
  },
  {
    question: "What is the core business of Sampada Group?",
    answer: "Yes, all our premium curtains and blinds come with a 2-year warranty covering manufacturing defects and installation quality."
  },
  {
    question: "What is Simpson Healthcare?",
    answer: "In many cases, yes. We offer motorization kits that can be integrated with your current setups, depending on the rail type."
  },
  {
    question: "How does Sampada Group support sustainability??",
    answer: "We currently provide free on-site measurements and consultations across the entire metropolitan area and surrounding suburbs."
  }
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1D2453] uppercase text-left tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full"></div>
        </div>
      
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm
                ${activeIndex === index ? 'shadow-md' : ''}`}
              style={{ borderLeft: '6px solid #1D2453' }} 
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[#1D2453]">
                  {faq.question}
                </span>
                <AiOutlineDown 
                  className={`text-[#1D2453] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;