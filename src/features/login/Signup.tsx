import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Github,
  Chrome,
  Rocket,
  Lightbulb,
  Target,
  EyeOff,
  Eye,
} from "lucide-react";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Premium gradient background matching hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full blur-[128px]" />
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      </div>

      {/* Content Layer */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex items-center gap-28">
          {/* Left Side - Signup Form */}
          <Card className="w-full max-w-md backdrop-blur-xl border-black-300 shadow-2xl bg-gradient-to-br from-accent/10 via-primary/5 to-background">
            <CardHeader className="space-y-1 pb-6">
              {/* Logo */}

              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Create Account
              </CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                Join the tech community today
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* First & Last Name - side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-foreground font-medium"
                  >
                    First Name
                  </Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="pl-10 bg-background/50 border-border/50 focus:bg-background/80 transition-all"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-foreground font-medium"
                  >
                    Last Name
                  </Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="pl-10 bg-background/50 border-border/50 focus:bg-background/80 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10 bg-background/50 border-border/50 focus:bg-background/80 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-foreground font-medium"
                >
                  Password
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />

                  {/* Password input with toggle button */}
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 bg-background/50 border-border/50 focus:bg-background/80 transition-all"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-border bg-background/50 text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link
                    to="#"
                    className="text-primary hover:text-accent font-medium transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </span>
              </div>

              {/* Create Account Button */}
              <Button
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-white shadow-lg"
                size="lg"
              >
                Create Account
              </Button>

              {/* Separator */}
              <div className="flex items-center gap-4 text-xs uppercase text-muted-foreground">
                <div className="flex-1 h-px bg-border/100" />
                <span>Or continue with</span>
                <div className="flex-1 h-px bg-border/100" />
              </div>

              {/* OAuth Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="w-full bg-background/50 border border-black"
                  disabled={true}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>

                <Button
                  variant="outline"
                  className="w-full bg-background/50 border border-black"
                  disabled={true}
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
            </CardContent>

            <CardFooter className="pt-2 pb-6">
              <p className="text-center text-sm text-muted-foreground w-full">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:text-accent font-semibold transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>

          {/* Right Side - Motivational Content */}
          <div className="hidden lg:flex flex-col justify-center flex-1 max-w-xl">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join the Future of Tech Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your passion into expertise. Build alongside the
              brightest minds in technology.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Start Your Tech Career
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Access cutting-edge resources and mentorship from industry
                    leaders.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Build Real Projects
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Work on production-ready applications and contribute to open
                    source.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Get Hired Faster
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Stand out with a portfolio that showcases your skills to top
                    companies.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic">
                "Every expert was once a beginner. Don’t wait — your future
                starts now."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
