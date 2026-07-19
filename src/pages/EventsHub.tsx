import { useNavigate } from "react-router-dom";
import { Stethoscope, Brain, Users, ScrollText, Sparkles, Hotel } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "../components/ui/card";

// const eventTiles = [
//   { title: "Workshop Worlds", subtitle: "Retro skill quests", route: "/workshops", icon: Joystick, color: "from-fuchsia-600 to-indigo-800" },
//   { title: "Quiz Arena", subtitle: "Boss battle of brains", route: "/quiz", icon: Brain, color: "from-emerald-500 to-cyan-600" },
//   { title: "Symposium Stage", subtitle: "Talks + themed sessions", route: "/other-events", icon: Sparkles, color: "from-orange-500 to-red-700" },
//   { title: "Presentation Pit", subtitle: "Case and research showcases", route: "/other-events", icon: Presentation, color: "from-blue-500 to-sky-700" },
//   { title: "Literary Lane", subtitle: "Debate and word battles", route: "/other-events", icon: ScrollText, color: "from-amber-500 to-yellow-600" },
//   { title: "Food + Stay", subtitle: "Fuel, rest, and continue", route: "/accommodation", icon: Hotel, color: "from-violet-500 to-purple-800" },
// ];

const EventsHub = () => {
  const navigate = useNavigate();

    const highlights = [
      {
        icon: Stethoscope,
        title: "Workshops",
        subtitle: "Hands-on quests and skill power-ups.",
        path: "/workshops",
        color: "text-cyan-300",
      },
      {
        icon: Brain,
        title: "Quiz",
        subtitle: "Compete for the top leaderboard score.",
        path: "/quiz",
        color: "text-fuchsia-300",
      },
      {
        icon: Users,
        title: "Presentation",
        subtitle: "Case and research showcase arena.",
        path: "/other-events",
        color: "text-emerald-300",
      },
      {
        icon: Sparkles,
        title: "Symposium",
        subtitle: "Story-driven talks and themed sessions.",
        path: "/other-events",
        color: "text-yellow-300",
      },
      {
        icon: ScrollText,
        title: "Literary Events",
        subtitle: "Debate rounds and verbal battles.",
        path: "/other-events",
        color: "text-orange-300",
      },
      {
        icon: Hotel,
        title: "Food + Accommodation",
        subtitle: "Fuel, stay and continue the run.",
        path: "/accommodation",
        color: "text-violet-300",
      },
    ];

  return (
    <div className="sonic-bg min-h-screen text-slate-100 overflow-x-hidden relative">
      
      {/* HEADER */}
      <div className="relative z-[2000]">
        <Navigation />
      </div>

      {/* FIXED VISUAL ENVIRONMENT BACKGROUND SCENERY */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none">
        <div className="retro-sky-stars absolute inset-0 opacity-40" />
        <div className="retro-cloud retro-cloud-one absolute left-10 opacity-30" />
        <div className="retro-cloud retro-cloud-two absolute right-20 opacity-20" />
        
        {/* Pinned Landscape Track Elements */}
        <div className="absolute bottom-0 left-0 w-full h-[24vh] flex flex-col justify-end">
          <div className="retro-water w-full h-8" />
          <div className="sonic-checkerboard-floor w-full h-32" />
        </div>
      </div>

      {/* CORE CONTENT CANVAS LAYER */}
      <main className="relative z-10 pt-28 pb-48 px-6 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Main Board Panel */}
        <section className="bg-[#1e1e3a]/90 backdrop-blur-sm border-4 border-slate-700 p-6 md:p-8 shadow-2xl rounded-lg w-full text-center flex flex-col items-center">
          <p 
            className="text-cyan-300 font-bold mb-4 tracking-[0.2em]" 
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}
          >
            SELECT YOUR LEVEL
          </p>
          <h1 
            className="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-wide text-yellow-300 pixel-glow-text"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            MEDRALINE EVENT ARCADE
          </h1>
          <p 
            className="text-2xl text-slate-200 max-w-2xl mx-auto" 
            style={{ fontFamily: "'VT323', monospace" }}
          >
            Pick a zone and register. Every tile acts as a different playable route.
          </p>
        </section>

        {/* HIGH-ENERGY ARCADIC CALL TO ACTION */}
        <div className="flex justify-center my-10">
          <button 
            onClick={() => navigate("/quiz")}
            className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold border-4 border-yellow-400 text-xl shadow-2xl transform active:scale-95 transition-transform"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}
          >
            GET THE RUSH
          </button>
        </div>

      {/* Highlights */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            Event Zones
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <Card
                key={index}
                onClick={() => navigate(item.path)}
                className="retro-event-card p-6 text-slate-50 cursor-pointer text-center"
              >
                <item.icon
                  className={`h-12 w-12 ${item.color} mb-4 mx-auto`}
                />
                <h3 className="text-lg font-semibold mb-3 text-yellow-200" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '12px' }}>{item.title}</h3>
                <p className="text-xl md:text-2xl text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>{item.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
     </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsHub;