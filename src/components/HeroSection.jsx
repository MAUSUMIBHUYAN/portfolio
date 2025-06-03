import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{
        minHeight: '100dvh',
      }}
    >
      
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in text-white/90">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 opacity-0 animate-fade-in-delay-1">
              {" "}Mausumi
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 opacity-0 animate-fade-in-delay-2">
              {" "}Bhuyan
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/100 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I'm an engineering student passionate about{" "}
            <span className="text-purple-300 font-medium">creative web design</span>,{" "}
            <span className="text-pink-300 font-medium">smooth animations</span>, and{" "}
            <span className="text-blue-300 font-medium">robotics</span> — from flying drones to interactive digital experiences.
          </p>

          <div className="pt-6 opacity-0 animate-fade-in-delay-4">
            <a 
              href="#projects" 
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-medium text-white transition-all duration-300 rounded-full group cosmic-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">
                View My Projects
              </span>
              <span className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-300 ${isHovered ? 'opacity-90' : 'opacity-80'}`}></span>
              <span className={`absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full blur-md transition-all duration-500 ${isHovered ? 'opacity-50 scale-105' : 'opacity-0 scale-95'}`}></span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="text-sm text-white/60 mb-2">Scroll Down</span>
        <div className="relative">
          <ArrowDown className="h-6 w-6 text-purple-300 animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-purple-300/20 animate-ping -z-10"></div>
        </div>
      </div>
    </section>
  );
};