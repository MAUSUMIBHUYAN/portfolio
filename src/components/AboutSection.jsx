import { Briefcase, Code, User, Download } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-white">About</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Me</span>
        </motion.h2>

        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <motion.h3 
            className="text-2xl md:text-3xl font-semibold text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Engineering Mind with a Creative Heart
          </motion.h3>

          <motion.div
            className="grid gap-6 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-lg text-white/100 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              I'm an engineering student who loves building both digital and physical systems.
              From developing <span className="text-purple-300 font-medium">stunning web interfaces</span> to programming <span className="text-blue-300 font-medium">autonomous drones</span>,
              I enjoy solving problems through design, code, and innovation.
            </motion.p>

            <motion.p 
              className="text-lg text-white/100 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I craft <span className="text-pink-300 font-medium">interactive front-end experiences</span> with smooth animations and clean design,
              while also diving into <span className="text-purple-300 font-medium">robotics</span> and intelligent systems that respond to the real world.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 pt-6 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#contact" 
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-medium text-white transition-all duration-300 rounded-full group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <User className="w-5 h-5" />
                Get In Touch
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-80 group-hover:opacity-90 transition-opacity"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full blur-md opacity-0 group-hover:opacity-50 scale-95 group-hover:scale-105 transition-all"></span>
            </motion.a>

            <motion.a
              href="Resume.pdf"
              className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium transition-all duration-300 rounded-full border border-purple-400/50 text-purple-300 hover:text-white hover:bg-purple-900/30 hover:border-purple-400/80 group"
              whileHover={{ scale: 1.05 }}
              download
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </span>
              <span className="absolute inset-0 bg-purple-900/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};