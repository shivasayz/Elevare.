import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  return (
    <section className="relative min-h-[1000px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-background" />

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8 pt-8">
            <div className="inline-flex items-center space-x-2 bg-primary-light/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Your Tech Career Starts Here
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Stay Ahead with{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Jobs, News & Tech Updates
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest opportunities, industry insights, and software
            releases all in one place. Your gateway to the tech world's most
            important updates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => navigate("/jobs")}
            >
              Explore Jobs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border px-8 py-6 text-lg rounded-xl transition-all duration-300"
              onClick={() => navigate("/news")}
            >
              Read Latest News
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">1000+</div>
              <div className="text-sm text-muted-foreground">Daily Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">New Releases</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
