import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Building2,
  Clock,
  DollarSign,
  Search,
  Filter,
  Bookmark,
} from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  tags: string[];
  featured?: boolean;
}

export default function Jobs() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("all");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Mock data
  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      logo: "TC",
      location: "San Francisco, CA",
      type: "Remote",
      salary: "$120k - $180k",
      posted: "2 days ago",
      tags: ["React", "TypeScript", "Tailwind"],
      featured: true,
    },
    {
      id: 2,
      title: "Product Designer",
      company: "DesignHub",
      logo: "DH",
      location: "New York, NY",
      type: "Hybrid",
      salary: "$90k - $130k",
      posted: "5 days ago",
      tags: ["Figma", "UI/UX", "Prototyping"],
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudBase",
      logo: "CB",
      location: "Austin, TX",
      type: "On-site",
      salary: "$110k - $160k",
      posted: "1 week ago",
      tags: ["AWS", "Docker", "Kubernetes"],
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      logo: "SX",
      location: "Seattle, WA",
      type: "Remote",
      salary: "$100k - $150k",
      posted: "3 days ago",
      tags: ["Node.js", "React", "MongoDB"],
      featured: true,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "DataCo",
      logo: "DC",
      location: "Boston, MA",
      type: "Hybrid",
      salary: "$130k - $180k",
      posted: "1 day ago",
      tags: ["Python", "ML", "TensorFlow"],
    },
    {
      id: 6,
      title: "Mobile Developer",
      company: "AppWorks",
      logo: "AW",
      location: "Los Angeles, CA",
      type: "Remote",
      salary: "$95k - $140k",
      posted: "4 days ago",
      tags: ["React Native", "iOS", "Android"],
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      filterLocation === "all" || job.location.includes(filterLocation);
    const matchesType = filterType === "all" || job.type === filterType;
    return matchesSearch && matchesLocation && matchesType;
  });

  const handleApply = (jobId: number) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-28 pb-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Discover Your Next
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {" "}
              Tech Opportunity
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse {jobs.length}+ open positions from top tech companies
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl shadow-sm p-6 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search jobs or companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-border"
                />
              </div>
            </div>
            <Select value={filterLocation} onValueChange={setFilterLocation}>
              <SelectTrigger className="w-full md:w-[200px] bg-background border-border">
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="San Francisco">San Francisco</SelectItem>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Austin">Austin</SelectItem>
                <SelectItem value="Seattle">Seattle</SelectItem>
                <SelectItem value="Boston">Boston</SelectItem>
                <SelectItem value="Los Angeles">Los Angeles</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-[150px] bg-background border-border">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
                <SelectItem value="On-site">On-site</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-4">
          {filteredJobs.map((job, index) => (
            <Card
              key={job.id}
              className={`border-card-border hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-[1.02] ${
                job.featured
                  ? "border-primary/50 bg-gradient-to-r from-primary-light/10 to-transparent"
                  : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Company Logo */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl">
                      {job.logo}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                        {job.title}
                        {job.featured && (
                          <Badge className="bg-primary text-primary-foreground">
                            Featured
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="flex items-center space-x-4 mt-2">
                        <span className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{job.company}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleApply(job.id)}
                      className="bg-primary hover:bg-primary-hover text-primary-foreground"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge
                    variant="secondary"
                    className="flex items-center space-x-1"
                  >
                    <Clock className="w-3 h-3" />
                    <span>{job.posted}</span>
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-accent text-accent"
                  >
                    {job.type}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center space-x-1"
                  >
                    <DollarSign className="w-3 h-3" />
                    <span>{job.salary}</span>
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-muted text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No jobs found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
