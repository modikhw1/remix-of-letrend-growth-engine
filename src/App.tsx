import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Platform from "./pages/Platform";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hur-det-fungerar" element={<HowItWorks />} />
          <Route path="/plattformen" element={<Platform />} />
          <Route path="/kundcase" element={<Cases />} />
          <Route path="/kundcase/:slug" element={<CaseDetail />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/kom-igang" element={<GetStarted />} />
          <Route path="/priser" element={<Index />} />
          <Route path="/_export" element={<ScreenExport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
