import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  TrendingUp,
} from "lucide-react";

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
    author: "Sarah Chen",
    authorBio:
      "Senior AI Researcher and Tech Journalist with over 10 years of experience covering breakthrough technologies.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    trending: true,
  },
  // Add more articles here as needed
];

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const article =
    articles.find((a) => a.id === parseInt(id || "1")) || articles[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <div className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/releases")}
                className="gap-2 hover:bg-transparent hover:underline hover:text-black"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Releases
              </Button>
              <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                <span>/</span>
                <span>{article.title}</span>
                {/* <span>/</span> */}
                {/* <span className="text-foreground font-medium">
                  {article.category}
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
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

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            {article.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
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

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent/10"
              >
                <Share2 className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent/10"
              >
                <Bookmark className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        <Separator className="mb-8" />

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <Separator className="my-8" />

        {/* Author Bio */}
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            About the Author
          </h3>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
              {article.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="font-medium text-foreground">{article.author}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {article.authorBio}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
