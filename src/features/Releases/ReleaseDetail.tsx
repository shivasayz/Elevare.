import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  Download,
  Star,
  Package,
  GitBranch,
  AlertTriangle,
  CheckCircle2,
  Code2,
  BookOpen,
  ExternalLink,
  Bookmark,
} from "lucide-react";
import { useEffect } from "react";

// Mock release data - in a real app, this would come from an API
const releasesData = [
  {
    id: 1,
    name: "React",
    version: "19.0.0",
    date: "Dec 14, 2024",
    category: "framework",
    description: "The library for building user interfaces",
    fullDescription:
      "React 19.0.0 brings significant improvements to server-side rendering, concurrent features, and developer experience. This release focuses on stability and performance enhancements while maintaining backward compatibility.",
    changes: [
      "Server Components now stable",
      "New use() hook for async data fetching",
      "Improved hydration performance",
      "Better TypeScript support",
    ],
    breakingChanges: [
      "Deprecated ReactDOM.render in favor of createRoot",
      "Stricter TypeScript types for better type safety",
      "Changes to automatic batching behavior",
    ],
    stars: 220000,
    downloads: 50000000,
    breaking: true,
    documentation: "https://react.dev/blog/2024/12/14/react-19-0-0",
    github: "https://github.com/facebook/react",
    dependencies: {
      "react-dom": "^19.0.0",
      scheduler: "^0.24.0",
    },
    installation: "npm install react@19.0.0",
  },
  {
    id: 2,
    name: "TypeScript",
    version: "5.4.0",
    date: "Dec 13, 2024",
    category: "language",
    description: "Typed superset of JavaScript",
    fullDescription:
      "TypeScript 5.4.0 brings powerful new type system features, improved performance, and better developer ergonomics. This release includes significant improvements to type inference and introduces new utility types.",
    changes: [
      "Improved type narrowing in closures",
      "New NoInfer utility type",
      "Faster incremental builds",
      "Object.groupBy support",
    ],
    breakingChanges: [
      "Stricter checks for indexed access types",
      "Changes to generic inference behavior",
    ],
    stars: 95000,
    downloads: 80000000,
    breaking: false,
    documentation:
      "https://devblogs.microsoft.com/typescript/announcing-typescript-5-4/",
    github: "https://github.com/microsoft/TypeScript",
    dependencies: {},
    installation: "npm install -D typescript@5.4.0",
  },
  {
    id: 3,
    name: "Vite",
    version: "5.1.0",
    date: "Dec 12, 2024",
    category: "tool",
    description: "Next generation frontend tooling",
    fullDescription:
      "Vite 5.1.0 introduces enhanced build optimization, improved HMR performance, and better framework integration. This release significantly reduces cold start times and improves the overall development experience.",
    changes: [
      "Experimental support for .wasm imports",
      "Improved CSS code splitting",
      "Better error overlay",
      "Runtime performance improvements",
    ],
    breakingChanges: [],
    stars: 62000,
    downloads: 15000000,
    breaking: false,
    documentation: "https://vitejs.dev/guide/",
    github: "https://github.com/vitejs/vite",
    dependencies: {
      esbuild: "^0.20.0",
      rollup: "^4.13.0",
    },
    installation: "npm create vite@latest",
  },
  {
    id: 4,
    name: "Next.js",
    version: "14.1.0",
    date: "Dec 11, 2024",
    category: "framework",
    description: "The React Framework",
    fullDescription:
      "Next.js 14.1.0 continues to push the boundaries of React applications with improved performance, better developer experience, and new features for building modern web applications.",
    changes: [
      "Turbopack improvements",
      "Parallel routes enhancements",
      "Better error handling",
      "Image optimization updates",
    ],
    breakingChanges: [],
    stars: 115000,
    downloads: 30000000,
    breaking: false,
    documentation: "https://nextjs.org/docs",
    github: "https://github.com/vercel/next.js",
    dependencies: {
      react: "^18.0.0 || ^19.0.0",
      "react-dom": "^18.0.0 || ^19.0.0",
    },
    installation: "npx create-next-app@latest",
  },
  {
    id: 5,
    name: "TailwindCSS",
    version: "3.5.0",
    date: "Dec 10, 2024",
    category: "library",
    description: "Utility-first CSS framework",
    fullDescription:
      "TailwindCSS 3.5.0 brings new utilities and improvements to the world's most popular utility-first CSS framework, making it even easier to build beautiful, responsive designs.",
    changes: [
      "New color palette options",
      "Improved container queries",
      "Better RTL support",
      "Performance optimizations",
    ],
    breakingChanges: [],
    stars: 75000,
    downloads: 25000000,
    breaking: false,
    documentation: "https://tailwindcss.com/docs",
    github: "https://github.com/tailwindlabs/tailwindcss",
    dependencies: {
      postcss: "^8.4.0",
      autoprefixer: "^10.4.0",
    },
    installation: "npm install -D tailwindcss",
  },
  {
    id: 6,
    name: "Bun",
    version: "1.1.0",
    date: "Dec 9, 2024",
    category: "tool",
    description: "All-in-one JavaScript runtime",
    fullDescription:
      "Bun 1.1.0 continues to revolutionize JavaScript development with improved Windows support, better Node.js compatibility, and blazing-fast performance for all your JavaScript needs.",
    changes: [
      "Windows support improvements",
      "Better Node.js compatibility",
      "Faster package installation",
      "New bundler features",
    ],
    breakingChanges: [],
    stars: 68000,
    downloads: 5000000,
    breaking: false,
    documentation: "https://bun.sh/docs",
    github: "https://github.com/oven-sh/bun",
    dependencies: {},
    installation: "curl -fsSL https://bun.sh/install | bash",
  },
];

const ReleaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const release = releasesData.find((r) => r.id === parseInt(id || "0"));

  if (!release) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Release not found
          </h2>
          <p className="text-muted-foreground mb-4">
            The release you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/releases")} variant="outline">
            Back to Releases
          </Button>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
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
                <span>{release.name}</span>
                <span>/</span>
                <span className="text-foreground font-medium">
                  {release.version}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Bookmark className="h-4 w-4 mr-1" />
                Save Release
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Release Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{release.name}</h1>
                <Badge className={getCategoryColor(release.category)}>
                  {release.category}
                </Badge>
                {release.breaking && (
                  <Badge variant="destructive" className="gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    Breaking Changes
                  </Badge>
                )}
              </div>
              <p className="text-xl text-muted-foreground mb-4">
                Version {release.version}
              </p>
              <p className="text-muted-foreground max-w-3xl">
                {release.fullDescription}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="font-medium">
                {release.stars.toLocaleString()}
              </span>
              <span className="text-muted-foreground">stars</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Download className="h-4 w-4 text-green-500" />
              <span className="font-medium">
                {release.downloads.toLocaleString()}
              </span>
              <span className="text-muted-foreground">downloads</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Released {release.date}
              </span>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Installation */}
        <Card className="p-6 mb-6 border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Package className="h-5 w-5" />
            Installation
          </h2>
          <div className="bg-muted rounded-lg p-4 font-mono text-sm">
            {release.installation}
          </div>
        </Card>

        {/* What's New */}
        <Card className="p-6 mb-6 border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            What's New
          </h2>
          <ul className="space-y-2">
            {release.changes.map((change, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{change}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Breaking Changes */}
        {release.breakingChanges.length > 0 && (
          <Card className="p-6 mb-6 border-destructive/20 bg-destructive/5">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Breaking Changes
            </h2>
            <ul className="space-y-2">
              {release.breakingChanges.map((change, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{change}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Dependencies */}
        {Object.keys(release.dependencies).length > 0 && (
          <Card className="p-6 mb-6 border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Dependencies
            </h2>
            <div className="space-y-2">
              {Object.entries(release.dependencies).map(([name, version]) => (
                <div
                  key={name}
                  className="flex items-center justify-between py-2 px-3 bg-muted/50 rounded-lg"
                >
                  <span className="font-mono text-sm">{name}</span>
                  <span className="text-sm text-muted-foreground">
                    {version}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => window.open(release.documentation, "_blank")}
            className="gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Documentation
            <ExternalLink className="h-3 w-3" />
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open(release.github, "_blank")}
            className="gap-2"
          >
            <Code2 className="h-4 w-4" />
            View on GitHub
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>

        {/* Changelog Section */}
        {/* <Card id="changelog" className="overflow-hidden mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Changelog
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div className="space-y-1">
                  <p className="font-medium">Added new API endpoints for authentication</p>
                  <p className="text-sm text-muted-foreground">Includes OAuth2 support and JWT token management</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div className="space-y-1">
                  <p className="font-medium">Improved performance by 40%</p>
                  <p className="text-sm text-muted-foreground">Optimized database queries and caching mechanisms</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div className="space-y-1">
                  <p className="font-medium">Fixed critical security vulnerability</p>
                  <p className="text-sm text-muted-foreground">Addressed XSS vulnerability in user input handling</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-destructive mt-2"></div>
                <div className="space-y-1">
                  <p className="font-medium">Deprecated legacy API v1</p>
                  <p className="text-sm text-muted-foreground">Users should migrate to v2 before next major release</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default ReleaseDetail;
