import { useNavigate } from "react-router-dom";
import {
  BookOpenText,
  Brain,
  Hotel,
  Joystick,
  Presentation,
  ScrollText,
  Sparkles,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const eventTiles = [
  { title: "Workshop Worlds", subtitle: "Retro skill quests", route: "/workshops", icon: Joystick, color: "from-fuchsia-500 to-indigo-600" },
  { title: "Quiz Arena", subtitle: "Boss battle of brains", route: "/quiz", icon: Brain, color: "from-emerald-400 to-cyan-500" },
  { title: "Symposium Stage", subtitle: "Talks + themed sessions", route: "/symposium", icon: Sparkles, color: "from-orange-400 to-red-600" },
  { title: "Presentation Pit", subtitle: "Case and research showcases", route: "/presentation", icon: Presentation, color: "from-blue-400 to-sky-600" },
  { title: "Literary Lane", subtitle: "Debate and word battles", route: "/literary-events", icon: ScrollText, color: "from-amber-400 to-yellow-600" },
  { title: "Food + Stay", subtitle: "Fuel, rest, and continue", route: "/food-accommodation", icon: Hotel, color: "from-violet-400 to-purple-700" },
];

const EventsHub = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden bg-slate-950">
      
      {/* HEADER: Cobalt blue bar with explicit top stacking context */}
      <div className="relative z-[2000] border-b-4 border-yellow-500 shadow-lg">
        <Navigation />
      </div>

      {/* FIXED VISUAL ENVIRONMENT: Pushed cleanly behind active buttons */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none">
        {/* Sky Stars & Clouds from your global index definitions */}
        <div className="retro-sky-stars absolute inset-0 opacity-40" />
        <div className="retro-cloud retro-cloud-one absolute left-10 opacity-30" />
        <div className="retro-cloud retro-cloud-two absolute right-20 opacity-20" />
        
        {/* Continuous Level-End Landscape Grid pinned to the bottom screen canvas */}
        <div className="absolute bottom-0 left-0 w-full h-[24vh] flex flex-col justify-end">
          {/* Animated Water Row */}
          <div className="retro-water w-full h-8" />
          {/* Checkerboard soil line */}
          <div className="sonic-checkerboard-floor w-full h-32" />
        </div>
      </div>

      {/* CORE CONTENT CANVAS LAYER */}
      <main className="relative z-10 pt-28 pb-48 px-4 max-w-6xl mx-auto">
        
        {/* Header Board Panel against semi-transparent "dark space" container */}
        <section className="bg-slate-950/85 border-4 border-slate-800 p-6 md:p-8 shadow-[0_8px_0_#020617]">
          <p className="text-sm text-cyan-300 font-bold mb-2 tracking-[0.2em] font-mono">SELECT YOUR LEVEL</p>
          <h1 className="sonic-text-bevel text-3xl md:text-5xl font-black leading-tight mb-4 tracking-wide font-sans">
            MEDRALINE EVENT ARCADE
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-normal font-mono" style={{ fontFamily: "VT323, monospace" }}>
            Pick a zone and register. Every tile is a different playable route.
          </p>
        </section>

        {/* HIGH-ENERGY CALL TO ACTION ELEMENT */}
        <div className="flex justify-center my-10">
          <button className="px-8 py-3 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-full border-4 border-yellow-300 text-white font-bold tracking-widest shadow-sonic-neon hover:scale-105 active:translate-y-1 transition-all duration-75 uppercase">
            GET THE RUSH
          </button>
        </div>

        {/* INTERACTIVE LEVEL ROUTES GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTiles.map((tile) => (
            <button
              key={tile.title}
              type="button"
              onClick={() => navigate(tile.route)}
              className="retro-event-card text-left p-0 overflow-hidden group hover:-translate-y-2 transition-transform duration-100 cursor-pointer"
            >
              {/* Card Banner */}
              <div className={`h-28 bg-gradient-to-r ${tile.color} px-5 py-4 flex items-center justify-between border-b-4 border-slate-950`}>
                <tile.icon className="h-12 w-12 text-white drop-shadow-md animate-pulse" />
                <div className="sonic-loop-accent" />
              </div>
              
              {/* Card Body - Opaque Solid Background color ensures graphics don't run through text */}
              <div className="px-5 py-5 bg-slate-900 border-t border-slate-800">
                <h2 className="text-lg text-yellow-300 font-bold mb-1 tracking-wide">{tile.title}</h2>
                <p className="text-lg text-slate-300 font-mono" style={{ fontFamily: "VT323, monospace" }}>
                  {tile.subtitle}
                </p>
              </div>
            </button>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsHub;