import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-2 px-4 relative bg-gradient-to-b from-gray-900/50 to-violet-900/20 border-t border-purple-900/30">
      
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} Mausumi Bhuyan. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-3 flex justify-center">
          <a
            href="#hero"
            className="p-3 rounded-full bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-900/30 hover:border-purple-500/50 text-purple-300 hover:text-white transition-all animate-float"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};