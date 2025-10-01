import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, User, Settings, Bookmark, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        <div className="hidden md:flex items-center gap-3 justify-end">
          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/author.jpeg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">John Doe</p>
                  <p className="w-[200px] truncate text-sm text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/saved")}>
                <Bookmark className="mr-2 h-4 w-4" />
                <span>Saved Articles</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/settings")}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
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
