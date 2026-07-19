import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./quiz.css";

// ✅ Reusable Swipeable, Auto-Scrolling & Infinite Gallery Component
const ScrollingGallery = ({
  images,
  square = false,
}: {
  images: string[];
  square?: boolean;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  // Triple the array to create the "infinite circle" illusion
  // Layout: [Set 1 (Left Buffer)] -- [Set 2 (Start Here)] -- [Set 3 (Right Buffer)]
  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Calculate exact width to know when to reset the loop
    // 24px accounts for the gap-6 (1.5rem = 24px)
    const itemWidth = square ? 250 + 24 : 320 + 24; 
    const singleSetWidth = images.length * itemWidth;

    // 1. Set the initial scroll position exactly to the start of the middle set
    container.scrollLeft = singleSetWidth;

    // 2. Infinite Loop Logic (Silently resets scroll position without user noticing)
    const handleScroll = () => {
      if (!container) return;
      
      // If user/auto-scroll reaches the very beginning, jump forward to the middle set
      if (container.scrollLeft <= 0) {
        container.scrollLeft += singleSetWidth;
      }
      // If user/auto-scroll reaches the very end, jump backward to the middle set
      else if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft -= singleSetWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);

    // 3. Auto-Swipe Logic
    const interval = setInterval(() => {
      if (!isInteracting) {
        // Automatically swipe to the next image smoothly
        container.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }, 3000); // Swipes every 3 seconds

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [images.length, square, isInteracting]);

  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      {/* 
        - scrollbar-none & inline styles completely hide the scrollbar across all browsers
        - snap-x snap-mandatory ensures it snaps neatly to the center of every image
      */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsInteracting(true)} // Pauses auto-scroll on mouse hover
        onMouseLeave={() => setIsInteracting(false)} // Resumes auto-scroll
        onTouchStart={() => setIsInteracting(true)} // Pauses auto-scroll on touch/swipe
        onTouchEnd={() => setIsInteracting(false)} // Resumes auto-scroll
        className="flex gap-6 overflow-x-auto pb-4 pt-2 px-4 max-w-full snap-x snap-mandatory scrollbar-none"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        {extendedImages.map((img, i) => (
          <div
            key={i}
            className={`flex-shrink-0 snap-center ${
              square ? "w-[250px] h-[250px]" : "w-[320px] aspect-video"
            } rounded-md overflow-hidden shadow-2xl bg-[#1e1e3a] border-4 border-slate-700 transform transition duration-300 hover:scale-105`}
          >
            <img
              src={img}
              alt={`gallery-img-${i}`}
              className="w-full h-full object-cover object-center retro-pixel-image opacity-80 hover:opacity-100 transition-opacity"
              draggable="false" // Stops default browser image dragging from interfering with swiping
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PrevEditions = () => {
  return (
    <div className="sonic-bg min-h-screen text-slate-100 relative">
      <div className="relative z-[2000]">
        <Navigation />
      </div>

      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <ParticlesBackground />
      </div>

      <main className="relative z-[100] max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col items-center">
        
        <section className="text-center mb-16 w-full flex flex-col items-center">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 tracking-wide pixel-glow-text text-yellow-300"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            Previous Editions
          </h1>
          <p
            className="text-2xl max-w-2xl mx-auto text-cyan-100"
            style={{ fontFamily: "'VT323', monospace" }}
          >
            Scroll down the memory lane to explore past medical innovation checkpoints.
          </p>
        </section>

        <section className="mb-20 quiz-modal bg-[#1e1e3a]/90 backdrop-blur-sm border-2 border-slate-700 p-8 rounded-lg shadow-2xl w-full max-w-4xl flex flex-col items-center">
          <h2 
            className="text-yellow-200 font-bold mb-4 text-center tracking-wider"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '16px' }}
          >
            Medrenaline 2024
          </h2>
          <p 
            className="text-center text-slate-200 text-2xl mb-8 max-w-3xl"
            style={{ fontFamily: "'VT323', monospace" }}
          >
            Medrenaline 2024 achieved legendary status, complete with high-yield clinical workshops, competitive presentation events, and memorable keynote assemblies.
          </p>
          <ScrollingGallery
            images={[
              "/Prev_Editions/24/DSC01604.jpeg",
              "/Prev_Editions/24/DSC01636.jpeg",
              "/Prev_Editions/24/DSC01751.jpeg",
              "/Prev_Editions/24/DSC01760.jpeg",
              "/Prev_Editions/24/DSC01790.jpeg",
              "/Prev_Editions/24/DSC01834.jpeg",
              "/Prev_Editions/24/DSC01876.jpeg",
              "/Prev_Editions/24/DSC02116.jpeg",
              "/Prev_Editions/24/DSC02126.jpeg",
            ]}
          />
        </section>

        <section className="mb-20 quiz-modal bg-[#1e1e3a]/90 backdrop-blur-sm border-2 border-slate-700 p-8 rounded-lg shadow-2xl w-full max-w-4xl flex flex-col items-center">
          <h2 
            className="text-yellow-200 font-bold mb-4 text-center tracking-wider"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '16px' }}
          >
            Medrenaline 2023
          </h2>
          <p 
            className="text-center text-slate-200 text-2xl mb-8 max-w-3xl"
            style={{ fontFamily: "'VT323', monospace" }}
          >
            Medrenaline 2023 unified exceptional minds across departments with interactive simulator sessions and massive public health exhibitions.
          </p>
          <ScrollingGallery
            images={[
              "/Prev_Editions/23/DSC07701.jpeg",
              "/Prev_Editions/23/DSC07721.jpeg",
              "/Prev_Editions/23/DSC07804.jpeg",
              "/Prev_Editions/23/DSC07816.jpeg",
              "/Prev_Editions/23/DSC07844.jpeg",
              "/Prev_Editions/23/DSC07856.jpeg",
              "/Prev_Editions/23/DSC08051.jpeg",
              "/Prev_Editions/23/DSC08098.jpeg",
              "/Prev_Editions/23/IMG_1838.jpeg",
              "/Prev_Editions/23/IMG_1849.jpeg",
            ]}
          />
        </section>

        <section className="mb-20 quiz-modal bg-[#1e1e3a]/90 backdrop-blur-sm border-2 border-slate-700 p-8 rounded-lg shadow-2xl w-full max-w-4xl flex flex-col items-center">
          <h2 
            className="text-yellow-200 font-bold mb-4 text-center tracking-wider"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '16px' }}
          >
            Medrenaline 2022
          </h2>
          <p 
            className="text-center text-slate-200 text-2xl mb-8 max-w-3xl"
            style={{ fontFamily: "'VT323', monospace" }}
          >
            The 2022 edition marked our celebratory post-hiatus return, configuring highly impactful hands-on diagnostics courses and foundational quiz structures.
          </p>
          <ScrollingGallery
            images={[
              "/Prev_Editions/22/IMG_2041.png",
              "/Prev_Editions/22/IMG_2042.png",
              "/Prev_Editions/22/IMG_2043.png",
              "/Prev_Editions/22/IMG_2044.png",
              "/Prev_Editions/22/IMG_2045.png",
            ]}
            square
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrevEditions;