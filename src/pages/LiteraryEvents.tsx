import { useEffect, useState } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

type LiteraryEvent = {
  title: string;
  registrationLink?: string;
  date?: string;
  venue?: string;
  time?: string;
};

const LiteraryEvents = () => {
  const [debateEvent, setDebateEvent] = useState<LiteraryEvent | null>(null);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const response = await fetch("/otherEvents.json");
        const data = await response.json();
        const match = (data.events || []).find((event: LiteraryEvent) =>
          event.title.toUpperCase().includes("DEBATE")
        );
        setDebateEvent(match || null);
      } catch (error) {
        console.error("Could not load literary event", error);
      }
    };

    void loadEvent();
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100">
      <div className="relative z-[2000]">
        <Navigation />
      </div>

      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <ParticlesBackground />
      </div>

      <main className="relative z-[100] pt-28 pb-16 px-4">
        <section className="container mx-auto max-w-5xl">
          <div className="retro-panel p-6 md:p-10 mb-8">
            <h1 className="text-3xl md:text-4xl text-yellow-300 mb-3">Literary Lane</h1>
            <p className="text-2xl text-cyan-100" style={{ fontFamily: "VT323, monospace" }}>
              Word duels, argument rounds, and high-energy storytelling tracks.
            </p>
          </div>

          <article className="retro-event-card p-6 bg-slate-900/90">
            <h2 className="text-base text-yellow-200 mb-4">
              {debateEvent?.title || "FORUM ARGUMENTI - MEDICAL DEBATE"}
            </h2>
            <p className="text-xl text-slate-100" style={{ fontFamily: "VT323, monospace" }}>
              {debateEvent?.date || "Date TBA"}
            </p>
            <p className="text-xl text-cyan-100" style={{ fontFamily: "VT323, monospace" }}>
              {debateEvent?.time || "Time TBA"}
            </p>
            <p className="text-xl text-blue-100 mb-4" style={{ fontFamily: "VT323, monospace" }}>
              {debateEvent?.venue || "Venue TBA"}
            </p>
            {debateEvent?.registrationLink ? (
              <a
                href={debateEvent.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-cta inline-block px-5 py-3 text-sm"
              >
                REGISTER LITERARY EVENT
              </a>
            ) : (
              <a href="mailto:medrenaline.2025@gmail.com" className="retro-cta inline-block px-5 py-3 text-sm">
                REQUEST DETAILS
              </a>
            )}
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LiteraryEvents;
