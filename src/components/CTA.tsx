import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Ready to Accelerate Your Career?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of tech professionals who've found their next opportunity with us
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => navigate("/signup")}
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-secondary hover:bg-secondary/20 px-8 py-6 text-lg rounded-xl transition-all duration-300"
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required • Free forever plan available
        </p>
      </div>
    </section>
  );
};