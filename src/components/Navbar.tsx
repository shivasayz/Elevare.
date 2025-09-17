import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/jobs", label: "Gallery" },
    { path: "/news", label: "Pricing" },
    { path: "/releases", label: "White-label" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center">
              <span className="text-background font-bold text-lg">T</span>
            </div>
            <span className="font-semibold text-lg text-foreground">TechHub</span>
          </NavLink>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-sm font-medium">
              Sign in
            </Button>
            <Button size="sm" className="bg-[#FFD700] hover:bg-[#F0C800] text-black font-semibold">
              Try it for free
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 px-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                Sign in
              </Button>
              <Button size="sm" className="w-full bg-[#FFD700] hover:bg-[#F0C800] text-black font-semibold">
                Try it for free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};