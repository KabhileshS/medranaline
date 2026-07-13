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

import { useEffect, type CSSProperties } from "react";
import { Twitter, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative">
      {/* Checkerboard ground */}
      <div className="checkerboard py-16 border-t-8 border-yellow-400 relative">
        {/* Pixel sprites */}
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
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}>
                MEDRENALINE
              </h3>
              <p className="text-xl text-slate-800" style={{ fontFamily: "'VT323', monospace" }}>
                The ultimate medical college event bringing together the brightest minds for three days of innovation and excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}>
                QUICK LINKS
              </h3>
              <ul className="space-y-2 text-xl text-slate-800" style={{ fontFamily: "'VT323', monospace" }}>
                <li><a href="/home" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="/events" className="hover:text-blue-600 transition-colors">Events</a></li>
                <li><a href="/home#about" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="/home#sponsors" className="hover:text-blue-600 transition-colors">Sponsors</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}>
                CONTACT
              </h3>
              <ul className="space-y-3 text-xl text-slate-800" style={{ fontFamily: "'VT323', monospace" }}>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="h-5 w-5" />
                  <span>Kilpauk Medical College, Chennai</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="h-5 w-5" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="h-5 w-5" />
                  <span>info@medrenaline.com</span>
                </li>
              </ul>

              {/* Social Media */}
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors border-2 border-slate-900">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors border-2 border-slate-900">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors border-2 border-slate-900">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t-4 border-slate-800 text-center">
            <p className="text-xl text-slate-900" style={{ fontFamily: "'VT323', monospace" }}>
              © 2026 Medrenaline. All rights reserved. Powered by KMC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;