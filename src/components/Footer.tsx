// import { Mail, MapPin, Instagram, MessageSquare, Phone } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Address */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
//             <div className="flex items-start gap-2 text-sm">
//               <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
//               <div>
//                 <p>Kilpauk Medical College</p>
//                 <p>822, Poonamallee High Rd, Kilpauk</p>
//                 <p>Chennai, Tamil Nadu 600010</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Details */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
//             <div className="space-y-2 text-sm">
//               <div className="flex items-center gap-2">
//                 <Phone className="h-4 w-4" />
//                 <span>Naresh R : 8939276895</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Phone className="h-4 w-4" />
//                 <span>Mahashwethha Y : 7448833936</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Mail className="h-4 w-4" />
//                 <a
//                   href="mailto:studentcouncilkmc@gmail.com"
//                   className="hover:text-violet-light transition-colors"
//                 >
//                   studentcouncilkmc@gmail.com
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//             <div className="space-y-2">
//               <div className="flex items-center gap-2 text-sm">
//                 <Instagram className="h-4 w-4" />
//                 <a
//                   href="https://instagram.com/medrenaline.kmc"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-violet-light transition-colors"
//                 >
//                   @medrenaline.kmc
//                 </a>
//               </div>
//               <div className="flex items-center gap-2 text-sm">
//                 <Mail className="h-4 w-4" />
//                 <a
//                   href="mailto:medrenaline.2025@gmail.com"
//                   className="hover:text-violet-light transition-colors"
//                 >
//                   medrenaline.2025@gmail.com
//                 </a>
//               </div>
//               <div className="flex items-center gap-2 text-sm">
//                 <MessageSquare className="h-4 w-4" />
//                 <a
//                   href="https://chat.whatsapp.com/Lly7U7rZaXYD8LnRpZeITM?mode=ems_copy_t"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-violet-light transition-colors"
//                 >
//                   WhatsApp Group
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
//           <p>&copy; 2025 Govt Kilpauk Medical College and Hospital. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import type { CSSProperties } from "react";
import { Instagram, Mail, MapPin, Phone, MessageSquare } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full">
      {/* 
        The checkerboard pattern stays as the ground. We make sure it's dark
        so any small gaps behind our panels don't create new contrast issues.
      */}
      <div className="checkerboard py-16 border-t-8 border-yellow-400 relative bg-[#1a1a2e]">
        {/* Pixel sprites - keep these bouncing around the checkerboard ground */}
        <div className="absolute top-8 left-10 sprite-bounce">
          <div className="w-12 h-12 bg-blue-600 rounded-md border-4 border-white shadow-xl" />
        </div>
        <div 
          className="absolute top-8 right-10 sprite-bounce" 
          style={{ animationDelay: '0.5s' } as CSSProperties}
        >
          <div className="w-10 h-10 border-8 border-yellow-400 rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 
            This is the key fix. We wrap the text columns in their own solid dark panel.
            This gives the white text a dark, non-patterned background for perfect readability.
          */}
          <div className="retro-panel-footer p-8 bg-[#1e1e3a] border-2 border-slate-700 rounded-lg shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              
              {/* Reach Us / Address Block */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4 tracking-wide" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}>
                  REACH US
                </h3>
                {/* Text is pure white, background is now solid dark. Perfect readability. */}
                <div className="flex items-start gap-2 justify-center md:justify-start text-xl text-white" style={{ fontFamily: "'VT323', monospace" }}>
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-cyan-300" />
                  <div>
                    <p>Kilpauk Medical College</p>
                    <p>822, Poonamallee High Rd, Kilpauk</p>
                    <p>Chennai, Tamil Nadu 600010</p>
                  </div>
                </div>
              </div>

              {/* Connect With Us / Contact Numbers */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4 tracking-wide" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}>
                  CONNECT WITH US
                </h3>
                <ul className="space-y-2 text-xl text-white" style={{ fontFamily: "'VT323', monospace" }}>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone className="h-5 w-5 text-fuchsia-300" />
                    <span>Santhosh S : 9962826457</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone className="h-5 w-5 text-fuchsia-300" />
                    <span>Veena Sri : 8072600653</span>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail className="h-5 w-5 text-emerald-300" />
                    <a href="mailto:studentcouncilkmc@gmail.com" className="hover:text-cyan-300 transition-colors break-all">
                      studentcouncilkmc@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us / Social & Communication Links */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4 tracking-wide" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}>
                  FOLLOW US
                </h3>
                <ul className="space-y-3 text-xl text-white" style={{ fontFamily: "'VT323', monospace" }}>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail className="h-5 w-5 text-emerald-300" />
                    <a href="mailto:medrenaline.2025@gmail.com" className="hover:text-cyan-300 transition-colors break-all">
                      medrenaline.2025@gmail.com
                    </a>
                  </li>
                </ul>

                {/* Social Buttons */}
                <div className="flex gap-4 mt-6 justify-center md:justify-start">
                  <a 
                    href="https://instagram.com/medrenaline.kmc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="@medrenaline.kmc"
                    className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-105 border-2 border-slate-400"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>

                  <a 
                    href="https://chat.whatsapp.com/Lly7U7rZaXYD8LnRpZeITM?mode=ems_copy_t" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="WhatsApp Group"
                    className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-105 border-2 border-slate-400"
                  >
                    <MessageSquare className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

            </div>

            {/* Copyright, also contained within the solid panel */}
            <div className="mt-10 pt-8 border-t-2 border-slate-700 text-center">
              <p className="text-xl text-white opacity-80" style={{ fontFamily: "'VT323', monospace" }}>
                © 2026 Govt Kilpauk Medical College and Hospital. All rights reserved. Powered by Medrenaline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;