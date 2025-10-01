import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navbar } from "../components/Navbar";
import { Footer } from "@/features/Home/Footer";
import {
  Bookmark,
  Briefcase,
  Newspaper,
  Package,
  MapPin,
  Building2,
  Clock,
  ExternalLink,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

const SavedItems = () => {
  const savedJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: true,
      savedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "New York, NY",
      type: "Full-time",
      remote: false,
      savedDate: "1 week ago",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Remote",
      type: "Contract",
      remote: true,
      savedDate: "2 weeks ago",
    },
  ];
  const savedArticles = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      author: "Jane Smith",
      source: "TechBlog",
      readTime: "5 min read",
      savedDate: "1 day ago",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      category: "AI",
    },
    {
      id: 2,
      title: "React 19: What's New and Improved",
      author: "John Doe",
      source: "Dev Weekly",
      readTime: "8 min read",
      savedDate: "3 days ago",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      category: "React",
    },
    {
      id: 3,
      title: "Best Practices for TypeScript in 2024",
      author: "Sarah Johnson",
      source: "Code Magazine",
      readTime: "10 min read",
      savedDate: "5 days ago",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400",
      category: "TypeScript",
    },
  ];

  const savedReleases = [
    {
      id: 1,
      name: "Node.js",
      version: "v21.5.0",
      releaseDate: "December 19, 2023",
      type: "Major Release",
      savedDate: "3 days ago",
    },
    {
      id: 2,
      name: "TypeScript",
      version: "5.3.3",
      releaseDate: "December 5, 2023",
      type: "Patch Release",
      savedDate: "1 week ago",
    },
    {
      id: 3,
      name: "React",
      version: "18.3.0-canary",
      releaseDate: "December 15, 2023",
      type: "Canary",
      savedDate: "2 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <main className="container mx-auto px-4 py-8 pt-28 max-w-6xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Bookmark className="h-8 w-8" />
            Saved Items
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your bookmarked jobs, articles, and releases
          </p>
        </div>

        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-muted/50">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              Articles ({savedArticles.length})
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Jobs ({savedJobs.length})
            </TabsTrigger>
            <TabsTrigger value="releases" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Releases ({savedReleases.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-4">
            <div className="grid gap-4">
              {savedArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                        <span className="text-2xl font-bold text-primary/40">
                          {article.category.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2 text-xs">
                              {article.category}
                            </Badge>
                            <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                              <Link to={`/news/${article.id}`}>{article.title}</Link>
                            </h3>
                          </div>
                          <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>By {article.author}</span>
                          <span>•</span>
                          <span>{article.source}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Saved {article.savedDate}
                          </span>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link to={`/news/${article.id}`}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Read
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-4">
            <div className="grid gap-4">
              {savedJobs.map((job, index) => (
                <Card 
                  key={job.id} 
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground hover:text-primary">
                          <Link to="#">{job.title}</Link>
                        </h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{job.type}</Badge>
                        {job.remote && <Badge variant="outline">Remote</Badge>}
                        <span className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Saved {job.savedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm">Apply Now</Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="releases" className="space-y-4">
            <div className="grid gap-4">
              {savedReleases.map((release, index) => (
                <Card
                  key={release.id}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {release.name}
                        </h3>
                        <Badge>{release.version}</Badge>
                        <Badge variant="outline">{release.type}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Released on {release.releaseDate}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Saved {release.savedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Empty State Example (commented out, shown when no items) */}
        {/* <Card className="text-center py-12">
          <CardContent>
            <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No saved items yet</h3>
            <p className="text-muted-foreground">Start saving jobs, articles, and releases to access them here</p>
          </CardContent>
        </Card> */}
      </main>
      <Footer />
    </div>
  );
};

export default SavedItems;
