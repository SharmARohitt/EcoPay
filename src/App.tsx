
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorksPage from "./pages/HowItWorksPage";
import RewardsPage from "./pages/RewardsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignInPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import DashboardPage from "./pages/DashboardPage";
import SchedulePickupPage from "./pages/SchedulePickupPage";
import PartnerRegistrationPage from "./pages/PartnerRegistrationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/schedule-pickup" element={<SchedulePickupPage />} />
          <Route path="/become-partner" element={<PartnerRegistrationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
