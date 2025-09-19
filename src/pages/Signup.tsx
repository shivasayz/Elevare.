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
import { Mail, Lock, User, Github, Chrome } from "lucide-react";

const Signup = () => {
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
        <Card className="w-full max-w-md backdrop-blur-xl bg-card/80 border-2 border-border/50 shadow-2xl">
          <CardHeader className="space-y-1 pb-6">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">T</span>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Create Account
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Join the tech community today
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="pl-10 bg-background/50 border-border/50 focus:bg-background/80 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
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

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 bg-background/50 border-border/50 focus:bg-background/80 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground font-medium">Confirm Password</Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 bg-background/50 border-border/50 focus:bg-background/80 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-border bg-background/50 text-primary focus:ring-primary" />
              <span className="text-sm text-muted-foreground">
                I agree to the{" "}
                <Link to="#" className="text-primary hover:text-accent font-medium transition-colors">
                  Terms & Conditions
                </Link>
              </span>
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-white shadow-lg" size="lg">
              Create Account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="bg-border/50" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-3 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full bg-background/50 border-border/50 hover:bg-background/80 hover:border-primary/50 transition-all">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full bg-background/50 border-border/50 hover:bg-background/80 hover:border-primary/50 transition-all">
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
      </div>
    </div>
  );
};

export default Signup;
