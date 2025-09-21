import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Package, Calendar, Tag, GitBranch, Download, Star, CheckCircle, AlertCircle, ExternalLink, Code, Book } from "lucide-react";

interface Release {
  id: number;
  name: string;
  version: string;
  date: string;
  type: string;
  description: string;
  changes: string[];
  breakingChanges?: string[];
  bugFixes?: string[];
  features?: string[];
  stars?: number;
  downloads?: number;
  breaking?: boolean;
  category: "framework" | "library" | "tool" | "language";
  installCommand?: string;
  documentation?: string;
  repository?: string;
}

const releases: Release[] = [
  {
    id: 1,
    name: "React",
    version: "19.0.0",
    date: "Dec 14, 2024",
    type: "Major Release",
    description: "The latest major version of React brings server components to stable, improved performance, and new hooks for building modern web applications.",
    changes: [
      "Server Components now stable",
      "New use() hook for async data fetching",
      "Improved hydration performance",
      "Better TypeScript support",
    ],
    features: [
      "Server Components provide seamless integration between server and client",
      "The new use() hook simplifies async operations in components",
      "Automatic batching improvements reduce re-renders",
      "Enhanced Suspense boundaries for better loading states",
    ],
    breakingChanges: [
      "Deprecated componentWillMount and other legacy lifecycle methods removed",
      "Changes to event delegation system",
      "StrictMode now double-invokes effects in development",
    ],
    bugFixes: [
      "Fixed memory leak in useEffect cleanup",
      "Resolved hydration mismatches in edge cases",
      "Improved error boundaries behavior",
    ],
    stars: 220000,
    downloads: 50000000,
    breaking: true,
    category: "framework",
    installCommand: "npm install react@latest react-dom@latest",
    documentation: "https://react.dev",
    repository: "https://github.com/facebook/react",
  },
  {
    id: 2,
    name: "TypeScript",
    version: "5.4.0",
    date: "Dec 13, 2024",
    type: "Minor Release",
    description: "TypeScript 5.4 introduces new type narrowing capabilities and performance improvements for better developer experience.",
    changes: [
      "Improved type narrowing in closures",
      "New NoInfer utility type",
      "Faster incremental builds",
      "Object.groupBy support",
    ],
    features: [
      "NoInfer utility type prevents unwanted type inference",
      "Improved narrowing for indexed access with type predicates",
      "Support for the upcoming Object.groupBy and Map.groupBy",
    ],
    stars: 95000,
    downloads: 80000000,
    category: "language",
    installCommand: "npm install -D typescript@5.4.0",
    documentation: "https://www.typescriptlang.org",
    repository: "https://github.com/microsoft/TypeScript",
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
    features: [
      "WebAssembly modules can now be imported directly",
      "CSS code splitting reduces bundle sizes",
      "Enhanced error overlay with better stack traces",
      "Faster HMR with optimized module graph traversal",
    ],
    bugFixes: [
      "Fixed CSS injection order issues",
      "Resolved memory leaks in dev server",
      "Improved Windows path handling",
    ],
    stars: 62000,
    downloads: 15000000,
    category: "tool",
    installCommand: "npm create vite@latest",
    documentation: "https://vitejs.dev",
    repository: "https://github.com/vitejs/vite",
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
    features: [
      "Native Windows support with improved performance",
      "Enhanced Node.js compatibility layer",
      "30% faster package installation",
      "New tree-shaking optimizations in bundler",
    ],
    stars: 68000,
    downloads: 5000000,
    category: "tool",
    installCommand: "curl -fsSL https://bun.sh/install | bash",
    documentation: "https://bun.sh",
    repository: "https://github.com/oven-sh/bun",
  },
];

export default function ReleaseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const release = releases.find((r) => r.id === parseInt(id || "1")) || releases[0];

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "framework":
        return "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20";
      case "library":
        return "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20";
      case "tool":
        return "bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20";
      case "language":
        return "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <div className="sticky top-16 z-10 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/releases")}
            className="gap-2 hover:bg-accent/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Releases
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="animate-fade-in">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Package className="w-8 h-8 text-primary" />
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">{release.name}</h1>
                    <p className="text-muted-foreground">Version {release.version}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <Badge variant="outline" className="border-primary text-primary">
                    {release.category}
                  </Badge>
                  {release.breaking && (
                    <Badge variant="destructive">Breaking Changes</Badge>
                  )}
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                {release.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {release.stars && (
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {(release.stars / 1000).toFixed(0)}k stars
                  </span>
                )}
                {release.downloads && (
                  <span className="flex items-center gap-1">
                    <Download className="w-4 h-4 text-green-500" />
                    {(release.downloads / 1000000).toFixed(0)}M downloads
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {release.date}
                </span>
              </div>
            </div>

            <Separator />

            {/* Features */}
            {release.features && (
              <Card className="border-green-500/20 bg-green-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    New Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {release.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Breaking Changes */}
            {release.breakingChanges && (
              <Card className="border-red-500/20 bg-red-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    Breaking Changes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {release.breakingChanges.map((change, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-muted-foreground">{change}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Bug Fixes */}
            {release.bugFixes && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-primary" />
                    Bug Fixes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {release.bugFixes.map((fix, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{fix}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Installation */}
            {release.installCommand && (
              <Card className={getCategoryStyles(release.category)}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Installation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-background/80 rounded-lg p-3 font-mono text-sm">
                    {release.installCommand}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {release.documentation && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href={release.documentation} target="_blank" rel="noopener noreferrer">
                      <Book className="w-4 h-4 mr-2" />
                      Documentation
                      <ExternalLink className="w-3 h-3 ml-auto" />
                    </a>
                  </Button>
                )}
                {release.repository && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href={release.repository} target="_blank" rel="noopener noreferrer">
                      <GitBranch className="w-4 h-4 mr-2" />
                      Repository
                      <ExternalLink className="w-3 h-3 ml-auto" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Release Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Release Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Version</p>
                  <p className="font-medium">{release.version}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Release Date</p>
                  <p className="font-medium">{release.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Release Type</p>
                  <p className="font-medium">{release.type}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}