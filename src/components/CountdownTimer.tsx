// import { useState, useEffect } from "react";
// import { Card } from "@/components/ui/card";

// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const targetDate = new Date("2025-09-26T09:00:00+05:30"); // 26th Sept 2025, 9:00 AM IST

//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const difference = targetDate.getTime() - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setTimeLeft({ days, hours, minutes, seconds });
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     };

//     updateTimer();
//     const interval = setInterval(updateTimer, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const TimeUnit = ({ value, label }: { value: number; label: string }) => (
//     <Card className="p-6 text-center bg-gradient-accent shadow-glow border-none">
//       <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
//         {value.toString().padStart(2, '0')}
//       </div>
//       <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">
//         {label}
//       </div>
//     </Card>
//   );

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <div className="text-center mb-8">
//         <h2 className="text-2xl md:text-3xl font-bold mb-2 text-red-900">
//           Countdown to Medrenaline'26
//         </h2>
//         <p className="text-muted-foreground">
//           September 26-28, 2025 | 9:00 AM onwards
//         </p>
//       </div>
      
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <TimeUnit value={timeLeft.days} label="Days" />
//         <TimeUnit value={timeLeft.hours} label="Hours" />
//         <TimeUnit value={timeLeft.minutes} label="Minutes" />
//         <TimeUnit value={timeLeft.seconds} label="Seconds" />
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeBoxProps {
  value: number;
  label: string;
}

const CountdownTimer: React.FC = () => {
  const targetDate: number = new Date("2026-03-15T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => (
    <div className="pixel-countdown-box p-6 rounded-lg text-center min-w-[120px]">
      <div className="text-5xl md:text-6xl font-bold text-cyan-300 mb-2" style={{ fontFamily: "'Press Start 2P', cursive", letterSpacing: '4px' }}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-lg md:text-xl text-yellow-200 uppercase tracking-wider" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}>
        {label}
      </div>
    </div>
  );

  return (
    <div className="retro-panel p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-300 mb-8" style={{ fontFamily: "'Press Start 2P', cursive" }}>
        EVENT STARTS IN
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <TimeBox value={timeLeft.days} label="DAYS" />
        <TimeBox value={timeLeft.hours} label="HOURS" />
        <TimeBox value={timeLeft.minutes} label="MINUTES" />
        <TimeBox value={timeLeft.seconds} label="SECONDS" />
      </div>
    </div>
  );
};

export default CountdownTimer;