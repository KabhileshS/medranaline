import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const sessions = [
  {
    title: "8-Bit Emergency Protocols",
    time: "10:00 AM",
    host: "Critical Care Collective",
  },
  {
    title: "Arcade Anatomy Stories",
    time: "11:30 AM",
    host: "Clinical Learning Forum",
  },
  {
    title: "Retro MedTech Showcase",
    time: "2:00 PM",
    host: "Innovation Desk",
  },
];

const Symposium = () => {
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
            <h1 className="text-3xl md:text-4xl text-yellow-300 mb-3">Symposium Stage</h1>
            <p className="text-2xl text-cyan-100" style={{ fontFamily: "VT323, monospace" }}>
              Interactive talks with arcade storytelling energy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <article key={session.title} className="retro-event-card p-5 bg-slate-900/90">
                <h2 className="text-base text-yellow-200 mb-3">{session.title}</h2>
                <p className="text-xl text-slate-100" style={{ fontFamily: "VT323, monospace" }}>
                  {session.time}
                </p>
                <p className="text-xl text-cyan-100 mt-2" style={{ fontFamily: "VT323, monospace" }}>
                  {session.host}
                </p>
              </article>
            ))}
          </div>

          <div className="retro-panel p-6 md:p-8 mt-10 text-center">
            <p className="text-xl text-slate-100 mb-4" style={{ fontFamily: "VT323, monospace" }}>
              Symposium registration updates will be released in this zone shortly.
            </p>
            <a
              href="mailto:medrenaline.2025@gmail.com"
              className="retro-cta inline-block px-6 py-3 text-sm"
            >
              REQUEST SYMPOSIUM SLOT
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Symposium;
