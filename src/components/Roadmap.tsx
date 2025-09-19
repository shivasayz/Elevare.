import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  FileSearch,
  Building2,
  Target,
  Users,
  TrendingUp,
  Brain,
  BarChart3,
  MessageSquare,
  Rocket,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionDivider } from "./SectionDivider";

const roadmapItems = [
  {
    icon: Brain,
    title: "AI-Powered Job Recommendations",
    description: "Personalized suggestions based on your profile and skills",
    details: "Machine learning algorithms analyze your experience and preferences",
    gradient: "from-primary/20 via-primary/10 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: FileSearch,
    title: "Smart Resume Analyzer",
    description: "Upload CV, get instant insights & improvement tips",
    details: "ATS-friendly formatting and keyword optimization suggestions",
    gradient: "from-accent/20 via-accent/10 to-primary/20",
    iconColor: "text-accent",
  },
  {
    icon: Building2,
    title: "Company Insights Dashboard",
    description: "Salaries, culture, and growth trends at a glance",
    details: "Real employee reviews and comprehensive company analytics",
    gradient: "from-primary/20 via-accent/10 to-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Target,
    title: "Skill-Based Career Paths",
    description: "Explore jobs aligned with your learning goals",
    details: "Personalized roadmaps for career advancement",
    gradient: "from-accent/20 via-primary/10 to-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Users,
    title: "Community Q&A Forum",
    description: "Connect with techies & professionals worldwide",
    details: "Expert advice and peer networking opportunities",
    gradient: "from-primary/20 via-primary/10 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Market Trend Analysis",
    description: "Stay updated with tech industry movements",
    details: "Real-time data on emerging technologies and job demand",
    gradient: "from-accent/20 via-accent/10 to-primary/20",
    iconColor: "text-accent",
  },
  {
    icon: BarChart3,
    title: "Salary Benchmarking Tool",
    description: "Compare your compensation with industry standards",
    details: "Location-based and experience-adjusted salary insights",
    gradient: "from-primary/20 via-accent/10 to-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation Hub",
    description: "Practice questions and expert tips",
    details: "Mock interviews with AI feedback and coaching",
    gradient: "from-accent/20 via-primary/10 to-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Rocket,
    title: "Startup Job Board",
    description: "Exclusive opportunities in emerging companies",
    details: "Equity packages and high-growth potential positions",
    gradient: "from-primary/20 via-primary/10 to-accent/20",
    iconColor: "text-primary",
  },
];

export const Roadmap = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Duplicate items three times for smoother loop
    const scrollContent = scrollContainer.querySelector(
      ".scroll-content"
    ) as HTMLElement;
    if (scrollContent) {
      const originalContent = scrollContent.innerHTML;
      scrollContent.innerHTML = originalContent + originalContent + originalContent;
    }

    const animate = () => {
      if (scrollContainer) {
        scrollPositionRef.current += 0.5; // Smooth consistent speed

        // Reset when reaching first third (seamless loop)
        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }

        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="py-10 px-6">
      <div className="max-w-[84rem] mx-auto">
        <SectionDivider label="Future Features" className="mb-6" />
        <section className="py-2 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Coming Soon
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                What's Next?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Exciting features on our roadmap to revolutionize your tech
                career journey
              </p>
            </div>

            <div ref={scrollRef} className="overflow-hidden relative">
              <div className="scroll-content flex gap-6 py-8">
                {roadmapItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className="min-w-[450px] min-h-[280px] bg-card/60 border-2 border-border/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden relative group"
                    >
                      <CardContent
                        className={`p-8 h-full bg-gradient-to-br ${item.gradient} relative overflow-hidden`}
                      >
                        {/* Premium glass morphism overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-background/20 opacity-50" />
                        
                        {/* Animated glow effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 h-full flex flex-col">
                          {/* Icon with premium styling */}
                          <div className="mb-6">
                            <div className={`inline-flex p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 ${item.iconColor} shadow-lg`}>
                              <Icon className="w-7 h-7" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 space-y-3">
                            <h3 className="text-2xl font-bold text-foreground tracking-tight">
                              {item.title}
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                            <p className="text-sm text-muted-foreground/70 italic">
                              {(item as any).details}
                            </p>
                          </div>

                          {/* Premium corner accent */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
