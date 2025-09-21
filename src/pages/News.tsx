import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock, User, ArrowRight, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const articles: Article[] = [
    {
      id: 1,
      title: "AI Revolution: GPT-5 Announced with Groundbreaking Capabilities",
      description: "OpenAI unveils the next generation of language models with unprecedented reasoning abilities and multimodal features that promise to transform industries.",
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
      description: "IBM researchers announce a major milestone in quantum computing, bringing practical quantum applications closer to reality.",
      author: "Dr. Michael Roberts",
      date: "Dec 14, 2024",
      readTime: "7 min read",
      category: "Quantum Computing",
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "The Rise of Edge Computing in 2024",
      description: "How edge computing is revolutionizing data processing and enabling real-time applications across industries from healthcare to autonomous vehicles.",
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
      description: "Security researchers uncover critical vulnerability affecting millions of devices worldwide. Here's what you need to know.",
      author: "Alex Thompson",
      date: "Dec 12, 2024",
      readTime: "4 min read",
      category: "Security",
      image: "/api/placeholder/600/400",
    },
    {
      id: 5,
      title: "Web3 and the Future of Decentralized Applications",
      description: "Exploring how blockchain technology and decentralized protocols are reshaping the internet as we know it.",
      author: "Jordan Lee",
      date: "Dec 11, 2024",
      readTime: "8 min read",
      category: "Blockchain",
      image: "/api/placeholder/600/400",
    },
    {
      id: 6,
      title: "The State of JavaScript Frameworks in 2024",
      description: "A comprehensive analysis of the current JavaScript ecosystem, featuring the latest frameworks and their impact on modern web development.",
      author: "Chris Martinez",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Web Development",
      image: "/api/placeholder/600/400",
    },
  ];

  const trendingArticles = articles.filter(article => article.trending);
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Tech News &
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Industry Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay informed with the latest developments in technology
          </p>
        </div>

        {/* Trending Articles Carousel */}
        {trendingArticles.length > 0 && (
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Trending Now
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{trendingArticles.length} trending articles</span>
              </div>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {trendingArticles.slice(0, 5).map((article, index) => (
                  <CarouselItem key={article.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <Card 
                      className="h-full border-card-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => navigate(`/news/${article.id}`)}
                    >
                      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                        <span className="text-4xl font-bold text-primary/20 group-hover:scale-110 transition-transform duration-300">
                          {article.category.slice(0, 2).toUpperCase()}
                        </span>
                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      </div>
                      <CardHeader>
                        <Badge variant="outline" className="mb-2 w-fit border-accent text-accent">
                          {article.category}
                        </Badge>
                        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="line-clamp-2 mb-4">
                          {article.description}
                        </CardDescription>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                          <Button variant="ghost" size="sm" className="group/btn">
                            Read
                            <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
            
            {/* Dots Indicator - Always show 5 dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index < trendingArticles.length 
                      ? 'bg-primary hover:bg-primary-hover' 
                      : 'bg-muted-foreground/20'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Featured Article */}
        <Card className="mb-8 overflow-hidden border-card-border hover:shadow-xl transition-all duration-300 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <span className="text-6xl font-bold text-primary/30">Featured</span>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
                <Badge variant="outline" className="border-accent text-accent">
                  {featuredArticle.category}
                </Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {featuredArticle.title}
              </h2>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {featuredArticle.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {featuredArticle.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredArticle.readTime}
                </span>
              </div>
              <Button 
                className="bg-primary hover:bg-primary-hover text-primary-foreground group"
                onClick={() => navigate(`/news/${featuredArticle.id}`)}
              >
                Read Full Article
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Card>

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
                <Badge variant="outline" className="mb-2 w-fit border-accent text-accent">
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
                  <Button variant="ghost" size="sm" className="group/btn" onClick={() => navigate(`/news/${article.id}`)}>
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
          <Button variant="outline" size="lg" className="border-2 border-border hover:bg-muted">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}