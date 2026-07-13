import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, Clock, Users, MapPin, Award } from "lucide-react";
import { toast } from "sonner";

// Define strict typing for event structure
interface EventItem {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  participants: string;
  prize: string;
  description: string;
  color: 'cyan' | 'fuchsia' | 'emerald' | 'yellow' | 'orange' | 'violet';
}

const EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // MOCK events data
  const events: EventItem[] = [
    {
      id: 1,
      title: "Clinical Workshop",
      category: "Workshop",
      date: "March 15, 2026",
      time: "10:00 AM - 4:00 PM",
      venue: "KMC Main Auditorium",
      participants: "50 slots",
      prize: "Certificate + Goodies",
      description: "Hands-on clinical skills training with expert physicians. Learn advanced diagnostic techniques and procedures.",
      color: "cyan"
    },
    {
      id: 2,
      title: "Medical Quiz Championship",
      category: "Quiz",
      date: "March 16, 2026",
      time: "2:00 PM - 5:00 PM",
      venue: "Conference Hall A",
      participants: "Teams of 3",
      prize: "₹15,000 Cash Prize",
      description: "Test your medical knowledge across all specialties. Compete with the brightest minds for the championship title.",
      color: "fuchsia"
    },
    {
      id: 3,
      title: "Case Presentation Battle",
      category: "Presentation",
      date: "March 16, 2026",
      time: "9:00 AM - 1:00 PM",
      venue: "Lecture Hall 1",
      participants: "Individual",
      prize: "₹10,000 + Certificate",
      description: "Present complex clinical cases to a panel of expert judges. Showcase your diagnostic and analytical skills.",
      color: "emerald"
    },
    {
      id: 4,
      title: "Research Symposium",
      category: "Symposium",
      date: "March 17, 2026",
      time: "10:00 AM - 3:00 PM",
      venue: "Research Center",
      participants: "Open to all",
      prize: "Publication Opportunity",
      description: "Present your research work and innovations. Network with researchers and clinicians from across the state.",
      color: "yellow"
    },
    {
      id: 5,
      title: "Medical Debate Arena",
      category: "Literary",
      date: "March 17, 2026",
      time: "2:00 PM - 6:00 PM",
      venue: "Auditorium B",
      participants: "Teams of 2",
      prize: "₹8,000 + Trophy",
      description: "Engage in intense debates on contemporary medical ethics and healthcare policies. Argue your case with evidence.",
      color: "orange"
    },
    {
      id: 6,
      title: "Surgical Simulation",
      category: "Workshop",
      date: "March 15, 2026",
      time: "2:00 PM - 6:00 PM",
      venue: "Simulation Lab",
      participants: "30 slots",
      prize: "Certificate",
      description: "Experience cutting-edge surgical simulation technology. Practice procedures in a risk-free environment.",
      color: "violet"
    },
  ];

  const handleRegister = (event: EventItem): void => {
    toast.success(`Registration submitted for ${event.title}!`, {
      description: "You will receive confirmation via email within 24 hours."
    });
  };

  const getCategoryColor = (color: EventItem['color']): string => {
    const colors: Record<EventItem['color'], string> = {
      cyan: "border-cyan-400 bg-cyan-950/30",
      fuchsia: "border-fuchsia-400 bg-fuchsia-950/30",
      emerald: "border-emerald-400 bg-emerald-950/30",
      yellow: "border-yellow-400 bg-yellow-950/30",
      orange: "border-orange-400 bg-orange-950/30",
      violet: "border-violet-400 bg-violet-950/30",
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="sonic-bg min-h-screen text-slate-100">
      {/* Navigation */}
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold pixel-glow-text text-yellow-300 mb-4" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            EVENT ZONES
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-100 max-w-3xl mx-auto" style={{ fontFamily: "'VT323', monospace" }}>
            Choose your quest and register for epic battles across multiple arenas!
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event) => (
              <Card
                key={event.id}
                className={`retro-event-card p-6 cursor-pointer transition-all duration-300 ${selectedEvent?.id === event.id ? 'ring-4 ring-yellow-400' : ''}`}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Category badge */}
                <div className={`inline-block px-4 py-2 rounded-lg mb-4 border-2 ${getCategoryColor(event.color)}`}>
                  <span className="text-sm font-bold" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}>
                    {event.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-yellow-300 mb-4" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}>
                  {event.title}
                </h3>

                <div className="space-y-3 mb-4 text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
                  <div className="flex items-center gap-2 text-lg">
                    <Calendar className="h-5 w-5 text-cyan-300" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-fuchsia-300" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-emerald-300" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-yellow-300" />
                    <span>{event.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <Award className="h-5 w-5 text-orange-300" />
                    <span>{event.prize}</span>
                  </div>
                </div>

                <p className="text-lg text-slate-300 mb-4" style={{ fontFamily: "'VT323', monospace" }}>
                  {event.description}
                </p>

                <Button
                  className="retro-cta w-full text-xs"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    handleRegister(event);
                  }}
                >
                  Register
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="retro-panel max-w-4xl mx-auto text-center p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6" style={{ fontFamily: "'Press Start 2P', cursive" }}>
              Ready to Join?
            </h2>
            <p className="text-2xl md:text-3xl text-slate-100 mb-8" style={{ fontFamily: "'VT323', monospace" }}>
              Register now and secure your spot in Medrenaline 2026. Limited slots available!
            </p>
            <Button className="retro-cta" onClick={() => toast.info("Registration portal opening soon!")}>
              View Schedule
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;