// import React from 'react';
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Your existing page imports
// import StartScreen from "./pages/StartScreen";
// import Index from "./pages/Index";
// import Workshops from "./pages/Workshops";
// import Quiz from "./pages/Quiz";
// import OtherEvents from "./pages/OtherEvents";
// import Accommodation from "./pages/Accommodation";
// import PrevEditions from "./pages/PrevEditions";
// import ContactUs from "./pages/ContactUs";
// import NotFound from "./pages/NotFound";
// import RetroSfxManager from "./components/RetroSfxManager";

// const queryClient = new QueryClient();

// const App = () => (
//   <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
//     <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
//       <QueryClientProvider client={queryClient}>
//         <TooltipProvider>
//           <RetroSfxManager />
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<StartScreen />} />
//               <Route path="/home" element={<Index />} />
//               <Route path="/workshops" element={<Workshops />} />
//               <Route path="/quiz" element={<Quiz />} />
//               <Route path="/other-events" element={<OtherEvents />} />
//               <Route path="/accommodation" element={<Accommodation />} />
//               <Route path="/prev-editions" element={<PrevEditions />} />
//               <Route path="/contact" element={<ContactUs />} />
//               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         </TooltipProvider>
//       </QueryClientProvider>
//     </div>
//   </div>
// );

// export default App;

import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { Toaster } from "./components/ui/sonner";

// Pages
import StartScreen from "./pages/StartScreenS";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import ContactUs from "./pages/ContactUs";
import OtherEvents from "./pages/OtherEvents";
// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

// interface BackendResponse {
//   message: string;
// }

function App(): typeof App.name extends string ? React.JSX.Element : never {
  // useEffect(() => {
  //   const testBackend = async (): Promise<void> => {
  //     try {
  //       const response = await axios.get<BackendResponse>(`${API}/`);
  //       console.log("Backend connected:", response.data.message);
  //     } catch (e) {
  //       console.error("Backend connection failed:", e);
  //     }
  //   };
  //   testBackend();
  // }, []);

  return (
    <div className="App relative">
      {/* Scanline overlay */}
      <div className="scanline-overlay" />
      
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/other-events" element={<OtherEvents />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;