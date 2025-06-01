import { GraduationCap, School } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "Electrical Engineering",
      institution: "Indian Institute Of Technology Palakkad",
      location: "Palakkad, Kerala",
      year: "2022 - 2026",
      icon: <GraduationCap className="h-6 w-6 text-purple-300" />
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "ARIHANT H S SCHOOL",
      location: "Berhampur, Odisha",
      year: "2019 - 2021",
      icon: <School className="h-6 w-6 text-blue-300" />
    },
    {
      degree: "10th Grade",
      institution: "ST. JOSEPH'S ENGLISH MEDIUM SCHOOL",
      location: "Parlakhemundi, Odisha",
      year: "2019",
      icon: <School className="h-6 w-6 text-pink-300" />
    }
  ];

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-gray-900/50 to-violet-900/20">

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white/90 opacity-0 animate-fade-in">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Education</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 opacity-0 animate-fade-in-delay-1 text-center"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-purple-900/20">
                  {edu.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-purple-300 font-medium">{edu.institution}</p>
                <p className="text-white/80">{edu.location}</p>
                <p className="text-white/70">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
