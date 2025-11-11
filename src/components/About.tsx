import { Award, BookOpen, Briefcase, TrendingUp } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Master's degree holder with strong research background"
    },
    {
      icon: Briefcase,
      title: "Dual Expertise",
      description: "Combined experience in academia and industry consulting"
    },
    {
      icon: Award,
      title: "Professional Impact",
      description: "Teaching and mentoring future finance professionals"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Committed to staying current with industry standards"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-white">About Me</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A passionate educator and finance professional dedicated to advancing accounting 
            and finance knowledge through teaching, research, and practical consulting services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="text-center space-y-4 group"
            >
              <div className="inline-flex w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}