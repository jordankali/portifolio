export function Skills() {
  const skillCategories = [
    {
      category: "Accounting & Financial Reporting",
      skills: [
        "Financial Accounting",
        "Managerial Accounting",
        "IFRS & GAAP",
        "Financial Statement Preparation"
      ]
    },
    {
      category: "Financial Analysis & Modelling",
      skills: [
        "Financial Analysis",
        "Financial Modelling",
        "Budgeting & Forecasting",
        "Valuation"
      ]
    },
    {
      category: "Auditing, Compliance & Tax",
      skills: [
        "Internal & External Audit",
        "Regulatory Compliance",
        "Taxation (Tanzania)",
        "Corporate Governance"
      ]
    },
    {
      category: "Tools & Systems",
      skills: [
        "Microsoft Excel (Advanced)",
        "QuickBooks / Xero",
        "Tally / Local ERP",
        "SAP FI/CO (familiar)"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-white">Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise across accounting, finance, compliance, and modern 
            financial technology tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-700">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}