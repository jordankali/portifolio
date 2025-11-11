import { 
  FileText, 
  TrendingUp, 
  Calculator, 
  BookOpen, 
  Users, 
  BarChart3
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Financial Reporting & Analysis",
      description: "Comprehensive financial statement preparation and analysis in compliance with IFRS and GAAP standards."
    },
    {
      icon: Calculator,
      title: "Tax & Compliance Services",
      description: "Expert tax planning and regulatory compliance services tailored to Tanzanian business requirements."
    },
    {
      icon: TrendingUp,
      title: "Financial Modeling & Valuation",
      description: "Advanced financial modeling for strategic decision-making, budgeting, and business valuation."
    },
    {
      icon: BookOpen,
      title: "Academic Training & Workshops",
      description: "Professional development programs and training sessions in accounting and finance topics."
    },
    {
      icon: Users,
      title: "Business Consultancy",
      description: "Strategic financial consultancy services to help organizations optimize their financial operations."
    },
    {
      icon: BarChart3,
      title: "Performance Management",
      description: "Design and implementation of performance measurement systems and KPIs for better business insights."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-white">Services</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional accounting, finance, and consulting services tailored to meet your 
            organizational and academic needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center space-y-4"
            >
              <div className="inline-flex w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-900 dark:text-white">{service.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}