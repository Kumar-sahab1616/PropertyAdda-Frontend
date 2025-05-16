import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingEnquiryButton } from "@/components/shared/floating-enquiry-button";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ServicesPage from "@/pages/services";
import PaintingServicePage from "@/pages/services/painting";
import ElectricianServicePage from "@/pages/services/electrician";
import PlumbingServicePage from "@/pages/services/plumbing";
import CarpenterServicePage from "@/pages/services/carpenter";
import PropertiesPage from "@/pages/properties";

function Router() {
  return (
    <Switch>
      {/* Main Pages */}
      <Route path="/" component={Home} />
      <Route path="/properties" component={PropertiesPage} />
      
      {/* Service Pages */}
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/painting" component={PaintingServicePage} />
      <Route path="/services/electrician" component={ElectricianServicePage} />
      <Route path="/services/plumbing" component={PlumbingServicePage} />
      <Route path="/services/carpenter" component={CarpenterServicePage} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <FloatingEnquiryButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
