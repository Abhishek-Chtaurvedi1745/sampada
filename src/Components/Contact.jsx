import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    
    e.preventDefault(); 
    
    setLoading(true);
    console.log("Form submission started...");

    const dataToSend = { name, mobile, email, message };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8800/contact",
        dataToSend
      );

      console.log("Server Response:", response.data);
      alert("Success: " + response.data.message);

      // Clear form
      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Submission Error:", error);
      // Check if it's a network error or a server error
      const errorMsg = error.response?.data?.message || "Cannot connect to server!";
      alert(errorMsg);
    } finally {
      setLoading(false); // Re-enable button
    }
  };

  return (
    <div>
      <section className="py-20 bg-[#51C5D0] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
      
            <div className="lg:w-1/2">
              <h2 className="text-[32px] font-semibold tracking-tight">
               Join Our Journey:
              </h2>
              <p className="text-[22px] text-[#FFFFFF] mb-10">
                We’re always looking for bright minds and purpose
driven collaborators. Explore career opportunities
and grow with a company committed to real impact.
              </p>
              <h2 className="text-[32px] font-semibold tracking-tight">Connect With Us:</h2>
              <p className="text-[22px] text-[#FFFFFF] mb-10">Reach out to learn more about our services,
partnerships, and initiatives.</p>
<div class="flex flex-col sm:flex-row gap-4">
  <button class="px-8 py-1 bg-[#FFFFFF] text-[#51C5D0] rounded-xl">
    Explore Our World »
  </button>

  <button class="px-8 py-1 bg-[#51c5D0] text-white rounded-xl shadow-xl">
    Book An Appointment
  </button>
</div>

<div>

</div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-center text-[#1D2453] mb-6">
                  Enquire Now
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter Your Name*"
                    value={name}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-800 focus:outline-[#51C5D0]"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="tel" // 4. Use type="tel" for better mobile support
                    placeholder="Enter Your Mobile No*"
                    value={mobile}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-800 focus:outline-[#51C5D0]"
                    onChange={(e) => setMobile(e.target.value)}
                  />

                  <input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-800 focus:outline-[#51C5D0]"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <textarea
                    placeholder="Message*"
                    rows="4"
                    value={message}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-800 focus:outline-[#51C5D0]"
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <button
                    type="submit"
                    disabled={loading} // 5. Disable while sending
                    className={`w-full font-bold py-4 rounded-xl uppercase tracking-widest transition-all ${
                      loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#51C5D0] hover:bg-[#3eaab5] text-white"
                    }`}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;