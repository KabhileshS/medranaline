// import { useNavigate } from "react-router-dom";
// import Navigation from "../components/Navigation";
// import Footer from "../components/Footer";
// import CountdownTimer from "../components/CountdownTimer";
// import UpdatesScroller from "../components/UpdatesScroller";
// import { Button } from "../components/ui/button";
// import { Card } from "../components/ui/card";
// import { Stethoscope, Brain, Users, ScrollText, Sparkles, Hotel } from "lucide-react";

// // Sponsor Images
// import SponsorApollo from "@/assets/sponsors/Apollo-Children-Sponsor.jpg";
// import SponsorADR from "@/assets/sponsors/Sponsor-ADR.png";   // ensure lowercase
// import SponsorBB from "@/assets/sponsors/Sponsor-3B.jpg";
// import SponsorBOHR from "@/assets/sponsors/Sponsor-BOHR.png";
// import SponsorCerebellum from "@/assets/sponsors/Sponsor-Cerebellum.png";
// import SponsorDBMC from "@/assets/sponsors/Sponsor-DBMCI.jpg";
// import SponsorGhosh from "@/assets/sponsors/Sponsor-GHOSH.png";
// import SponsorJaypee from "@/assets/sponsors/Sponsor-Jaypee.png";
// import SponsorKH from "@/assets/sponsors/Sponsor-KH.jpg";
// import SponsorKN from "@/assets/sponsors/Sponsor-KN.png";
// import SponsorLanguage from "@/assets/sponsors/Sponsor-Language.png";
// import SponsorMarrow from "@/assets/sponsors/Sponsor-Marrow.png";


// const HomePage = () => {
//   const navigate = useNavigate();

//   const highlights = [
//     {
//       icon: Stethoscope,
//       title: "Workshops",
//       subtitle: "Hands-on quests and skill power-ups.",
//       path: "/workshops",
//       color: "text-cyan-300",
//     },
//     {
//       icon: Brain,
//       title: "Quiz",
//       subtitle: "Compete for the top leaderboard score.",
//       path: "/quiz",
//       color: "text-fuchsia-300",
//     },
//     {
//       icon: Users,
//       title: "Presentation",
//       subtitle: "Case and research showcase arena.",
//       path: "/other-events",
//       color: "text-emerald-300",
//     },
//     {
//       icon: Sparkles,
//       title: "Symposium",
//       subtitle: "Story-driven talks and themed sessions.",
//       path: "/other-events",
//       color: "text-yellow-300",
//     },
//     {
//       icon: ScrollText,
//       title: "Literary Events",
//       subtitle: "Debate rounds and verbal battles.",
//       path: "/other-events",
//       color: "text-orange-300",
//     },
//     {
//       icon: Hotel,
//       title: "Food + Accommodation",
//       subtitle: "Fuel, stay and continue the run.",
//       path: "/accommodation",
//       color: "text-violet-300",
//     },
//   ];

//   // MOCK sponsor data
//   const sponsors = [
//       SponsorApollo,
//       SponsorADR,
//       SponsorBB,
//       SponsorBOHR,
//       SponsorCerebellum,
//       SponsorDBMC,
//       SponsorGhosh,
//       SponsorJaypee,
//       SponsorKH,
//       SponsorKN,
//       SponsorLanguage,
//       SponsorMarrow,
//     ];

//   return (
//     <div className="sonic-bg min-h-screen text-slate-100">
//       {/* Navigation */}
//       <div className="relative z-50">
//         <Navigation />
//       </div>

//       {/* Hero Section */}
//       <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-8">
//         <div className="relative z-10 text-center container mx-auto px-4 max-w-4xl">
//           {/* Logo emblem */}
//           <div className="gold-bezel inline-block px-8 py-6 mb-6 rounded-lg">
//             <div className="flex items-center justify-center gap-3">
//               {/* Left wing */}
//               {/* <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 transform -skew-x-12 rounded-md" style={{ clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)' }} /> */}
              
//               {/* Center logo */}
//               {/* <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center border-4 border-yellow-300 shadow-xl">
//                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center border-2 border-white">
//                   <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Press Start 2P', cursive" }}>A</span>
//                 </div>
//               </div> */}
              
//               {/* Right wing */}
//               {/* <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 transform skew-x-12 rounded-md" style={{ clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)' }} /> */}
//             </div>
//           </div>

//           <h1 className="text-4xl md:text-6xl mb-3 font-bold pixel-glow-text text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
//             MEDRENALINE
//           </h1>

//           <p className="text-3xl md:text-4xl mb-6 max-w-2xl mx-auto text-cyan-100" style={{ fontFamily: "'VT323', monospace" }}>
//             Dive into a pixel universe of workshops, quizzes, presentations,
//             symposiums, and literary arenas.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
//             <Button
//               className="retro-cta"
//               onClick={() => navigate("/events")}
//             >
//               Register Now
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Countdown */}
//       <section className="py-8">
//         <div className="container mx-auto px-4">
//           <CountdownTimer />
//         </div>
//       </section>

//       {/* Updates */}
//       <section className="py-8">
//         <div className="container mx-auto px-4">
//           <UpdatesScroller />
//         </div>
//       </section>

//       {/* About Medrenaline */}
//       <section className="py-16 relative">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="retro-panel p-10">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
//                 About Medrenaline 2026
//               </h2>
//               <p className="text-2xl md:text-3xl mb-6 leading-relaxed text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
//                 Medrenaline is the flagship annual intercollegiate academic
//                 extravaganza of the esteemed Kilpauk Medical College (KMC),
//                 drawing hundreds of bright medical minds from institutions
//                 across Tamil Nadu.
//               </p>
//               <p className="text-2xl md:text-3xl mb-6 leading-relaxed text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
//                 Spanning over three vibrant days, Medrenaline is a celebration of
//                 medical intellect and curiosity – featuring an array of engaging
//                 events that cater to every academic pursuit.
//               </p>
//               <p className="text-2xl md:text-3xl leading-relaxed text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
//                 We are proud to welcome you to the 12th edition of this ocean of
//                 knowledge. Come, dive into the current – compete with the
//                 finest, learn with the best, and rise above the rest.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Highlights */}
//       {/* <section className="py-12">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
//             Event Zones
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {highlights.map((item, index) => (
//               <Card
//                 key={index}
//                 onClick={() => navigate(item.path)}
//                 className="retro-event-card p-6 text-slate-50 cursor-pointer text-center"
//               >
//                 <item.icon
//                   className={`h-12 w-12 ${item.color} mb-4 mx-auto`}
//                 />
//                 <h3 className="text-lg font-semibold mb-3 text-yellow-200" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '12px' }}>{item.title}</h3>
//                 <p className="text-xl md:text-2xl text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>{item.subtitle}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* About KMC */}
//       <section className="py-16 relative">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto retro-panel overflow-hidden">
//             <div className="p-10 text-slate-100">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
//                 About KMC
//               </h2>
//               <p className="text-2xl md:text-3xl mb-6 leading-relaxed text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
//                 Since its founding in 1960, Government Kilpauk Medical College
//                 has stood as a paragon of medical excellence, shaping
//                 generations of physicians with intellect, integrity, and purpose.
//                 Over 65 distinguished years, it has earned its place among
//                 Chennai's most respected medical institutions.
//               </p>
//               <p className="text-2xl md:text-3xl leading-relaxed text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
//                 With a student-focused environment, exceptional faculty, and a
//                 vibrant academic culture, KMC empowers students to excel in
//                 medicine, research, and innovation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Sponsors */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
//             Our Sponsors
//           </h2>
//           <div className="overflow-hidden">
//             <div className="flex animate-scroll-x">
//               {sponsors.concat(sponsors).map((sponsor, index) => (
//                 <div key={index} className="flex-shrink-0 mx-6">
//                   <Card className="w-40 h-40 flex items-center justify-center bg-slate-950/95 shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 border-4 border-yellow-400">
//                     <img
//                       src={sponsor.logo}
//                       alt={sponsor.name}
//                       className="max-w-full max-h-full object-contain p-2 retro-pixel-image"
//                     />
//                   </Card>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8 text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
//             Find Us
//           </h2>
//           <div className="overflow-hidden shadow-lg max-w-5xl mx-auto transform transition duration-500 hover:scale-[1.02] border-8 border-yellow-400">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.471927933441!2d80.2350!3d13.0722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ff5c6ff8cf%3A0x1fbb6bc6fb1df5!2sKilpauk%20Medical%20College!5e0!3m2!1sen!2sin!4v1699999999999"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;


import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CountdownTimer from "../components/CountdownTimer";
import UpdatesScroller from "../components/UpdatesScroller";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Stethoscope, Brain, Users, ScrollText, Sparkles, Hotel } from "lucide-react";

// Sponsor Images
import SponsorApollo from "@/assets/sponsors/Apollo-Children-Sponsor.jpg";
import SponsorADR from "@/assets/sponsors/Sponsor-ADR.png";  
import SponsorBB from "@/assets/sponsors/Sponsor-3B.jpg";
import SponsorBOHR from "@/assets/sponsors/Sponsor-BOHR.png";
import SponsorCerebellum from "@/assets/sponsors/Sponsor-Cerebellum.png";
import SponsorDBMC from "@/assets/sponsors/Sponsor-DBMCI.jpg";
import SponsorGhosh from "@/assets/sponsors/Sponsor-GHOSH.png";
import SponsorJaypee from "@/assets/sponsors/Sponsor-Jaypee.png";
import SponsorKH from "@/assets/sponsors/Sponsor-KH.jpg";
import SponsorKN from "@/assets/sponsors/Sponsor-KN.png";
import SponsorLanguage from "@/assets/sponsors/Sponsor-Language.png";
import SponsorMarrow from "@/assets/sponsors/Sponsor-Marrow.png";

const HomePage = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Stethoscope,
      title: "Workshops",
      subtitle: "Hands-on quests and skill power-ups.",
      path: "/workshops",
      color: "text-cyan-300",
    },
    {
      icon: Brain,
      title: "Quiz",
      subtitle: "Compete for the top leaderboard score.",
      path: "/quiz",
      color: "text-fuchsia-300",
    },
    {
      icon: Users,
      title: "Presentation",
      subtitle: "Case and research showcase arena.",
      path: "/other-events",
      color: "text-emerald-300",
    },
    {
      icon: Sparkles,
      title: "Symposium",
      subtitle: "Story-driven talks and themed sessions.",
      path: "/other-events",
      color: "text-yellow-300",
    },
    {
      icon: ScrollText,
      title: "Literary Events",
      subtitle: "Debate rounds and verbal battles.",
      path: "/other-events",
      color: "text-orange-300",
    },
    {
      icon: Hotel,
      title: "Food + Accommodation",
      subtitle: "Fuel, stay and continue the run.",
      path: "/accommodation",
      color: "text-violet-300",
    },
  ];

  const sponsors = [
    SponsorApollo,
    SponsorADR,
    SponsorBB,
    SponsorBOHR,
    SponsorCerebellum,
    SponsorDBMC,
    SponsorGhosh,
    SponsorJaypee,
    SponsorKH,
    SponsorKN,
    SponsorLanguage,
    SponsorMarrow,
  ];

  return (
    <div className="sonic-bg min-h-screen text-slate-100">
      {/* Navigation */}
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-8">
        <div className="relative z-10 text-center container mx-auto px-4 max-w-4xl">
          <div className="gold-bezel inline-block px-8 py-6 mb-6 rounded-lg">
             <div className="flex items-center justify-center gap-3">
               {/* Left wing */}
               {/* <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 transform -skew-x-12 rounded-md" style={{ clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)' }} /> */}
              
               {/* Center logo */}
               {/* <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center border-4 border-yellow-300 shadow-xl">
                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center border-2 border-white">
                   <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Press Start 2P', cursive" }}>A</span>
                 </div>
               </div> */}
              
               {/* Right wing */}
               {/* <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 transform skew-x-12 rounded-md" style={{ clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)' }} /> */}
             </div>
           </div>
          <h1 className="text-4xl md:text-6xl mb-3 font-bold pixel-glow-text text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            MEDRENALINE
          </h1>

          <p className="text-3xl md:text-4xl mb-6 max-w-2xl mx-auto text-cyan-100" style={{ fontFamily: "'VT323', monospace" }}>
            Dive into a pixel universe of workshops, quizzes, presentations,
            symposiums, and literary arenas.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              className="retro-cta"
              onClick={() => navigate("/events")}
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <CountdownTimer />
        </div>
      </section>

      {/* Updates */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <UpdatesScroller />
        </div>
      </section>

      {/* About Medrenaline */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="retro-panel p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                About Medrenaline 2026
              </h2>
              <p className="text-2xl md:text-3xl mb-6 leading-relaxed text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
                Medrenaline is the flagship annual intercollegiate academic
                extravaganza of the esteemed Kilpauk Medical College (KMC),
                drawing hundreds of bright medical minds from institutions
                across Tamil Nadu.
              </p>
              <p className="text-2xl md:text-3xl mb-6 leading-relaxed text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
                Spanning over three vibrant days, Medrenaline is a celebration of
                medical intellect and curiosity – featuring an array of engaging
                events that cater to every academic pursuit.
              </p>
              <p className="text-2xl md:text-3xl leading-relaxed text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
                We are proud to welcome you to the 12th edition of this ocean of
                knowledge. Come, dive into the current – compete with the
                finest, learn with the best, and rise above the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About KMC */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto retro-panel overflow-hidden">
            <div className="p-10 text-slate-100">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                About KMC
              </h2>
              <p className="text-2xl md:text-3xl mb-6 leading-relaxed text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
                Since its founding in 1960, Government Kilpauk Medical College
                has stood as a paragon of medical excellence, shaping
                generations of physicians with intellect, integrity, and purpose.
                Over 65 distinguished years, it has earned its place among
                Chennai's most respected medical institutions.
              </p>
              <p className="text-2xl md:text-3xl leading-relaxed text-slate-100" style={{ fontFamily: "'VT323', monospace" }}>
                With a student-focused environment, exceptional faculty, and a
                vibrant academic culture, KMC empowers students to excel in
                medicine, research, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            Our Sponsors
          </h2>
          <div className="overflow-hidden">
            <div className="flex animate-scroll-x">
              {sponsors.concat(sponsors).map((sponsorUrl, index) => (
                <div key={index} className="flex-shrink-0 mx-6">
                  <Card className="w-40 h-40 flex items-center justify-center bg-slate-950/95 shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 border-4 border-yellow-400">
                    <img
                      src={sponsorUrl}
                      alt={`Sponsor Logo ${index + 1}`}
                      className="max-w-full max-h-full object-contain p-2 retro-pixel-image"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-300" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            Find Us
          </h2>
          <div className="overflow-hidden shadow-lg max-w-5xl mx-auto transform transition duration-500 hover:scale-[1.02] border-8 border-yellow-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.471927933441!2d80.2350!3d13.0722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ff5c6ff8cf%3A0x1fbb6bc6fb1df5!2sKilpauk%20Medical%20College!5e0!3m2!1sen!2sin!4v1699999999999"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;