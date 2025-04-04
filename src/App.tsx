
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
import HistoryPage from "./pages/HistoryPage";
import RewardsRedemptionPage from "./pages/RewardsRedemptionPage";
import ProfilePage from "./pages/ProfilePage";
import RecyclingGuidePage from "./pages/RecyclingGuidePage";
import InviteFriendsPage from "./pages/InviteFriendsPage";
import SustainabilityReportPage from "./pages/SustainabilityReportPage";
import TeamPage from "./pages/TeamPage";
import PaymentsPage from "./pages/PaymentsPage";

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
          
          {/* Newly added routes */}
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/rewards-redemption" element={<RewardsRedemptionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recycling-guide" element={<RecyclingGuidePage />} />
          <Route path="/invite-friends" element={<InviteFriendsPage />} />
          <Route path="/sustainability-report" element={<SustainabilityReportPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
