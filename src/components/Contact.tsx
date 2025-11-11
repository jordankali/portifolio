import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-white">Get in Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Interested in consulting services or academic collaboration? Feel free to reach out.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <a href="mailto:johnzacharia33@gmail.com" className="text-center space-y-3 group">
              <div className="inline-flex w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</p>
                <p className="text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  johnzacharia33@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+255627192292" className="text-center space-y-3 group">
              <div className="inline-flex w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                <p className="text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +255 627 192 292
                </p>
              </div>
            </a>

            <div className="text-center space-y-3 group">
              <div className="inline-flex w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Location</p>
                <p className="text-sm text-slate-900 dark:text-white">
                  Dar es Salaam, Tanzania
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-12">
            <h3 className="mb-6 text-slate-900 dark:text-white text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <Input 
                  type="email"
                  placeholder="Your Email" 
                  className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
              <Textarea 
                placeholder="Your Message" 
                rows={6}
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-slate-600 dark:text-slate-400">
          <p>© 2025 John Zacharia John. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}