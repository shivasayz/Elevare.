import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/features/Home/Footer";
import {
  Mail,
  MapPin,
  Calendar,
  CreditCard as Edit,
  ArrowLeft,
  Briefcase,
  Newspaper,
  Package,
  FileText,
  Search,
  Bookmark,
  Settings as SettingsIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/author.jpeg",
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    joinDate: "January 2024",
    bio: "Passionate about building scalable web applications and exploring new technologies. Always learning, always growing.",
    stats: {
      savedJobs: 12,
      savedArticles: 28,
      savedReleases: 15,
    },
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <main className="container mx-auto px-4 py-8 pt-28 max-w-6xl">
        {/* Back Button */}
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="gap-2 hover:bg-transparent hover:underline hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Profile Header */}
        <Card className="mb-8 animate-fade-in border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">
                      {user.name}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      {user.title}
                    </p>
                  </div>
                  <Link to="/settings">
                    <Button variant="outline">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </Link>
                </div>

                <p className="text-muted-foreground max-w-2xl">{user.bio}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {user.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {user.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {user.joinDate}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">
                Saved Jobs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {user.stats.savedJobs}
              </div>
              <p className="text-sm text-muted-foreground">
                Active opportunities
              </p>
            </CardContent>
          </Card>
          <Card className="border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">
                Saved Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {user.stats.savedArticles}
              </div>
              <p className="text-sm text-muted-foreground">
                Tech news & insights
              </p>
            </CardContent>
          </Card>
          <Card className="border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium">
                Saved Releases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {user.stats.savedReleases}
              </div>
              <p className="text-sm text-muted-foreground">Software updates</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Saved Items */}
        <Card className="mb-8 border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300">
          <CardHeader>
            <CardTitle>Recent Saved Items</CardTitle>
            <CardDescription>
              Your latest bookmarked jobs, articles, and releases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Saved Job */}
              <Link to="/jobs/1" className="block group">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Senior React Developer
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tech Corp • Remote • Saved 2 days ago
                    </p>
                  </div>
                  <Bookmark className="h-5 w-5 text-primary fill-primary" />
                </div>
              </Link>

              {/* Saved Article */}
              <Link to="/news/1" className="block group">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Newspaper className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      The Future of AI in Web Development
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tech News • Saved 3 days ago
                    </p>
                  </div>
                  <Bookmark className="h-5 w-5 text-primary fill-primary" />
                </div>
              </Link>

              {/* Saved Release */}
              <Link to="/releases/1" className="block group">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      React 19.0 Released
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Facebook • Saved 5 days ago
                    </p>
                  </div>
                  <Bookmark className="h-5 w-5 text-primary fill-primary" />
                </div>
              </Link>

              <Link to="/saved">
                <Button variant="outline" className="w-full mt-2">
                  View All Saved Items
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/jobs">
                <div className="p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300 hover:shadow-md hover:border-primary/20 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Search className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Browse Jobs
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Find your next opportunity
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/news">
                <div className="p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300 hover:shadow-md hover:border-primary/20 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Newspaper className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Latest News
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Stay updated with tech
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/releases">
                <div className="p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300 hover:shadow-md hover:border-primary/20 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        New Releases
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Discover latest updates
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/settings">
                <div className="p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300 hover:shadow-md hover:border-primary/20 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <SettingsIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Settings
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Manage your profile
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
