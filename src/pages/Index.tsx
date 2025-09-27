import { Hero } from "@/features/Home/Hero";
import { Features } from "../components/Features";
import { Roadmap } from "../components/Roadmap";
import { FAQ } from "../components/FAQ";
import { CTA } from "../components/CTA";
import { Navbar } from "../components/Navbar";
import { Footer } from "@/features/Home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Roadmap />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
