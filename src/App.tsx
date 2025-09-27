import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import Index from "./pages/Index";
import Jobs from "./features/Jobs/Jobs";
import JobDetails from "./features/Jobs/JobDetails";
import News from "./features/Articles/News";
import ArticleDetail from "./features/Articles/ArticleDetail";
import Releases from "./features/Releases/Releases";
import ReleaseDetail from "./features/Releases/ReleaseDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import SavedItems from "./pages/SavedItems";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Footer } from "./features/Home/Footer";

const App = () => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            refetchOnWindowFocus: false,
          },
        },
      }),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/jobs"
              element={
                <div className="min-h-screen bg-background font-inter">
                  <Navbar />
                  <Jobs />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/jobs/:id"
              element={
                <div className="min-h-screen bg-background font-inter">
                  {/* <Navbar /> */}
                  <JobDetails />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/news"
              element={
                <div className="min-h-screen bg-background font-inter">
                  <Navbar />
                  <News />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/news/:id"
              element={
                <div className="min-h-screen bg-background font-inter">
                  {/* <Navbar /> */}
                  <ArticleDetail />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/releases"
              element={
                <div className="min-h-screen bg-background font-inter">
                  <Navbar />
                  <Releases />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/releases/:id"
              element={
                <div className="min-h-screen bg-background font-inter">
                  {/* <Navbar /> */}
                  <ReleaseDetail />
                  <Footer />
                </div>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
