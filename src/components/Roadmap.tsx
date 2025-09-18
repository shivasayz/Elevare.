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
    description: "Personalized suggestions based on your profile",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: FileSearch,
    title: "Smart Resume Analyzer",
    description: "Upload CV, get instant insights & improvement tips",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Building2,
    title: "Company Insights Dashboard",
    description: "Salaries, culture, and growth trends at a glance",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: Target,
    title: "Skill-Based Career Paths",
    description: "Explore jobs aligned with your learning goals",
    gradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-500",
  },
  {
    icon: Users,
    title: "Community Q&A Forum",
    description: "Connect with techies & professionals",
    gradient: "from-indigo-500/10 to-purple-500/10",
    iconColor: "text-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Market Trend Analysis",
    description: "Stay updated with tech industry movements",
    gradient: "from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-500",
  },
  {
    icon: BarChart3,
    title: "Salary Benchmarking Tool",
    description: "Compare your compensation with industry standards",
    gradient: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-500",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation Hub",
    description: "Practice questions and expert tips",
    gradient: "from-violet-500/10 to-indigo-500/10",
    iconColor: "text-violet-500",
  },
  {
    icon: Rocket,
    title: "Startup Job Board",
    description: "Exclusive opportunities in emerging companies",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
  },
];

export const Roadmap = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Duplicate items for seamless loop
    const scrollContent = scrollContainer.querySelector(
      ".scroll-content"
    ) as HTMLElement;
    if (scrollContent) {
      const originalContent = scrollContent.innerHTML;
      scrollContent.innerHTML = originalContent + originalContent;
    }

    const animate = () => {
      if (scrollContainer) {
        scrollPositionRef.current += 0.8; // Slower animation for premium feel

        // Reset scroll when reaching halfway (where duplicate starts)
        const maxScroll = scrollContainer.scrollWidth / 2;
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
              <div className="scroll-content flex gap-8 py-8">
                {roadmapItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className="min-w-[500px] min-h-[360px] bg-background/80 border border-muted/40 backdrop-blur-md shadow-lg hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] hover:scale-[1.03] transition-transform duration-500 ease-in-out rounded-3xl overflow-hidden cursor-pointer hover:border-primary/40 relative"
                    >
                      <CardContent
                        className={`p-10 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}
                      >
                        {/* Overlay for subtle glass effect */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl z-0" />

                        <div className="relative z-10">
                          <div className="flex items-start gap-6">
                            {/* Icon block with neumorphism effect */}
                            <div
                              className={`p-5 rounded-2xl shadow-inner bg-background/90 ${item.iconColor}`}
                            >
                              <Icon className="w-8 h-8 text-primary" />
                            </div>

                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
                                {item.title}
                              </h3>
                              <p className="text-muted-foreground text-base leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
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
