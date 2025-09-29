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
}

const articles: Article[] = [
  {
    id: 1,
    title: "AI Revolution: GPT-5 Announced with Groundbreaking Capabilities",
    description:
      "OpenAI unveils the next generation of language models with unprecedented reasoning abilities and multimodal features that promise to transform industries.",
    content: `
      <p>The artificial intelligence landscape is about to witness another seismic shift. OpenAI has officially announced GPT-5, the latest iteration of their groundbreaking language model series, promising capabilities that far exceed its predecessors.</p>
      
      <h2>Revolutionary Capabilities</h2>
      <p>GPT-5 introduces several groundbreaking features that set it apart from previous models. The most notable advancement is its enhanced reasoning capability, allowing it to tackle complex problems with a level of sophistication previously thought impossible for AI systems.</p>
      
      <p>The model demonstrates unprecedented understanding of context, nuance, and even subtle implications in human communication. Early tests show that GPT-5 can maintain coherent conversations across extended periods, remembering details from earlier exchanges and applying them appropriately in new contexts.</p>
      
      <h2>Multimodal Integration</h2>
      <p>Perhaps the most exciting development is GPT-5's seamless multimodal integration. The model can now process and generate not just text, but also images, audio, and even video content. This opens up entirely new possibilities for creative applications, from automated content creation to sophisticated data analysis across multiple media types.</p>
      
      <h2>Industry Impact</h2>
      <p>The implications for various industries are profound. In healthcare, GPT-5 could assist in diagnosis and treatment planning with unprecedented accuracy. In education, it promises personalized learning experiences tailored to individual student needs. The creative industries are already exploring its potential for generating original content, from music to visual art.</p>
      
      <h2>Ethical Considerations</h2>
      <p>With great power comes great responsibility. OpenAI has emphasized their commitment to responsible AI development, implementing robust safety measures and ethical guidelines. The company has established partnerships with various organizations to ensure GPT-5 is deployed in ways that benefit humanity while minimizing potential risks.</p>
      
      <h2>What's Next?</h2>
      <p>As we stand on the brink of this new era in artificial intelligence, the question isn't whether GPT-5 will change our world, but how quickly and profoundly it will do so. The technology promises to augment human capabilities in ways we're only beginning to imagine, potentially solving complex global challenges while creating entirely new opportunities for innovation and growth.</p>
    `,
    author: "Sirivennala Sitarama Sastry",
    authorBio:
      "Senior AI Researcher and Tech Journalist with over 10 years of experience covering breakthrough technologies.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    trending: true,
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
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-lg border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/news")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Button>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>/</span>
              <span className="truncate max-w-md">{article.title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8 flex-1">
        {/* Left - Article Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="border-primary text-primary">
                {article.category}
              </Badge>
              {article.trending && (
                <Badge className="bg-primary text-primary-foreground">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>

            <h1 className="text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {article.title}
            </h1>

            <p className="text-lg text-muted-foreground mt-2 font-medium tracking-wide">
              {article.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
          </div>

          <Separator className="bg-gradient-to-r from-transparent via-muted to-transparent" />

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:font-medium prose-p:tracking-wide text-justify"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Right - Sidebar */}
        <div className="space-y-6 sticky top-20 self-start">
          {/* Quick Actions */}
          <Card className="p-6 bg-primary/5 border border-primary/10 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Actions
            </h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
            </div>
          </Card>

          {/* Article Info */}
          <Card className="p-6 bg-background border border-border rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Article Info
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Category:</span>
                <span className="font-medium text-foreground">
                  {article.category}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Published:</span>
                <span className="font-medium text-foreground">
                  {article.date}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Reading Time:</span>
                <span className="font-medium text-foreground">
                  {article.readTime}
                </span>
              </li>
            </ul>
          </Card>

          {/* Author Card */}
          <Card className="p-6 border border-primary/10 bg-background rounded-md shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 relative">
                {img ? (
                  <img
                    src={img}
                    alt={article.author}
                    className="w-20 h-20 rounded-full object-cover shadow ring-2 ring-primary/20"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-2xl font-bold ring-2 ring-primary/20">
                    {article.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <p className="text-xl font-bold text-foreground">
                {article.author}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {article.authorBio}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
