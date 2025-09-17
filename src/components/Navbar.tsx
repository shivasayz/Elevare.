import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Briefcase, Newspaper, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/jobs", label: "Jobs", icon: Briefcase },
    { path: "/news", label: "News", icon: Newspaper },
    { path: "/releases", label: "Releases", icon: Package },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div
        className={`mx-auto max-w-7xl bg-card/95 backdrop-blur-lg rounded-2xl shadow-lg border border-border/50 transition-all duration-500 ${
          isScrolled
            ? "py-4 shadow-xl"
            : "py-2"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-16" : "h-14"
          }`}>
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl text-foreground">TechHub</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                <link.icon className="w-4 h-4" />
                <span className="font-medium">{link.label}</span>
              </NavLink>
            ))}
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
            <div className="md:hidden py-4 animate-fade-in">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`
                  }
                >
                  <link.icon className="w-4 h-4" />
                  <span className="font-medium">{link.label}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};