import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./quiz.css";

const WorkshopPage = () => {
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/workshop-details.json");
        const data = await res.json();
        setWorkshops(data.workshops);
      } catch (error) {
        console.error("Failed to fetch workshop details:", error);
      }
    };
    fetchData();
  }, []);

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
      <main className="relative z-[100] max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <section className="pt-28 pb-10 text-center flex flex-col items-center">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 tracking-wide pixel-glow-text text-yellow-300"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            Workshop Worlds
          </h1>
          <p 
            className="text-2xl max-w-2xl mx-auto text-cyan-100" 
            style={{ fontFamily: "'VT323', monospace" }}
          >
            Enter a quest card to view details and unlock registration.
          </p>
        </section>

        {/* Workshop Cards Section */}
        <section className="container mx-auto pt-4 pb-16">
          {/* Grid for all except last 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {workshops.slice(0, workshops.length - 2).map((ws) => (
              <div
                key={ws.id}
                onClick={() => setSelectedWorkshop(ws)}
                className="relative overflow-hidden w-full max-w-[280px] h-[360px] transform transition duration-300 hover:scale-105 cursor-pointer rounded-md border-4 border-slate-700 shadow-2xl bg-[#1e1e3a]"
              >
                <div className="relative w-full h-full">
                  <img
                    src={ws.image || "/placeholder.svg"}
                    alt={ws.title}
                    className="absolute inset-0 w-full h-full object-cover retro-pixel-image opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
                    <h2 
                      className="text-yellow-300 font-bold mb-1 tracking-wide"
                      style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px', lineHeight: '1.4' }}
                    >
                      {ws.title}
                    </h2>
                    <p 
                      className="text-xl text-slate-300 line-clamp-2"
                      style={{ fontFamily: "'VT323', monospace" }}
                    >
                      {ws.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Last Two Workshops Centered */}
          <div className="mt-8 flex justify-center gap-8 flex-wrap">
            {workshops.slice(-2).map((ws) => (
              <div
                key={ws.id}
                onClick={() => setSelectedWorkshop(ws)}
                className="relative overflow-hidden w-full sm:w-[280px] h-[360px] transform transition duration-300 hover:scale-105 cursor-pointer rounded-md border-4 border-slate-700 shadow-2xl bg-[#1e1e3a]"
              >
                <div className="relative w-full h-full">
                  <img
                    src={ws.image || "/placeholder.svg"}
                    alt={ws.title}
                    className="absolute inset-0 w-full h-full object-cover retro-pixel-image opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
                    <h2 
                      className="text-yellow-300 font-bold mb-1 tracking-wide"
                      style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px', lineHeight: '1.4' }}
                    >
                      {ws.title}
                    </h2>
                    <p 
                      className="text-xl text-slate-300 line-clamp-2"
                      style={{ fontFamily: "'VT323', monospace" }}
                    >
                      {ws.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- POPUP MODAL --- */}
      {selectedWorkshop && (
        <div className="quiz-overlay z-[3000]" onClick={() => setSelectedWorkshop(null)}>
          <div
            className="quiz-modal bg-[#1e1e3a]/95 border-4 border-slate-600 rounded-lg p-8 max-h-[85vh] overflow-y-auto scrollbar-none shadow-2xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            <h2
              className="text-yellow-300 font-bold mb-2 text-center tracking-wider text-xl"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              {selectedWorkshop.title}
            </h2>
            <p 
              className="text-center text-cyan-300 text-xl border-b-4 border-slate-700 pb-4 mb-4"
              style={{ fontFamily: "'VT323', monospace" }}
            >
              {selectedWorkshop.subtitle}
            </p>

            {/* Event Metadata Blocks */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-slate-950/50 p-4 border-2 border-slate-700 rounded-md text-xl text-cyan-200"
              style={{ fontFamily: "'VT323', monospace" }}
            >
              <p className="flex items-center gap-1 justify-center sm:justify-start">👨‍🏫 Host: {selectedWorkshop.conductedBy}</p>
              <p className="flex items-center gap-1 justify-center sm:justify-start">📅 Date: {selectedWorkshop.date}</p>
              <p className="flex items-center gap-1 justify-center sm:justify-start">🕒 Time: {selectedWorkshop.time}</p>
              <p className="flex items-center gap-1 justify-center sm:justify-start">📍 Room: {selectedWorkshop.venue}</p>
            </div>

            {/* Details sections */}
            <div className="space-y-6 text-2xl text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
              {selectedWorkshop.details && selectedWorkshop.details.length > 0 && (
                <div>
                  <h3 className="text-yellow-200 font-bold tracking-wide mb-2" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px' }}>
                    QUEST DETAILS
                  </h3>
                  <div className="bg-slate-950/30 p-4 border-2 border-slate-800 rounded-md space-y-4">
                    {selectedWorkshop.details.map((section: any, i: number) => {
                      // Case 1: Direct Text string
                      if (typeof section === "string") {
                        return (
                          <ul key={i} className="list-disc list-inside space-y-1 pl-2 text-slate-200">
                            <li>{section}</li>
                          </ul>
                        );
                      }

                      // Case 2: Structured block containing heading + point list array
                      if (section.heading && Array.isArray(section.points)) {
                        return (
                          <div key={i} className="mt-2">
                            <h4 className="font-bold text-cyan-200 border-b border-slate-800 pb-1 mb-2 text-xl">{section.heading}</h4>
                            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300">
                              {section.points.map((p: string, j: number) => (
                                <li key={j}>{p}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      }

                      return <p key={i} className="text-slate-400">{JSON.stringify(section)}</p>;
                    })}
                  </div>
                </div>
              )}

              {/* Slots Info Banner */}
              {selectedWorkshop.slotsAvailable && (
                <div className="bg-cyan-950/40 border-2 border-cyan-600/50 p-3 rounded-md text-center">
                  <p className="text-xl text-cyan-300 font-bold tracking-wide">
                    🎟 Slots Remaining: {selectedWorkshop.slotsAvailable}
                  </p>
                </div>
              )}

              {/* Registration Fees Section */}
              <div>
                <h3 className="text-yellow-200 font-bold tracking-wide mb-1" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px' }}>
                  REGISTRATION ENTRY
                </h3>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-200">
                  {selectedWorkshop.fees.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Incharges Contact Details */}
              <div>
                <h3 className="text-yellow-200 font-bold tracking-wide mb-1" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px' }}>
                  INCHARGES COMMAND
                </h3>
                <ul className="list-none space-y-1 pl-2 text-slate-200">
                  {selectedWorkshop.incharges.map((c: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">📞 {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions Panel Buttons */}
            <div
              className="quiz-buttons mt-8 pt-4 border-t-4 border-slate-700 flex justify-end gap-4 text-2xl"
              style={{ fontFamily: "'VT323', monospace" }}
            >
              <button
                onClick={() => setSelectedWorkshop(null)}
                className="px-5 py-1 bg-slate-800 border-2 border-slate-600 hover:bg-slate-700 text-slate-200 rounded-md transition-all transform active:scale-95"
              >
                Close
              </button>
              <a
                href={selectedWorkshop.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-1 bg-green-600 border-2 border-green-400 hover:bg-green-700 text-white rounded-md inline-block text-center transition-all transform active:scale-95 shadow-md"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WorkshopPage;