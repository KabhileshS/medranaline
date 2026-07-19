import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./quiz.css";

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/quiz-details.json");
        const data = await res.json();
        setQuizzes(data.quizzes);
      } catch (error) {
        console.error("Failed to fetch quiz details:", error);
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
            Quiz Arena
          </h1>
          <p 
            className="text-2xl max-w-2xl mx-auto text-cyan-100" 
            style={{ fontFamily: "'VT323', monospace" }}
          >
            Enter your squad and challenge the boss rounds.
          </p>
        </section>

        {/* Quiz Cards Section */}
        <section className="container mx-auto pt-4 pb-16 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                onClick={() => setSelectedQuiz(quiz)}
                className="relative overflow-hidden w-80 h-[380px] transform transition duration-300 hover:scale-105 cursor-pointer rounded-md border-4 border-slate-700 shadow-2xl bg-[#1e1e3a]"
              >
                <div className="relative w-full h-full">
                  {/* Background Image with retro pixel shader look */}
                  <img
                    src={quiz.image || "/placeholder.svg"}
                    alt={quiz.title}
                    className="absolute inset-0 w-full h-full object-cover retro-pixel-image opacity-70"
                  />
                  {/* Darkened overlay shield for high contrast retro readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                    <h2 
                      className="text-2xl font-bold text-yellow-300 text-center drop-shadow-md whitespace-pre-line tracking-wide"
                      style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px', lineHeight: '1.5' }}
                    >
                      {quiz.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- POPUP MODAL --- */}
      {selectedQuiz && (
        <div className="quiz-overlay z-[3000]" onClick={() => setSelectedQuiz(null)}>
          <div
            className="quiz-modal bg-[#1e1e3a]/95 border-4 border-slate-600 rounded-lg p-8 max-h-[85vh] overflow-y-auto scrollbar-none shadow-2xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            <h2 
              className="text-yellow-300 font-bold mb-6 text-center tracking-wider text-xl border-b-4 border-slate-700 pb-4"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              {selectedQuiz.title}
            </h2>

            {/* Event Metadata Blocks */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 bg-slate-950/50 p-4 border-2 border-slate-700 rounded-md text-xl text-cyan-200"
              style={{ fontFamily: "'VT323', monospace" }}
            >
              <p className="flex items-center gap-1 justify-center sm:justify-start">📅 {selectedQuiz.date}</p>
              <p className="flex items-center gap-1 justify-center sm:justify-start">🕒 {selectedQuiz.time}</p>
              <p className="flex items-center gap-1 justify-center sm:justify-start">📍 {selectedQuiz.venue}</p>
            </div>

            {/* Modal Body Info Sections */}
            <div className="space-y-6 text-2xl text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
              <div>
                <h3 className="text-yellow-200 font-bold tracking-wide mb-1" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px' }}>
                  RULES
                </h3>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-200">
                  {selectedQuiz.rules.map((r: string, i: number) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-yellow-200 font-bold tracking-wide mb-1" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px' }}>
                  TOPICS
                </h3>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-200">
                  {selectedQuiz.topics.map((t: string, i: number) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-yellow-200 font-bold tracking-wide mb-1" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px' }}>
                  STRUCTURE
                </h3>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-200">
                  {selectedQuiz.structure.map((s: string, i: number) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-yellow-200 font-bold tracking-wide mb-1" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px' }}>
                  REGISTRATION FEES
                </h3>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-200">
                  {selectedQuiz.fees.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-950/40 border-2 border-yellow-600/50 p-3 rounded-md text-center">
                <p className="text-2xl text-yellow-300 font-bold tracking-wide">
                  🏆 {selectedQuiz.prizes}
                </p>
              </div>

              <div>
                <h3 className="text-yellow-200 font-bold tracking-wide mb-1" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '11px' }}>
                  INCHARGES
                </h3>
                <ul className="list-none space-y-1 pl-2 text-slate-200">
                  {selectedQuiz.incharges.map((c: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">📞 {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions Panel */}
            <div 
              className="quiz-buttons mt-8 pt-4 border-t-4 border-slate-700 flex justify-end gap-4 text-2xl"
              style={{ fontFamily: "'VT323', monospace" }}
            >
              <button
                onClick={() => setSelectedQuiz(null)}
                className="px-5 py-1 bg-slate-800 border-2 border-slate-600 hover:bg-slate-700 text-slate-200 rounded-md transition-all transform active:scale-95"
              >
                Close
              </button>
              <a
                href={selectedQuiz.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-1 bg-blue-600 border-2 border-blue-400 hover:bg-blue-700 text-white rounded-md inline-block text-center transition-all transform active:scale-95 shadow-md"
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

export default QuizPage;