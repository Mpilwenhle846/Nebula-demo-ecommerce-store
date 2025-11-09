import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-nebula-secondary/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-nebula-accent/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <AnimatedSection animationType="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-nebula-secondary to-nebula-accent">
              Get In Touch
            </h1>
          </AnimatedSection>
          <AnimatedSection animationType="fade-in-up-soft" delay={200}>
            <p className="mt-4 text-lg text-gray-400">
              Have a question or want to work together? Drop a message.
            </p>
          </AnimatedSection>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <AnimatedSection animationType="zoom-in" delay={400}>
            <div className="p-8 rounded-2xl bg-gray-900/50 border border-white/10 backdrop-blur-lg shadow-glow-blue">
              {submitted ? (
                <div className="text-center py-10">
                  <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                  <p className="text-gray-300">Your message has been received. (This is a demo)</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input type="text" name="name" id="name" required className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-nebula-secondary focus:border-nebula-secondary outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input type="email" name="email" id="email" required className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-nebula-secondary focus:border-nebula-secondary outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input type="text" name="subject" id="subject" required className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-nebula-secondary focus:border-nebula-secondary outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea name="message" id="message" rows={4} required className="w-full px-4 py-2 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-nebula-secondary focus:border-nebula-secondary outline-none transition-all duration-300"></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="w-full md:w-auto px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-nebula-primary to-nebula-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;