import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  trending?: boolean;
}

export default function News() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  useAutoplayCarousel(carouselApi, 5000);

  const navigate = useNavigate();
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
      stopOnMouseEnter: true, // ✅ Add this line
    })
  );

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Custom hook to handle autoplay
  function useAutoplayCarousel(api: CarouselApi | undefined, delay = 3000) {
    useEffect(() => {
      if (!api) return;

      const interval = setInterval(() => {
        api.scrollNext();
      }, delay);

      return () => clearInterval(interval);
    }, [api, delay]);
  }

  const articles: Article[] = [
    {
      id: 1,
      title: "AI Revolution: GPT-5 Announced with Groundbreaking Capabilities",
      description:
        "OpenAI unveils the next generation of language models with unprecedented reasoning abilities and multimodal features that promise to transform industries.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Artificial Intelligence",
      image: "/api/placeholder/600/400",
      trending: true,
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: 1000-Qubit Processor Achieved",
      description:
        "IBM researchers announce a major milestone in quantum computing, bringing practical quantum applications closer to reality.",
      author: "Dr. Michael Roberts",
      date: "Dec 14, 2024",
      readTime: "7 min read",
      category: "Quantum Computing",
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "The Rise of Edge Computing in 2024",
      description:
        "How edge computing is revolutionizing data processing and enabling real-time applications across industries from healthcare to autonomous vehicles.",
      author: "Emily Watson",
      date: "Dec 13, 2024",
      readTime: "6 min read",
      category: "Cloud & Infrastructure",
      image: "/api/placeholder/600/400",
      trending: true,
    },
    {
      id: 4,
      title: "Cybersecurity Alert: New Zero-Day Vulnerability Discovered",
      description:
        "Security researchers uncover critical vulnerability affecting millions of devices worldwide. Here's what you need to know.",
      author: "Alex Thompson",
      date: "Dec 12, 2024",
      readTime: "4 min read",
      category: "Security",
      image: "/api/placeholder/600/400",
    },
    {
      id: 5,
      title: "Web3 and the Future of Decentralized Applications",
      description:
        "Exploring how blockchain technology and decentralized protocols are reshaping the internet as we know it.",
      author: "Jordan Lee",
      date: "Dec 11, 2024",
      readTime: "8 min read",
      category: "Blockchain",
      image: "/api/placeholder/600/400",
    },
    {
      id: 6,
      title: "The State of JavaScript Frameworks in 2024",
      description:
        "A comprehensive analysis of the current JavaScript ecosystem, featuring the latest frameworks and their impact on modern web development.",
      author: "Chris Martinez",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Web Development",
      image: "/api/placeholder/600/400",
    },
  ];

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-6">
        <section className="relative min-h-screen flex items-center justify-center bg-background">
          <div className="container mx-auto px-6 py-16">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in px-4 md:px-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
                Fuel Your Mind
                <br />
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  With Daily Tech Hits
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl md:max-w-3xl mx-auto mt-4">
                Trends, breakthroughs, and bold takes — all in one scroll.
              </p>
            </div>

            {/* Featured Carousel */}
            <Carousel
              opts={{ loop: true }}
              setApi={setCarouselApi}
              className="animate-fade-in"
            >
              <CarouselContent>
                {articles.slice(0, 3).map((article) => (
                  <CarouselItem key={article.id} className="w-full px-2">
                    <Card
                      className="overflow-hidden border-card-border transition-all duration-300"
                      style={{ animation: "fade-in 0.5s ease-out forwards" }}
                    >
                      <div className="grid md:grid-cols-2 gap-0 h-full min-h-[450px]">
                        {/* Left Side */}
                        <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                          <span className="text-7xl font-black text-primary/30 tracking-tight">
                            Featured
                          </span>
                        </div>

                        {/* Right Side */}
                        <div className="p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              {article.trending && (
                                <Badge className="bg-primary text-primary-foreground">
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  Trending
                                </Badge>
                              )}
                              <Badge
                                variant="outline"
                                className="border-accent text-accent"
                              >
                                {article.category}
                              </Badge>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                              {article.title}
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 line-clamp-3">
                              {article.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {article.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {article.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {article.readTime}
                            </span>
                          </div>

                          <Button
                            className="bg-primary hover:bg-primary-hover text-primary-foreground group mt-auto w-fit"
                            onClick={() => navigate(`/news/${article.id}`)}
                          >
                            Read Full Article
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Article Grid */}
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article, index) => (
            <Card
              key={article.id}
              className="border-card-border hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-[1.02] overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold text-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {article.category.slice(0, 2).toUpperCase()}
                </span>
                {article.trending && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
              <CardHeader>
                <Badge
                  variant="outline"
                  className="mb-2 w-fit border-accent text-accent"
                >
                  {article.category}
                </Badge>
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">
                  {article.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn"
                    onClick={() => navigate(`/news/${article.id}`)}
                  >
                    Read
                    <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-2">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
