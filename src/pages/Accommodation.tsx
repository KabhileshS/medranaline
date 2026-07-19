import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./quiz.css";

const Accommodation: React.FC = () => {
  return (
    <div className="sonic-bg min-h-screen text-slate-100 relative">
      {/* Navbar */}
      <div className="relative z-[2000]">
        <Navigation />
      </div>

      {/* Particles */}
      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Page Content */}
      <main className="relative z-[100]">
        {/* Page Heading */}
        <section className="pt-28 pb-10 text-center">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 tracking-wide pixel-glow-text text-yellow-300"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            Accommodation
          </h1>
          <p
            className="text-2xl max-w-2xl mx-auto text-cyan-100"
            style={{ fontFamily: "'VT323', monospace" }}
          >
            Review the house rules, pricing structure, and reserve your lodging slot.
          </p>
        </section>

        {/* Modal-themed Detail Container */}
        <section className="container mx-auto px-4 pb-16 max-w-3xl">
          <div className="quiz-modal select-none w-full bg-[#1e1e3a]/90 backdrop-blur-sm border-2 border-slate-700 p-6 rounded-lg shadow-2xl">
            
            {/* Fee Section Header */}
            <div className="my-4 text-xl space-y-1 text-center border-b border-slate-700/50 pb-4" style={{ fontFamily: "'VT323', monospace" }}>
              <p className="quiz-meta text-cyan-100 text-sm tracking-widest uppercase">Pricing Tier</p>
              <p className="quiz-meta text-yellow-200 text-3xl font-bold mt-1">
                ₹250 <span className="text-lg text-slate-300">/ person / day</span>
              </p>
              <p className="quiz-meta text-emerald-300 text-xl">📍 Allotment: Within Hostel Premises (Paid Basis)</p>
              <p className="quiz-meta text-fuchsia-300 text-xl">🍱 Includes: Breakfast & Dinner</p>
            </div>

            {/* Rules and details content mapped into the VT323 typography stack */}
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 text-lg" style={{ fontFamily: "'VT323', monospace" }}>
              
              {/* Rules Sub-section */}
              <div>
                <h3 className="text-yellow-300 font-bold text-xl mb-2" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}>
                  Guidelines & Rules
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-xl text-slate-200">
                  <li>Accommodation is provided only to registered delegates.</li>
                  <li>Accommodation will be provided on a first-come, first-serve basis.</li>
                  <li>Breakfast and dinner will be provided along with lodging provisions.</li>
                  <li>The host committee holds zero responsibility for theft or damage of personal belongings.</li>
                  <li>Alcohol, narcotics, and active smoking are strictly prohibited within premises.</li>
                  <li>Violation of internal rules will lead to immediate booking cancellation without notice.</li>
                  <li>Any intentional damages to property will invite heavy structural fines.</li>
                </ul>
              </div>

              {/* Contact Incharges Sub-section */}
              <div>
                <h3 className="text-yellow-300 font-bold text-xl mb-2" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}>
                  Incharges Contact
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-xl text-slate-200">
                  <li>Kathir A.K - <span className="text-cyan-300">+91 9445035545</span></li>
                  <li>Varshini - <span className="text-cyan-300">+91 9361466436</span></li>
                </ul>
              </div>

            </div>

            {/* Action Buttons styled identically to the modal layout */}
            <div className="quiz-buttons mt-6 flex justify-end gap-3 text-xl" style={{ fontFamily: "'VT323', monospace" }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdGilzwtzgXAsKpHsHgqGc091knJoME0TeMc2V5g0LmtJbGtw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-md inline-block text-center hover:bg-blue-700 hover:scale-105 transform transition duration-200 shadow-md"
              >
                Fill Accommodation Form
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accommodation;