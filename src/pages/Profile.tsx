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
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

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

        {/* Activity Tabs */}
        <Card className="border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300">
          <CardHeader>
            <CardTitle>Activity</CardTitle>
            <CardDescription>
              Your recent activity and interactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full ">
              <TabsList className="grid w-full grid-cols-3 border border-primary/10 bg-gradient-to-br from-accent/5 via-primary/2 to-background transition-all duration-300">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="contributions">Contributions</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p>
                    Recent activity will appear here including job applications,
                    saved items, and more.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="applications" className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p>
                    Your job application history and status updates will be
                    displayed here.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="contributions" className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p>
                    Your contributions, comments, and community interactions
                    will be shown here.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
