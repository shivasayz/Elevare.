import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll progress (0 to 1)
  const progress = Math.min(scrollY / 120, 1);

  // Interpolated styles
  const contentPadding = 20 - progress * 4; // tighter padding after scroll
  const bgOpacity = 0.85 + progress * 0.15; // slightly more solid on scroll
  const borderRadius = 28 - progress * 12; // round → semi-round
  const shadow = progress > 0.05 ? "shadow-lg" : "shadow-md";
  const height = 72 - progress * 12; // shrink height smoothly

  const navLinks = [
    { path: "/jobs", label: "Jobs" },
    { path: "/news", label: "Articles" },
    { path: "/releases", label: "Releases" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full sm:px-6 lg:px-20">
      <div
        className={`mx-auto flex items-center justify-between w-full max-w-[1280px] transition-all duration-500 ease-in-out ${
          scrollY > 0 ? shadow : ""
        }`}
        style={{
          padding: `0 ${contentPadding}px`,
          height: `${height}px`,
          borderRadius: scrollY > 0 ? `${borderRadius}px` : "0px",
          backgroundColor:
            scrollY > 0 ? `rgba(255, 255, 255, ${bgOpacity})` : "transparent",
          backdropFilter: scrollY > 0 ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrollY > 0 ? "blur(12px)" : "none",
        }}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-black rounded-md flex items-center justify-center transition-all duration-300">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span
            className="text-black font-semibold"
            style={{
              fontSize: `${1 + 0.125 * progress}rem`, // 1rem → 1.125rem
              transition: "font-size 0.3s ease",
            }}
          >
            TechHub
          </span>
        </NavLink>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-black"
                    : "text-muted-foreground hover:text-black"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4 justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium px-3"
            onClick={() => navigate("/login")}
          >
            Sign in
          </Button>
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-5 py-2 rounded-xl transition-all duration-300"
            onClick={() => navigate("/signup")}
          >
            Try it for free
          </Button>
        </div>

        {/* Mobile menu toggle */}
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

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-border mt-2 bg-white rounded-xl shadow">
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
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => {
                navigate("/login");
                setIsMobileMenuOpen(false);
              }}
            >
              Sign in
            </Button>
            <Button
              size="sm"
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
              onClick={() => {
                navigate("/signup");
                setIsMobileMenuOpen(false);
              }}
            >
              Try it for free
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
