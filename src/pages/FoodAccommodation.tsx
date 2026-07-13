import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const foodPoints = [
  "Retro snack kiosks and hydration counters near event zones.",
  "Meal slots aligned with session timings for uninterrupted participation.",
  "Vegetarian and standard meal options available.",
];

const stayPoints = [
  "Accommodation is available for registered delegates.",
  "Allotment is first come first served inside hostel premises.",
  "Rules and full form are available in the accommodation portal.",
];

const FoodAccommodation = () => {
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
            <h1 className="text-3xl md:text-4xl text-yellow-300 mb-3">Food and Accommodation</h1>
            <p className="text-2xl text-cyan-100" style={{ fontFamily: "VT323, monospace" }}>
              Refuel, recharge, and return to the event arcade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="retro-event-card p-6 bg-slate-900/90">
              <h2 className="text-base text-yellow-200 mb-4">Food Zone</h2>
              <ul className="space-y-2 text-xl" style={{ fontFamily: "VT323, monospace" }}>
                {foodPoints.map((point) => (
                  <li key={point} className="text-slate-100">• {point}</li>
                ))}
              </ul>
            </article>

            <article className="retro-event-card p-6 bg-slate-900/90">
              <h2 className="text-base text-yellow-200 mb-4">Stay Zone</h2>
              <ul className="space-y-2 text-xl" style={{ fontFamily: "VT323, monospace" }}>
                {stayPoints.map((point) => (
                  <li key={point} className="text-slate-100">• {point}</li>
                ))}
              </ul>
              <a href="/accommodation" className="retro-cta inline-block px-5 py-3 text-sm mt-6">
                OPEN ACCOMMODATION FORM
              </a>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FoodAccommodation;
