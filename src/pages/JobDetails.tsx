import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Calendar, 
  Building2, 
  Users,
  Clock,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock job data - in a real app, this would come from an API
const jobsData = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150,000 - $200,000",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
    posted: "2 days ago",
    featured: true,
    description: "We're looking for a talented Senior Full Stack Developer to join our growing team. You'll work on cutting-edge projects using modern technologies.",
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews and architectural decisions",
      "Optimize application performance"
    ],
    requirements: [
      "5+ years of experience in full-stack development",
      "Strong proficiency in React and Node.js",
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Excellent problem-solving skills",
      "Strong communication and teamwork abilities"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Unlimited PTO policy"
    ],
    aboutCompany: "TechCorp Solutions is a leading technology company specializing in innovative software solutions. We're passionate about creating products that make a difference.",
    teamSize: "50-100 employees",
    founded: "2015"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Studios",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    posted: "1 week ago",
    featured: false,
    description: "Join our design team to create beautiful and intuitive user experiences for our diverse client base.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers and product managers",
      "Maintain and evolve design systems",
      "Present design concepts to stakeholders"
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio demonstrating design process",
      "Understanding of responsive design principles",
      "Experience with user research methodologies"
    ],
    benefits: [
      "Competitive compensation package",
      "Remote work options",
      "Annual design conference budget",
      "Top-tier equipment provided",
      "Health and wellness benefits"
    ],
    aboutCompany: "Creative Studios is an award-winning design agency that partners with brands to create exceptional digital experiences.",
    teamSize: "25-50 employees",
    founded: "2018"
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudTech Inc",
    location: "Remote",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    tags: ["Kubernetes", "Docker", "CI/CD", "AWS"],
    posted: "3 days ago",
    featured: true,
    description: "We're seeking a DevOps Engineer to help us scale our infrastructure and improve our deployment processes.",
    responsibilities: [
      "Design and maintain CI/CD pipelines",
      "Manage cloud infrastructure on AWS",
      "Implement monitoring and alerting systems",
      "Automate deployment processes",
      "Ensure system security and compliance"
    ],
    requirements: [
      "4+ years of DevOps experience",
      "Strong knowledge of Kubernetes and Docker",
      "Experience with Infrastructure as Code (Terraform/CloudFormation)",
      "Proficiency in scripting languages (Python/Bash)",
      "AWS certification preferred"
    ],
    benefits: [
      "Fully remote position",
      "Competitive salary and bonuses",
      "Stock options",
      "Home office stipend",
      "Comprehensive health coverage"
    ],
    aboutCompany: "CloudTech Inc is a cloud infrastructure company helping businesses modernize their technology stack and achieve digital transformation.",
    teamSize: "100-200 employees",
    founded: "2012"
  }
];

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const job = jobsData.find(j => j.id === parseInt(id || "0"));
  
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-2">Job not found</h2>
          <p className="text-muted-foreground mb-4">The job you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/jobs")} variant="outline">
            Back to Jobs
          </Button>
        </div>
      </div>
    );
  }
  
  const handleApply = () => {
    toast({
      title: "Application Started",
      description: `Your application for ${job.title} has been started. Complete your profile to submit.`,
    });
  };
  
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-20 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/jobs")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Jobs
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{job.title}</h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
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
                {job.featured && (
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Featured
                  </Badge>
                )}
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Job Description */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">About the Role</h2>
              <p className="text-muted-foreground leading-relaxed">
                {job.description}
              </p>
            </Card>
            
            {/* Responsibilities */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            {/* Requirements */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            {/* Benefits */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Benefits & Perks</h2>
              <ul className="space-y-3">
                {job.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card className="p-6 border-primary/20 bg-primary/5">
              <Button 
                onClick={handleApply} 
                className="w-full mb-4"
                size="lg"
              >
                Apply Now
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Join our team and make an impact
              </p>
            </Card>
            
            {/* Job Details Card */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Job Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Employment Type</p>
                    <p className="font-medium">{job.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Salary Range</p>
                    <p className="font-medium">{job.salary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Posted</p>
                    <p className="font-medium">{job.posted}</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Company Info Card */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">About {job.company}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {job.aboutCompany}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Company Size</p>
                    <p className="font-medium">{job.teamSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Founded</p>
                    <p className="font-medium">{job.founded}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;