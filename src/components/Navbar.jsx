import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "py-3 bg-gradient-to-r from-purple-950 via-gray-900 to-purple-950 backdrop-blur-xl shadow-xl border-b border-purple-950/50"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo on left */}
        <div className="text-2xl font-bold flex items-center select-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-extrabold tracking-wide">
            Mausumi
          </span>
          <span className="text-white/80 ml-2">Portfolio</span>
        </div>

        {/* Desktop Navigation - moved to flex-end */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <div className="flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="relative text-white/80 transition-colors duration-300 group"
              >
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-300">
                  {item.name}
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle - right aligned */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-white z-50 relative group"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X size={28} className="text-purple-300" />
            ) : (
              <Menu size={28} className="text-white group-hover:text-purple-300 transition-colors" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 z-40 flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-8"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl relative">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="relative text-white/80 px-6 py-2 transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-300">
                  {item.name}
                </span>
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-purple-400 group-hover:w-3/4 group-hover:left-1/4 transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};