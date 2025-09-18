import {
  Briefcase,
  TrendingUp,
  Package,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionDivider } from "./SectionDivider";

const features = [
  {
    icon: Briefcase,
    title: "Curated Job Listings",
    description:
      "Hand-picked tech opportunities from top companies worldwide, updated daily.",
  },
  {
    icon: TrendingUp,
    title: "Industry Insights",
    description:
      "Stay ahead with trending tech news, market analysis, and expert opinions.",
  },
  {
    icon: Package,
    title: "Release Tracking",
    description:
      "Never miss important software updates, frameworks, and tool releases.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Join thousands of tech professionals sharing knowledge and opportunities.",
  },
  {
    icon: Shield,
    title: "Verified Sources",
    description:
      "All content is verified and sourced from trusted industry leaders.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "Get instant notifications for new opportunities matching your interests.",
  },
];

export const Features = () => {
  return (
    <div className="py-10 px-6">
      <div className="max-w-[84rem] mx-auto">
        <section className="py-20 px-6 bg-background rounded-3xl">
          <div className="max-w-7xl mx-auto">
            {/* Moved SectionDivider here */}
            <SectionDivider label="Why Our Platform" className="mb-6" />

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Why Choose Our Platform
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to advance your tech career in one place
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-secondary/10 border-secondary/20 hover:bg-secondary/20 transition-all duration-300 hover:shadow-lg"
                >
                  <feature.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
