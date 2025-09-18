import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    company: "Tech Corp",
    content: "Found my dream job within 2 weeks! The curated listings saved me hours of searching.",
    rating: 5,
    initials: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "StartupXYZ",
    content: "The real-time updates on tech releases help me stay ahead in my field. Invaluable resource!",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Emily Watson",
    role: "Full Stack Engineer",
    company: "CloudBase",
    content: "Best platform for tech news and opportunities. The quality of content is unmatched.",
    rating: 5,
    initials: "EW"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied tech professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-secondary/10 border-secondary/20"
            >
              <div className="flex items-center mb-4">
                <Avatar className="mr-3">
                  <AvatarFallback className="bg-accent/20 text-accent">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic">
                "{testimonial.content}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};