import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Tag, Package, ExternalLink, Star, Download, GitBranch, TrendingUp } from "lucide-react";

interface Release {
  id: number;
  name: string;
  version: string;
  date: string;
  type: string;
  description: string;
  changes: string[];
  stars?: number;
  downloads?: number;
  breaking?: boolean;
  category: "framework" | "library" | "tool" | "language";
}

export default function Releases() {
  const releases: Release[] = [
    {
      id: 1,
      name: "React",
      version: "19.0.0",
      date: "Dec 14, 2024",
      type: "Major Release",
      description: "The latest major version of React brings server components to stable, improved performance, and new hooks.",
      changes: [
        "Server Components now stable",
        "New use() hook for async data fetching",
        "Improved hydration performance",
        "Better TypeScript support",
      ],
      stars: 220000,
      downloads: 50000000,
      breaking: true,
      category: "framework",
    },
    {
      id: 2,
      name: "TypeScript",
      version: "5.4.0",
      date: "Dec 13, 2024",
      type: "Minor Release",
      description: "TypeScript 5.4 introduces new type narrowing capabilities and performance improvements.",
      changes: [
        "Improved type narrowing in closures",
        "New NoInfer utility type",
        "Faster incremental builds",
        "Object.groupBy support",
      ],
      stars: 95000,
      downloads: 80000000,
      category: "language",
    },
    {
      id: 3,
      name: "Vite",
      version: "5.1.0",
      date: "Dec 12, 2024",
      type: "Minor Release",
      description: "Vite continues to revolutionize frontend tooling with faster builds and better developer experience.",
      changes: [
        "Experimental support for .wasm imports",
        "Improved CSS code splitting",
        "Better error overlay",
        "Runtime performance improvements",
      ],
      stars: 62000,
      downloads: 15000000,
      category: "tool",
    },
    {
      id: 4,
      name: "Next.js",
      version: "14.1.0",
      date: "Dec 11, 2024",
      type: "Minor Release",
      description: "Next.js 14.1 brings improved performance and new features for building modern web applications.",
      changes: [
        "Turbopack improvements",
        "Parallel routes enhancements",
        "Better error handling",
        "Image optimization updates",
      ],
      stars: 115000,
      downloads: 30000000,
      breaking: false,
      category: "framework",
    },
    {
      id: 5,
      name: "TailwindCSS",
      version: "3.5.0",
      date: "Dec 10, 2024",
      type: "Minor Release",
      description: "New utilities and improvements to the world's most popular utility-first CSS framework.",
      changes: [
        "New color palette options",
        "Improved container queries",
        "Better RTL support",
        "Performance optimizations",
      ],
      stars: 75000,
      downloads: 25000000,
      category: "library",
    },
    {
      id: 6,
      name: "Bun",
      version: "1.1.0",
      date: "Dec 9, 2024",
      type: "Minor Release",
      description: "The all-in-one JavaScript runtime continues to improve with better compatibility and performance.",
      changes: [
        "Windows support improvements",
        "Better Node.js compatibility",
        "Faster package installation",
        "New bundler features",
      ],
      stars: 68000,
      downloads: 5000000,
      category: "tool",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "framework":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "library":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "tool":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      case "language":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filterByCategory = (category: string) => {
    if (category === "all") return releases;
    return releases.filter((release) => release.category === category);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Latest Software
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Releases</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Track the latest versions of popular frameworks, libraries, and tools
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-5 bg-muted">
            <TabsTrigger value="all">All Releases</TabsTrigger>
            <TabsTrigger value="framework">Frameworks</TabsTrigger>
            <TabsTrigger value="library">Libraries</TabsTrigger>
            <TabsTrigger value="tool">Tools</TabsTrigger>
            <TabsTrigger value="language">Languages</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <ReleaseGrid releases={releases} getCategoryColor={getCategoryColor} />
          </TabsContent>
          <TabsContent value="framework" className="mt-6">
            <ReleaseGrid releases={filterByCategory("framework")} getCategoryColor={getCategoryColor} />
          </TabsContent>
          <TabsContent value="library" className="mt-6">
            <ReleaseGrid releases={filterByCategory("library")} getCategoryColor={getCategoryColor} />
          </TabsContent>
          <TabsContent value="tool" className="mt-6">
            <ReleaseGrid releases={filterByCategory("tool")} getCategoryColor={getCategoryColor} />
          </TabsContent>
          <TabsContent value="language" className="mt-6">
            <ReleaseGrid releases={filterByCategory("language")} getCategoryColor={getCategoryColor} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ReleaseGrid({ releases, getCategoryColor }: { releases: Release[]; getCategoryColor: (category: string) => string }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {releases.map((release, index) => (
        <Card
          key={release.id}
          className="border-card-border hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-[1.02] overflow-hidden"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardHeader>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                <CardTitle className="text-xl">{release.name}</CardTitle>
              </div>
              <Badge className={getCategoryColor(release.category)}>
                {release.category}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-accent text-accent font-mono">
                v{release.version}
              </Badge>
              {release.breaking && (
                <Badge variant="destructive">Breaking Changes</Badge>
              )}
              <Badge variant="secondary">
                {release.type}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">
              {release.description}
            </CardDescription>
            
            {/* Stats */}
            {(release.stars || release.downloads) && (
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                {release.stars && (
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {(release.stars / 1000).toFixed(0)}k
                  </span>
                )}
                {release.downloads && (
                  <span className="flex items-center gap-1">
                    <Download className="w-4 h-4 text-green-500" />
                    {(release.downloads / 1000000).toFixed(0)}M
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {release.date}
                </span>
              </div>
            )}

            {/* Changes */}
            <div className="space-y-1 mb-4">
              <p className="text-sm font-medium text-foreground mb-2">Key Changes:</p>
              <ul className="space-y-1">
                {release.changes.slice(0, 3).map((change, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="line-clamp-1">{change}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button size="sm" className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground">
                <ExternalLink className="w-4 h-4 mr-1" />
                View Details
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <GitBranch className="w-4 h-4 mr-1" />
                Changelog
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}