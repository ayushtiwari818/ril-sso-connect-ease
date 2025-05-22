
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Map from "./components/Map";
import MyTasksPage from "@/pages/MyTasksPage";
import OtherStoreTasksPage from "@/pages/OtherStoreTasksPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Inventory from "./pages/Inventory";
import ScanSKU from "./pages/ScanSKU";
import ProductDetail from "./pages/ProductDetail";
import Deliveries from "./pages/Deliveries";
import DeliveryDetails from "./pages/DeliveryDetails";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/ril-sso-connect-ease">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/my-tasks" element={<MyTasksPage />} />
          <Route path="/other-store-tasks" element={<OtherStoreTasksPage />} />
          <Route path="/task/:id" element={<TaskDetailsPage />} />
          <Route path="/tasks" element={<MyTasksPage />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/scan-sku" element={<ScanSKU />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/delivery/:id" element={<DeliveryDetails />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
