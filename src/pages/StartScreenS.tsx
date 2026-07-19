import { useEffect, useState, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const StartScreenS: React.FC = () => {
  const navigate = useNavigate();
  const [showPress, setShowPress] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPress((prev) => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleStart = (): void => {
    navigate("/home");
  };

  return (
    <div className="sonic-bg min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated clouds */}
      <div 
        className="absolute top-10 left-10 w-32 h-16 bg-white/80 rounded-full blur-sm animate-pulse" 
        style={{ clipPath: 'polygon(0% 50%, 20% 20%, 40% 50%, 60% 20%, 80% 50%, 100% 50%, 100% 100%, 0% 100%)' } as CSSProperties} 
      />
      <div 
        className="absolute top-20 right-20 w-40 h-20 bg-white/70 rounded-full blur-sm animate-pulse" 
        style={{ clipPath: 'polygon(0% 50%, 20% 20%, 40% 50%, 60% 20%, 80% 50%, 100% 50%, 100% 100%, 0% 100%)', animationDelay: '0.5s' } as CSSProperties} 
      />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Gold winged emblem */}
        <div className="gold-bezel inline-block px-12 py-8 mb-8 rounded-lg">
          <div className="flex items-center justify-center gap-4">
            {/* Left wing */}
            <div 
              className="w-20 h-20 bg-gradient-to-br from-white to-gray-300 transform -skew-x-12 rounded-lg" 
              style={{ clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)' } as CSSProperties} 
            />
            
            {/* Center emblem */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center border-8 border-yellow-300 shadow-2xl">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center border-4 border-white">
                  <span className="text-4xl font-bold text-white pixel-glow-text" style={{ fontFamily: "'Press Start 2P', cursive" }}>M</span>
                </div>
              </div>
              {/* Stars around emblem */}
              <div className="absolute -top-2 -left-2 text-yellow-300 text-2xl">★</div>
              <div className="absolute -top-2 -right-2 text-yellow-300 text-2xl">★</div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-yellow-300 text-2xl">★</div>
            </div>
            
            {/* Right wing */}
            <div 
              className="w-20 h-20 bg-gradient-to-br from-white to-gray-300 transform skew-x-12 rounded-lg" 
              style={{ clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)' } as CSSProperties} 
            />
          </div>
        </div>

        {/* Title with ribbon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent h-20 transform -skew-y-2 opacity-80" />
          <h1 className="relative text-6xl md:text-7xl font-bold pixel-glow-text text-yellow-300 mb-2" style={{ fontFamily: "'Press Start 2P', cursive", textShadow: '4px 4px 0 #0066cc, -2px -2px 0 #fff' }}>
            MEDRENALINE
          </h1>
          <div className="relative text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Press Start 2P', cursive", textShadow: '3px 3px 0 #8B6914' }}>2026</div>
        </div>

        {/* Subtitle box */}
        <div className="retro-panel max-w-2xl mx-auto px-8 py-6 mb-8">
          <p className="text-2xl md:text-3xl text-white leading-relaxed" style={{ fontFamily: "'VT323', monospace" }}>
            HOPE YOU GOT ENOUGH ADRENALINE
            FOR <span className="text-yellow-300 font-bold">FOUR DAYS</span> OF
            <br />
            INNOVATION, EXCELLENCE, AND
            <br />
            CELEBRATION AT <span className="text-yellow-300 font-bold">GOVT. KILPAUK</span>
            <br />
            <span className="text-yellow-300 font-bold">MEDICAL COLLEGE.</span>
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleStart}
          className="retro-cta mb-8"
        >
          START
        </Button>

        {/* Press Start blinking text */}
        {showPress && (
          <p className="text-2xl text-cyan-300 animate-pulse" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            GET THE RUSH
          </p>
        )}
      </div>

      {/* Checkerboard ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 checkerboard border-t-4 border-yellow-400" />
      
      {/* Pixel sprite character */}
      <div className="absolute bottom-32 left-10 sprite-bounce">
        <div className="w-16 h-16 bg-blue-600 rounded-lg border-4 border-white shadow-xl" />
      </div>
      
      {/* Rings */}
      <div className="absolute bottom-40 right-20 float-ring">
        <div className="w-12 h-12 border-8 border-yellow-400 rounded-full" />
      </div>
    </div>
  );
};

export default StartScreenS;