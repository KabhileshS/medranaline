import { useEffect, useState } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

type PresentationEvent = {
  title: string;
  registrationLink?: string;
  date?: string;
  venue?: string;
  time?: string;
};

const isPresentationEvent = (title: string) => {
  const upper = title.toUpperCase();
  return upper.includes("PRESENTATION") || upper.includes("RESEARCH");
};

const PresentationPage = () => {
  const [events, setEvents] = useState<PresentationEvent[]>([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch("/otherEvents.json");
        const data = await response.json();
        const filtered = (data.events || []).filter((event: PresentationEvent) =>
          isPresentationEvent(event.title)
        );
        setEvents(filtered);
      } catch (error) {
        console.error("Could not load presentation events", error);
      }
    };

    void loadEvents();
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
        <section className="container mx-auto max-w-6xl">
          <div className="retro-panel p-6 md:p-10 mb-10">
            <h1 className="text-3xl md:text-4xl text-yellow-300 mb-3">Presentation Pit</h1>
            <p className="text-2xl text-cyan-100" style={{ fontFamily: "VT323, monospace" }}>
              Case and research stages for high-score academic runs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <article key={event.title} className="retro-event-card p-6 bg-slate-900/90">
                <h2 className="text-base text-yellow-200 mb-4">{event.title}</h2>
                <p className="text-xl text-slate-100" style={{ fontFamily: "VT323, monospace" }}>
                  {event.date || "Date TBA"}
                </p>
                <p className="text-xl text-cyan-100" style={{ fontFamily: "VT323, monospace" }}>
                  {event.time || "Time TBA"}
                </p>
                <p className="text-xl text-blue-100 mb-4" style={{ fontFamily: "VT323, monospace" }}>
                  {event.venue || "Venue TBA"}
                </p>
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-cta inline-block px-5 py-3 text-sm"
                  >
                    REGISTER PRESENTATION
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PresentationPage;
