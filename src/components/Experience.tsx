import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Assistant Lecturer (Account & Finance)",
      company: "Mzumbe University",
      period: "2019 - Present",
      description: "Teaching undergraduate and postgraduate courses in accounting and finance, supervising student projects, and contributing to curriculum development and academic research.",
      highlights: [
        "Teaching undergraduate & postgraduate courses",
        "Supervising student projects",
        "Curriculum development",
        "Academic research contribution"
      ]
    },
    {
      title: "Account & Finance Consultant",
      company: "Various / Industry",
      period: "2019 - Present",
      description: "Provided consultancy services in accounting and finance, delivering financial reporting, analysis, and compliance solutions to organisations and clients prior to joining academia.",
      highlights: [
        "Financial reporting & analysis",
        "Compliance solutions",
        "Client consultancy services",
        "Organizational finance support"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-white">Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Diverse experience spanning academia and industry, combining theoretical 
            knowledge with practical application.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-slate-900 dark:text-white">{exp.title}</h3>
                  <span className="text-slate-500 dark:text-slate-400">•</span>
                  <span className="text-slate-600 dark:text-slate-400">{exp.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.company}</p>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}