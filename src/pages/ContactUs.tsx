// import { Mail, Phone } from "lucide-react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import ParticlesBackground from "@/components/ParticlesBackground";

// const ContactUs = () => {
//   return (
//     <div className="relative min-h-screen text-slate-100">
//       {/* Navbar */}
//       <div className="relative z-[2000]">
//         <Navigation />
//       </div>

//       {/* Particles Background */}
//       <div className="fixed inset-0 z-[-10] pointer-events-none">
//         <ParticlesBackground />
//       </div>
      
//       {/* Page Content */}
//       <main className="relative z-[100] pt-28 pb-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            
//             {/* Title */}
//             <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-300">
//               Contact Us
//             </h1>

//             {/* Council Info */}
//             <div className="w-full max-w-md p-4 retro-panel mb-8">
//               <h2 className="text-2xl font-bold text-yellow-200">
//                 KMC STUDENT COUNCIL 2025 - 26
//               </h2>
//               <a
//                 href="mailto:studentcouncilkmc@gmail.com"
//                 className="text-cyan-200 hover:text-blue-300 transition-colors flex items-center justify-center gap-2 mt-2"
//               >
//                 <Mail className="h-4 w-4" />
//                 studentcouncilkmc@gmail.com
//               </a>
//             </div>

//             {/* Academic Secretaries */}
//             <div className="w-full mb-10">
//               <h3 className="text-lg font-semibold tracking-wider uppercase text-yellow-300 mb-6">
//                 Academic Secretaries
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Naresh */}
//                 <div className="retro-event-card p-6 text-center flex flex-col items-center">
//                   <h4 className="text-xl font-semibold text-yellow-200">NARESH R</h4>
//                   <div className="mt-3 space-y-2 text-slate-100">
//                     <a href="tel:8939276895" className="flex items-center justify-center gap-2.5 hover:text-blue-300 transition-colors">
//                       <Phone className="h-4 w-4" />
//                       <span>8939276895</span>
//                     </a>
//                     <a href="mailto:naresh123ch37@gmail.com" className="flex items-center justify-center gap-2.5 hover:text-blue-300 transition-colors">
//                       <Mail className="h-4 w-4" />
//                       <span>naresh123ch37@gmail.com</span>
//                     </a>
//                   </div>
//                 </div>

//                 {/* Mahashwethha */}
//                 <div className="retro-event-card p-6 text-center flex flex-col items-center">
//                   <h4 className="text-xl font-semibold text-yellow-200">MAHASHWETHHA Y</h4>
//                   <div className="mt-3 space-y-2 text-slate-100">
//                     <a href="tel:7448833936" className="flex items-center justify-center gap-2.5 hover:text-blue-300 transition-colors">
//                       <Phone className="h-4 w-4" />
//                       <span>7448833936</span>
//                     </a>
//                     <a href="mailto:mahashwethha@gmail.com" className="flex items-center justify-center gap-2.5 hover:text-blue-300 transition-colors">
//                       <Mail className="h-4 w-4" />
//                       <span>mahashwethha@gmail.com</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Write to Us */}
//             <div className="w-full max-w-xl p-6 retro-panel mb-12">
//               <h3 className="text-lg font-semibold text-yellow-200">Write down to Us</h3>
//               <a
//                 href="mailto:medrenaline.2025@gmail.com"
//                 className="text-blue-200 hover:underline flex items-center justify-center gap-2 mt-1 font-medium"
//               >
//                 <Mail className="h-4 w-4" />
//                 medrenaline.2025@gmail.com
//               </a>
//             </div>

//             {/* Other Events */}
//             <div className="w-full">
//             <h3 className="text-lg font-semibold tracking-wider uppercase text-yellow-300 mb-6">
//               Our Other Events
//             </h3>
//             <div className="flex justify-center items-center gap-8 md:gap-12">
//               {/* AADUKALAM */}
//               <div
//                 className="w-48 h-48 bg-red-100 rounded-none flex items-center justify-center border-4 border-yellow-200 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
//                 onClick={() =>
//                   window.open(
//                     "https://www.instagram.com/aadukalam.kmc?igsh=MXdsY3N1b3R5ODFraA==",
//                     "_blank"
//                   )
//                 }
//               >
//                 <img
//                   src="/logo/AADUKALAM-LOGO.png"
//                   alt="AADUKALAM Logo"
//                   className="max-w-full max-h-full object-contain retro-pixel-image"
//                 />
//               </div>

//               {/* PRAD */}
//               <div
//                 className="w-48 h-48 bg-blue-100 rounded-none flex items-center justify-center border-4 border-yellow-200 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
//                 onClick={() =>
//                   window.open(
//                     "https://www.instagram.com/pradharshini.kmc?igsh=MTdiMjVtbjhvajFqeA==",
//                     "_blank"
//                   )
//                 }
//               >
//                 <img
//                   src="/logo/PRAD-LOGO.png"
//                   alt="PRAD Logo"
//                   className="max-w-full max-h-full object-contain retro-pixel-image"
//                 />
//               </div>
//             </div>
//           </div>




//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;

import { Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const ContactUs: React.FC = () => {
  return (
    <div className="sonic-bg min-h-screen text-slate-100 relative">
      {/* Navbar */}
      <div className="relative z-[2000]">
        <Navigation />
      </div>

      {/* Particles Background */}
      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <ParticlesBackground />
      </div>
      
      {/* Page Content */}
      <main className="relative z-[100] pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            
            {/* Title */}
            <h1 
              className="text-4xl md:text-5xl font-bold mb-8 pixel-glow-text text-yellow-300"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              Contact Us
            </h1>

            {/* Council Info */}
            <div className="w-full max-w-xl p-6 retro-panel mb-8">
              <h2 
                className="text-xl md:text-2xl font-bold text-yellow-200"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}
              >
                KMC STUDENT COUNCIL 2025 - 26
              </h2>
              <a
                href="mailto:studentcouncilkmc@gmail.com"
                className="text-xl text-cyan-200 hover:text-blue-300 transition-colors flex items-center justify-center gap-2 mt-4"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                <Mail className="h-5 w-5" />
                studentcouncilkmc@gmail.com
              </a>
            </div>

            {/* Academic Secretaries */}
            <div className="w-full mb-10">
              <h3 
                className="text-lg font-bold tracking-wider uppercase text-yellow-300 mb-6"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '12px' }}
              >
                Academic Secretaries
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Naresh */}
                <div className="retro-event-card p-6 text-center flex flex-col items-center">
                  <h4 
                    className="text-xl font-bold text-yellow-200"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}
                  >
                    NARESH R
                  </h4>
                  <div className="mt-4 space-y-2 text-slate-100 text-xl" style={{ fontFamily: "'VT323', monospace" }}>
                    <a href="tel:8939276895" className="flex items-center justify-center gap-2.5 hover:text-blue-300 transition-colors">
                      <Phone className="h-5 w-5 text-cyan-300" />
                      <span>8939276895</span>
                    </a>
                    <a href="mailto:naresh123ch37@gmail.com" className="flex items-center justify-center gap-2.5 hover:text-blue-300 transition-colors">
                      <Mail className="h-5 w-5 text-fuchsia-300" />
                      <span>naresh123ch37@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Mahashwethha */}
                <div className="retro-event-card p-6 text-center flex flex-col items-center">
                  <h4 
                    className="text-xl font-bold text-yellow-200"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}
                  >
                    MAHASHWETHHA Y
                  </h4>
                  <div className="mt-4 space-y-2 text-slate-100 text-xl" style={{ fontFamily: "'VT323', monospace" }}>
                    <a href="tel:7448833936" className="flex items-center justify-center gap-2.5 hover:text-blue-300 transition-colors">
                      <Phone className="h-5 w-5 text-cyan-300" />
                      <span>7448833936</span>
                    </a>
                    <a href="mailto:mahashwethha@gmail.com" className="flex items-center justify-center gap-2.5 hover:text-blue-300 transition-colors">
                      <Mail className="h-5 w-5 text-fuchsia-300" />
                      <span>mahashwethha@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Write to Us */}
            <div className="w-full max-w-xl p-6 retro-panel mb-12">
              <h3 
                className="text-lg font-bold text-yellow-200"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '12px' }}
              >
                Write down to Us
              </h3>
              <a
                href="mailto:medrenaline.2025@gmail.com"
                className="text-2xl text-blue-200 hover:underline flex items-center justify-center gap-2 mt-3 font-medium"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                <Mail className="h-5 w-5" />
                medrenaline.2025@gmail.com
              </a>
            </div>

            {/* Other Events */}
            <div className="w-full">
              <h3 
                className="text-lg font-bold tracking-wider uppercase text-yellow-300 mb-6"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '12px' }}
              >
                Our Other Events
              </h3>
              <div className="flex justify-center items-center gap-8 md:gap-12">
                {/* AADUKALAM */}
                <div
                  className="w-48 h-48 bg-red-100 rounded-none flex items-center justify-center border-4 border-yellow-200 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/aadukalam.kmc?igsh=MXdsY3N1b3R5ODFraA==",
                      "_blank"
                    )
                  }
                >
                  <img
                    src="/logo/AADUKALAM-LOGO.png"
                    alt="AADUKALAM Logo"
                    className="max-w-full max-h-full object-contain retro-pixel-image"
                  />
                </div>

                {/* PRAD */}
                <div
                  className="w-48 h-48 bg-blue-100 rounded-none flex items-center justify-center border-4 border-yellow-200 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/pradharshini.kmc?igsh=MTdiMjVtbjhvajFqeA==",
                      "_blank"
                    )
                  }
                >
                  <img
                    src="/logo/PRAD-LOGO.png"
                    alt="PRAD Logo"
                    className="max-w-full max-h-full object-contain retro-pixel-image"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;