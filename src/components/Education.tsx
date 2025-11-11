import { GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Master's Degree in Account and Finance",
      institution: "Mzumbe University",
      year: "2021",
      type: "Postgraduate"
    },
    {
      degree: "Bachelor's Degree in Account and Finance",
      institution: "Mzumbe University",
      year: "2019",
      type: "Undergraduate"
    },
    {
      degree: "High School Education",
      subjects: "Economics, Commerce and Accountancy",
      institution: "Sangu Secondary School",
      year: "",
      type: "High School"
    },
    {
      degree: "Secondary School Education",
      subjects: "Business Studies",
      institution: "Aggrey Secondary School",
      year: "",
      type: "Secondary"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-white">Education</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Strong academic foundation from one of Tanzania's leading universities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm mb-3">
                  {edu.type}
                </div>
                <h3 className="mb-2 text-slate-900 dark:text-white">{edu.degree}</h3>
                {edu.subjects && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{edu.subjects}</p>
                )}
                <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                {edu.year && (
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Completed {edu.year}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}