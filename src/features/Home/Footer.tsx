import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import logo from "../../assests/logo.png";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-gradient-to-br from-accent/20 via-primary/10 to-background rounded-t-3xl border border-border mt-8">
      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-5">
            <div className="w-52 h-20 flex items-center justify-center transition-all duration-300">
              <img
                src={logo}
                alt="Logo"
                className="h-full object-contain -ml-1"
              />
            </div>
            <p className="text-sm text-muted-foreground font-medium tracking-wide">
              {" "}
              Your gateway to tech opportunities, news, and innovation.{" "}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/jobs"
                  className="text-sm text-muted-foreground font-medium tracking-wide"
                >
                  Job Openings
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-sm text-muted-foreground font-medium tracking-wide"
                >
                  Tech News
                </a>
              </li>
              <li>
                <a
                  href="/releases"
                  className="text-sm text-muted-foreground font-medium tracking-wide"
                >
                  Software Releases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground font-medium tracking-wide"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground font-medium tracking-wide">
                  hello@techhub.com
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground font-medium tracking-wide">
                  Hyderabad, India
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground font-medium tracking-wide">
              Subscribe to get the latest updates
            </p>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/50 border-gray-100/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-gradient-to-r from-primary to-accent text-white w-12"
                  onClick={handleNewsletterSubmit}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/50 border border-gray-100/50 flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground font-medium tracking-wide">
            © {new Date().getFullYear()} TechHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
