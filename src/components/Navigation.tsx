// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { name: "Home", path: "/home" },
//     { name: "Events", path: "/events" },
//     { name: "Workshops", path: "/workshops" },
//     { name: "Quiz", path: "/quiz" },
//     { name: "Other Events", path: "/other-events" },
//     { name: "Accommodation", path: "/accommodation" },
//     { name: "Prev Edition", path: "/prev-editions" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-100/90 backdrop-blur-md border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/home" className="flex items-center space-x-2">
//             <h1
//               className="text-xl md:text-2xl font-bold text-yellow-200 tracking-wide"
//               style={{ fontFamily: "Ethnocentric Rg, sans-serif" }}
//             >
//               Medrenaline
//             </h1>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`text-sm font-medium transition-all duration-300 ${
//                   isActive(item.path)
//                     ? "text-yellow-300"
//                     : "text-slate-100 hover:text-red-300 hover:drop-shadow-[0_0_6px_#60a5fa]"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <Button
//             variant="ghost"
//             size="sm"
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border bg-blue-50">
//             <div className="flex flex-col space-y-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
//                     isActive(item.path)
//                       ? "text-blue-900"
//                       : "text-gray-700 hover:text-blue-600 hover:drop-shadow-[0_0_6px_#3b82f6]"
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavItem {
  name: string;
  path: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: "HOME", path: "/home" },
    { name: "EVENTS", path: "/events" },
    { name: "ABOUT", path: "/home#about" },
    { name: "CONTACT", path: "/contact" },
    { name: "OTHER EVENTS", path: "/other-events" },
  ];

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 retro-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3">
            <div className="gold-bezel px-4 py-2 rounded-md flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center border-2 border-yellow-300">
                <span className="text-sm font-bold text-white" style={{ fontFamily: "'Press Start 2P', cursive" }}>A</span>
              </div>
              <h1
                className="text-lg md:text-xl font-bold text-white tracking-wide"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                MEDRENALINE
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-yellow-300 drop-shadow-[0_0_8px_#FFD700]"
                    : "text-white hover:text-yellow-200 hover:drop-shadow-[0_0_6px_#FFF]"
                }`}
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-yellow-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-4 border-yellow-400">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-yellow-300"
                      : "text-white hover:text-yellow-200"
                  }`}
                  style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;