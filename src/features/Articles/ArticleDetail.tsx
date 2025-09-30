import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import img from "../../../public/author.jpeg";

import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook,
  Link,
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  trending?: boolean;
  views?: number;
  likes?: number;
  comments?: number;
}

const articles: Article[] = [
  {
    id: 1,
    title: "AI Revolution: GPT-5 Announced with Groundbreaking Capabilities",
    description:
      "OpenAI unveils the next generation of language models with unprecedented reasoning abilities and multimodal features that promise to transform industries.",
    content: `
      <div class="prose-content">
        <p class="lead-paragraph">The artificial intelligence landscape is about to witness another seismic shift. OpenAI has officially announced GPT-5, the latest iteration of their groundbreaking language model series, promising capabilities that far exceed its predecessors.</p>
        
        <h2>Revolutionary Capabilities</h2>
        <p>GPT-5 introduces several groundbreaking features that set it apart from previous models. The most notable advancement is its enhanced reasoning capability, allowing it to tackle complex problems with a level of sophistication previously thought impossible for AI systems.</p>
        
        <p>The model demonstrates unprecedented understanding of context, nuance, and even subtle implications in human communication. Early tests show that GPT-5 can maintain coherent conversations across extended periods, remembering details from earlier exchanges and applying them appropriately in new contexts.</p>
        
        <blockquote class="modern-quote">
          "GPT-5 represents a quantum leap in AI capabilities. We're not just seeing incremental improvements, but fundamental breakthroughs in how machines understand and interact with human language." 
          <cite>— Dr. Sarah Chen, AI Research Director</cite>
        </blockquote>
        
        <h2>Multimodal Integration</h2>
        <p>Perhaps the most exciting development is GPT-5's seamless multimodal integration. The model can now process and generate not just text, but also images, audio, and even video content. This opens up entirely new possibilities for creative applications, from automated content creation to sophisticated data analysis across multiple media types.</p>
        
        <div class="highlight-box">
          <h3>Key Features at a Glance</h3>
          <ul>
            <li><strong>Enhanced Reasoning:</strong> Complex problem-solving capabilities</li>
            <li><strong>Multimodal Processing:</strong> Text, image, audio, and video integration</li>
            <li><strong>Extended Context:</strong> Maintains coherence across longer conversations</li>
            <li><strong>Real-time Learning:</strong> Adapts to user preferences dynamically</li>
          </ul>
        </div>
        
        <h2>Industry Impact</h2>
        <p>The implications for various industries are profound. In healthcare, GPT-5 could assist in diagnosis and treatment planning with unprecedented accuracy. In education, it promises personalized learning experiences tailored to individual student needs. The creative industries are already exploring its potential for generating original content, from music to visual art.</p>
        
        <p>Early adopters in the tech industry report significant improvements in code generation, debugging, and system architecture planning. The model's ability to understand complex technical documentation and translate it into actionable insights is particularly noteworthy.</p>
        
        <h2>Ethical Considerations</h2>
        <p>With great power comes great responsibility. OpenAI has emphasized their commitment to responsible AI development, implementing robust safety measures and ethical guidelines. The company has established partnerships with various organizations to ensure GPT-5 is deployed in ways that benefit humanity while minimizing potential risks.</p>
        
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">175B+</div>
            <div class="stat-label">Parameters</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Languages Supported</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">99.7%</div>
            <div class="stat-label">Accuracy Rate</div>
          </div>
        </div>
        
        <h2>What's Next?</h2>
        <p>As we stand on the brink of this new era in artificial intelligence, the question isn't whether GPT-5 will change our world, but how quickly and profoundly it will do so. The technology promises to augment human capabilities in ways we're only beginning to imagine, potentially solving complex global challenges while creating entirely new opportunities for innovation and growth.</p>
        
        <p>The rollout is expected to begin in early 2025, with enterprise customers getting first access, followed by a broader public release. OpenAI has indicated that pricing will remain competitive while ensuring sustainable development of future iterations.</p>
      </div>
    `,
    author: "Sitarama Sastry",
    authorBio:
      "Senior AI Researcher and Tech Journalist with over 10 years of experience covering breakthrough technologies. Specializes in machine learning, natural language processing, and the societal impact of AI.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    trending: true,
    views: 12500,
    likes: 847,
    comments: 156,
  },
  // Add more articles here as needed
];

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const article =
    articles.find((a) => a.id === parseInt(id || "1")) || articles[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enhanced Sticky Header */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-lg border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/news")}
              className="gap-2 hover:bg-transparent hover:underline hover:text-black"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Button>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>/</span>
              <span className="truncate max-w-md font-medium">
                {article.title}
              </span>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">{article.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Share</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background border-b">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="space-y-6">
            {/* Category and Trending Badge */}
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary bg-primary/10 px-3 py-1"
              >
                {article.category}
              </Badge>
              {article.trending && (
                <Badge className="bg-gradient-to-r from-accent to-primary text-white px-3 py-1 rounded-full bg-clip-padding">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl pb-2 md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              {article.title}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              {article.description}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {/* Author info */}
              <div className="flex items-center gap-2">
                {/* ✅ Avatar/image first */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={img}
                    alt="Author"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* ✅ Author name and date */}
                <div className="min-w-0">
                  <p
                    className="font-medium text-foreground truncate"
                    title={article.author}
                  >
                    {article.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {article.date}
                  </p>
                </div>
              </div>

              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {article.views?.toLocaleString()} views
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {article.comments} comments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-4 gap-12">
        {/* Left - Article Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Content */}
          <div
            className="article-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Footer */}
          <div className="border-t pt-8 space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "AI",
                "GPT-5",
                "Machine Learning",
                "Technology",
                "Innovation",
              ].map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1">
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* Social Share */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Share this article:
                </span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </Button>
                  <Button size="sm" variant="outline">
                    <Link className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Heart className="w-4 h-4" />
                  {article.likes}
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Bookmark className="w-4 h-4" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Sidebar */}
        <div className="space-y-6 sticky top-24 self-start max-w-md">
          {/* Author Card */}
          <Card className="p-6 rounded-xl border border-primary/10 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
            <h3 className="font-semibold text-foreground mb-4">About Author</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  {img ? (
                    <img
                      src={img}
                      alt={article.author}
                      className="w-16 h-16 object-cover rounded-full shadow-lg ring-2 ring-primary/20"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-2xl font-bold ring-2 ring-primary/20">
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="min-w-0 group relative">
                  <h3 className="font-bold text-foreground truncate">
                    {article.author}
                  </h3>
                  {/* Custom tooltip for author name */}
                  {article.author.length > 20 && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      {article.author}
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground">AI Researcher</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.authorBio}
              </p>
              {/* <Button className="w-full bg-gradient-to-r from-primary to-accent text-white">
                Follow Author
              </Button> */}
            </div>
          </Card>

          {/* Article Stats */}
          <Card className="p-6 rounded-xl border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background">
            {" "}
            <h3 className="font-semibold text-foreground mb-4">
              Article Stats
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Views
                </span>
                <span className="font-medium">
                  {article.views?.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Likes
                </span>
                <span className="font-medium">{article.likes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Comments
                </span>
                <span className="font-medium">{article.comments}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Published
                </span>
                <span className="font-medium">{article.date}</span>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 rounded-xl border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background">
            {/* Card content */}{" "}
            <h3 className="font-semibold text-foreground mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full gap-2 ">
                <Share2 className="w-4 h-4" />
                Share Article
              </Button>
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Bookmark className="w-4 h-4" />
                Save for Later
              </Button>
              <Button variant="outline" size="sm" className="w-full gap-2">
                <MessageCircle className="w-4 h-4" />
                Join Discussion
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
