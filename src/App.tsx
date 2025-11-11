import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
        <Navigation />
        <Hero />
        <div className="border-t border-slate-200 dark:border-slate-800">
          <About />
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800">
          <Education />
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800">
          <Experience />
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800">
          <Services />
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800">
          <Skills />
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800">
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}