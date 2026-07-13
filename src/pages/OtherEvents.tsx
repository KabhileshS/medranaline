// import { useState, useEffect } from "react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import ParticlesBackground from "@/components/ParticlesBackground";
// import "./quiz.css";

// // Import the images from your src/assets folder
// import casePresentationImg from '@/assets/other_events/CasePresentation-OtherEvents.jpg';
// import medicalDebateImg from '@/assets/other_events/MedicalDebate-OtherEvents.jpg';
// import researchPaperImg from '@/assets/other_events/ResearchPaper-OtherEvents.jpg';

// const OtherEventsPage = () => {
//   const [events, setEvents] = useState<any[]>([]);
//   const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await fetch("/otherEvents.json");
//         const data = await res.json();
//         setEvents(data.events);
//       } catch (error) {
//         console.error("Failed to load events:", error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   const EventCard = ({ event }: { event: any }) => {
//     const titleParts = event.title.split(' - ');
//     const mainTitle = titleParts[0] || event.title;
//     const subTitle = titleParts.length > 1 ? titleParts.slice(1).join(' - ') : '';

//     const getEventImage = () => {
//       const upperCaseTitle = event.title.toUpperCase();
//       if (upperCaseTitle.includes('CASE PRESENTATION')) { return casePresentationImg; }
//       if (upperCaseTitle.includes('MEDICAL DEBATE')) { return medicalDebateImg; }
//       if (upperCaseTitle.includes('RESEARCH PAPER')) { return researchPaperImg; }
//       return '/placeholder.svg';
//     };

//     return (
//       <div
//         onClick={() => setSelectedEvent(event)}
//         className="retro-event-card relative overflow-hidden h-[320px] w-[320px]
//                    bg-[#1e1e3a] transform transition duration-300 hover:scale-105 cursor-pointer"
//       >
//         <img src={getEventImage()} alt={event.title} className="absolute inset-0 w-full h-full object-cover retro-pixel-image opacity-50" />
//         <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-6 text-center">
//           <div className="w-full">
//             <h2 className="text-2xl font-bold text-white uppercase drop-shadow-lg">{mainTitle}</h2>
//             <p className="text-xl text-gray-200 drop-shadow-lg mt-1">{subTitle}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="relative min-h-screen text-slate-100">
//       <div className="relative z-[2000]"><Navigation /></div>
//       <div className="fixed inset-0 z-[-10] pointer-events-none"><ParticlesBackground /></div>

//       <main className="relative z-[100]">
//         <section className="pt-28 pb-10 text-center">
//           <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-wide text-yellow-300">
//             Presentation and Debate Hub
//           </h1>
//           <p className="text-2xl max-w-2xl mx-auto text-cyan-100" style={{ fontFamily: "VT323, monospace" }}>
//             Choose a card to reveal details and jump into registration.
//           </p>
//         </section>

//         <section className="container mx-auto px-4 pt-4 pb-16">
//           {/* --- UPDATED: A single container for all cards to ensure consistent spacing --- */}
//           <div className="flex flex-wrap justify-center gap-8">
//             {events.map((event, idx) => (
//               <EventCard key={idx} event={event} />
//             ))}
//           </div>
//         </section>
//       </main>

//       {selectedEvent && (
//         <div className="quiz-overlay" onClick={() => setSelectedEvent(null)}>
//           <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
//             <h2 className="quiz-title">{selectedEvent.title}</h2>
//             {selectedEvent.date && <p className="quiz-meta">📅 {selectedEvent.date}</p>}
//             {selectedEvent.time && <p className="quiz-meta">🕒 {selectedEvent.time}</p>}
//             {selectedEvent.venue && <p className="quiz-meta">📍 {selectedEvent.venue}</p>}
//             {selectedEvent.rules && (<div><h3>Rules</h3><ul>{selectedEvent.rules.map((item: string, i: number) => <li key={i}>{item}</li>)}</ul></div>)}
//             {selectedEvent.abstract_rules && (<div><h3>Abstract Submission Rules</h3><ul>{selectedEvent.abstract_rules.map((item: string, i: number) => <li key={i}>{item}</li>)}</ul></div>)}
//             {selectedEvent.presentation_rules && (<div><h3>Presentation Rules</h3><ul>{selectedEvent.presentation_rules.map((item: string, i: number) => <li key={i}>{item}</li>)}</ul></div>)}
//             {selectedEvent.registration_fees && (<div><h3>Registration Fees</h3><ul>{Object.entries(selectedEvent.registration_fees).map(([key, value]: [string, any]) => (<li key={key}><strong className="capitalize">{key.replace(/_/g, " ")}:</strong> {value}</li>))}</ul></div>)}
//             {selectedEvent.incharges && (<div><h3>Incharges</h3><ul>{selectedEvent.incharges.map((c: any, i: number) => <li key={i}>{c.name} - {c.phone}</li>)}</ul></div>)}
//             <div className="quiz-buttons mt-4 flex justify-end">
//               <button onClick={() => setSelectedEvent(null)} className="px-4 py-2 border rounded-md mr-3">
//                 Close
//               </button>
//               {selectedEvent.registrationLink && (
//                   <a href={selectedEvent.registrationLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-md inline-block text-center">
//                     Register Now
//                   </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default OtherEventsPage;


import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./quiz.css";

// Import the images from your src/assets folder
import casePresentationImg from '@/assets/other_events/CasePresentation-OtherEvents.jpg';
import medicalDebateImg from '@/assets/other_events/MedicalDebate-OtherEvents.jpg';
import researchPaperImg from '@/assets/other_events/ResearchPaper-OtherEvents.jpg';

// Define explicit interfaces for strict TypeScript safety
interface Incharge {
  name: string;
  phone: string;
}

interface RegistrationFees {
  [key: string]: string | number;
}

interface EventData {
  title: string;
  date?: string;
  time?: string;
  venue?: string;
  rules?: string[];
  abstract_rules?: string[];
  presentation_rules?: string[];
  registration_fees?: RegistrationFees;
  incharges?: Incharge[];
  registrationLink?: string;
}

interface EventCardProps {
  event: EventData;
}

const OtherEventsPage: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  useEffect(() => {
    const fetchEvents = async (): Promise<void> => {
      try {
        const res = await fetch("/otherEvents.json");
        const data = await res.json();
        setEvents(data.events || []);
      } catch (error) {
        console.error("Failed to load events:", error);
      }
    };
    fetchEvents();
  }, []);

  const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const titleParts = event.title.split(' - ');
    const mainTitle = titleParts[0] || event.title;
    const subTitle = titleParts.length > 1 ? titleParts.slice(1).join(' - ') : '';

    const getEventImage = (): string => {
      const upperCaseTitle = event.title.toUpperCase();
      if (upperCaseTitle.includes('CASE PRESENTATION')) { return casePresentationImg; }
      if (upperCaseTitle.includes('MEDICAL DEBATE')) { return medicalDebateImg; }
      if (upperCaseTitle.includes('RESEARCH PAPER')) { return researchPaperImg; }
      return '/placeholder.svg';
    };

    return (
      <div
        onClick={() => setSelectedEvent(event)}
        className="retro-event-card relative overflow-hidden h-[320px] w-[320px]
                   bg-[#1e1e3a] transform transition duration-300 hover:scale-105 cursor-pointer"
      >
        <img src={getEventImage()} alt={event.title} className="absolute inset-0 w-full h-full object-cover retro-pixel-image opacity-50" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-6 text-center">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-white uppercase drop-shadow-lg" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}>{mainTitle}</h2>
            <p className="text-xl text-gray-200 drop-shadow-lg mt-2" style={{ fontFamily: "'VT323', monospace" }}>{subTitle}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sonic-bg min-h-screen text-slate-100 relative">
      <div className="relative z-[2000]"><Navigation /></div>
      <div className="fixed inset-0 z-[-10] pointer-events-none"><ParticlesBackground /></div>

      <main className="relative z-[100]">
        <section className="pt-28 pb-10 text-center">
          <h1 
            className="text-3xl md:text-5xl font-bold mb-4 tracking-wide pixel-glow-text text-yellow-300"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            Presentation and Debate Hub
          </h1>
          <p className="text-2xl max-w-2xl mx-auto text-cyan-100" style={{ fontFamily: "'VT323', monospace" }}>
            Choose a card to reveal details and jump into registration.
          </p>
        </section>

        <section className="container mx-auto px-4 pt-4 pb-16">
          <div className="flex flex-wrap justify-center gap-8">
            {events.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </div>
        </section>
      </main>

      {selectedEvent && (
        <div className="quiz-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="quiz-modal select-none" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
            <h2 className="quiz-title" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '16px' }}>{selectedEvent.title}</h2>
            
            <div className="my-4 text-xl space-y-1" style={{ fontFamily: "'VT323', monospace" }}>
              {selectedEvent.date && <p className="quiz-meta text-cyan-300">📅 {selectedEvent.date}</p>}
              {selectedEvent.time && <p className="quiz-meta text-fuchsia-300">🕒 {selectedEvent.time}</p>}
              {selectedEvent.venue && <p className="quiz-meta text-emerald-300">📍 {selectedEvent.venue}</p>}
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 text-lg" style={{ fontFamily: "'VT323', monospace" }}>
              {selectedEvent.rules && (
                <div>
                  <h3 className="text-yellow-300 font-bold">Rules</h3>
                  <ul className="list-disc pl-5">{selectedEvent.rules.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
              )}
              {selectedEvent.abstract_rules && (
                <div>
                  <h3 className="text-yellow-300 font-bold">Abstract Submission Rules</h3>
                  <ul className="list-disc pl-5">{selectedEvent.abstract_rules.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
              )}
              {selectedEvent.presentation_rules && (
                <div>
                  <h3 className="text-yellow-300 font-bold">Presentation Rules</h3>
                  <ul className="list-disc pl-5">{selectedEvent.presentation_rules.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
              )}
              {selectedEvent.registration_fees && (
                <div>
                  <h3 className="text-yellow-300 font-bold">Registration Fees</h3>
                  <ul className="list-disc pl-5">
                    {Object.entries(selectedEvent.registration_fees).map(([key, value]) => (
                      <li key={key}>
                        <strong className="capitalize">{key.replace(/_/g, " ")}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedEvent.incharges && (
                <div>
                  <h3 className="text-yellow-300 font-bold">Incharges</h3>
                  <ul className="list-disc pl-5">{selectedEvent.incharges.map((c, i) => <li key={i}>{c.name} - {c.phone}</li>)}</ul>
                </div>
              )}
            </div>

            <div className="quiz-buttons mt-6 flex justify-end gap-3 text-xl" style={{ fontFamily: "'VT323', monospace" }}>
              <button onClick={() => setSelectedEvent(null)} className="px-4 py-2 border border-slate-600 rounded-md text-slate-300 hover:bg-slate-800 transition-colors">
                Close
              </button>
              {selectedEvent.registrationLink && (
                <a href={selectedEvent.registrationLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-md inline-block text-center hover:bg-blue-700 transition-colors">
                  Register Now
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default OtherEventsPage;