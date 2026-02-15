import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { ScrollRestoration } from "@/components/ScrollRestoration";
import { CMSProvider } from "@/contexts/CMSContext";
import { AdminBar } from "@/components/cms/AdminBar";
import AdminLogin from "./pages/AdminLogin";



import Index from "./pages/Index";
import { PasswordProtected } from "@/components/PasswordProtected";
import VeteranEmployers from "./pages/VeteranEmployers";
import CleanCapital from "./pages/CleanCapital";
import Fellows2025 from "./pages/Fellows2025";
import Pensions from "./pages/Pensions";
import Endowments from "./pages/Endowments";
import IntrepidInvestors from "./pages/IntrepidInvestors";
import GlobalDefense300 from "./pages/GlobalDefense300";
import DecouplingIndex from "./pages/DecouplingIndex";
import TopDefenseCompanies2024 from "./pages/TopDefenseCompanies2024";
import ResearchPage from "./pages/ResearchPage";
import ViewsPage from "./pages/ViewsPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import AccessibilityPage from "./pages/AccessibilityPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CMSProvider>
          <BrowserRouter>
            <ScrollRestoration />
            <AdminBar />
            <Routes>
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/" element={<Index />} />
              <Route path="/veteran-employers" element={<VeteranEmployers />} />
              <Route path="/intrepid-investors" element={<IntrepidInvestors />} />
              <Route path="/clean-capital" element={<CleanCapital />} />
              <Route path="/fellows-2025" element={<Fellows2025 />} />
              <Route path="/global-defense-300" element={
                <PasswordProtected>
                  <GlobalDefense300 />
                </PasswordProtected>
              } />
              <Route path="/decoupling-index" element={<DecouplingIndex />} />
              <Route path="/top-defense-companies-2024" element={
                <PasswordProtected>
                  <TopDefenseCompanies2024 />
                </PasswordProtected>
              } />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/views" element={<ViewsPage />} />
              <Route path="/pensions" element={<Pensions />} />
              <Route path="/endowments" element={<Endowments />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CMSProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;