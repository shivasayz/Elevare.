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
  Rocket
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const roadmapItems = [
  {
    icon: Brain,
    title: "AI-Powered Job Recommendations",
    description: "Personalized suggestions based on your profile",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500"
  },
  {
    icon: FileSearch,
    title: "Smart Resume Analyzer",
    description: "Upload CV, get instant insights & improvement tips",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500"
  },
  {
    icon: Building2,
    title: "Company Insights Dashboard",
    description: "Salaries, culture, and growth trends at a glance",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-500"
  },
  {
    icon: Target,
    title: "Skill-Based Career Paths",
    description: "Explore jobs aligned with your learning goals",
    gradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-500"
  },
  {
    icon: Users,
    title: "Community Q&A Forum",
    description: "Connect with techies & professionals",
    gradient: "from-indigo-500/10 to-purple-500/10",
    iconColor: "text-indigo-500"
  },
  {
    icon: TrendingUp,
    title: "Market Trend Analysis",
    description: "Stay updated with tech industry movements",
    gradient: "from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-500"
  },
  {
    icon: BarChart3,
    title: "Salary Benchmarking Tool",
    description: "Compare your compensation with industry standards",
    gradient: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-500"
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation Hub",
    description: "Practice questions and expert tips",
    gradient: "from-violet-500/10 to-indigo-500/10",
    iconColor: "text-violet-500"
  },
  {
    icon: Rocket,
    title: "Startup Job Board",
    description: "Exclusive opportunities in emerging companies",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500"
  }
];

export const Roadmap = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Duplicate items for seamless loop
    const scrollContent = scrollContainer.querySelector('.scroll-content') as HTMLElement;
    if (scrollContent) {
      const originalContent = scrollContent.innerHTML;
      scrollContent.innerHTML = originalContent + originalContent;
    }

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += 1;
        
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
  }, [isPaused]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Coming Soon</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What's Next?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exciting features on our roadmap to revolutionize your tech career journey
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="scroll-content flex gap-6 py-4">
            {roadmapItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="min-w-[320px] hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-muted hover:border-primary/20"
                >
                  <CardContent className={`p-6 bg-gradient-to-br ${item.gradient}`}>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-background/80 ${item.iconColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
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
  );
};