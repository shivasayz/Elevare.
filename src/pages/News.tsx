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
import { useRef } from "react";

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
  const navigate = useNavigate();
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

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
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Tech News &
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {" "}
              Industry Insights
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay informed with the latest developments in technology
          </p>
        </div>

        {/* Featured Article */}
        <Carousel className="mb-10 animate-fade-in">
          <CarouselContent>
            {articles.slice(0, 3).map((article) => (
              <CarouselItem key={article.id} className="w-full px-2">
                <Card className="mb-8 overflow-hidden border-card-border hover:shadow-xl transition-all duration-300 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    {/* Left Side - Graphic */}
                    <div className="relative h-64 md:h-auto bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary/30">
                        Featured
                      </span>
                    </div>

                    {/* Right Side - Content */}
                    <div
                      className="p-6 md:p-8 flex flex-col"
                      style={{ minHeight: "350px" }}
                    >
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

                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                        {article.description}
                      </p>

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
                        className="bg-primary hover:bg-primary-hover text-primary-foreground group mt-auto"
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

        {/* Article Grid */}
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
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-border hover:bg-muted"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
