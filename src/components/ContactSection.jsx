import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-gray-900/50 to-violet-900/20">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white/90 opacity-0 animate-fade-in">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Touch</span>
        </h2>

        <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto text-lg opacity-0 animate-fade-in-delay-1">
          I'm an enthusiastic engineering student eager to collaborate, learn, and contribute.<br/>
          Let's build something impactful together!
        </p>

        <div className="flex flex-col items-center">
          <div className="max-w-2xl w-full space-y-10 opacity-0 animate-fade-in-delay-2">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-900/30 hover:border-purple-500/50 transition-colors">
                <div className="p-3 rounded-full bg-purple-900/20 text-purple-300">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Email</h4>
                  <a
                    href="mailto:mausumibhuyan02@gmail.com"
                    className="text-white/70 hover:text-purple-300 transition-colors"
                  >
                    mausumibhuyan02@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-900/30 hover:border-purple-500/50 transition-colors">
                <div className="p-3 rounded-full bg-purple-900/20 text-purple-300">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Phone</h4>
                  <a
                    href="tel:+917749902629"
                    className="text-white/70 hover:text-purple-300 transition-colors"
                  >
                    +91 7749902629
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-900/30 hover:border-purple-500/50 transition-colors">
                <div className="p-3 rounded-full bg-purple-900/20 text-purple-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Location</h4>
                  <span className="text-white/70">Gajapati, Odisha</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 text-center">
              <h4 className="font-medium text-white mb-6 text-xl">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/mausumi-bhuyan-a60a68291/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-900/30 hover:border-purple-500/50 text-white/80 hover:text-purple-300 transition-all"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};