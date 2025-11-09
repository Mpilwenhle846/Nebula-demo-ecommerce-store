import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const EmailSignupSection: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="relative py-20 overflow-hidden bg-black/20">
             <div className="absolute top-0 left-0 w-1/2 h-full bg-nebula-primary/5 rounded-full filter blur-3xl animate-pulse"></div>
             <div className="absolute bottom-0 right-0 w-1/2 h-full bg-nebula-secondary/5 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <AnimatedSection animationType="fade-in-up">
                    <h2 className="text-4xl font-extrabold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Stay Ahead of the Curve
                    </h2>
                </AnimatedSection>
                <AnimatedSection animationType="fade-in-up-soft" delay={200}>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Subscribe to the Nebula newsletter for the latest product releases, exclusive deals, and futuristic insights delivered to your inbox.
                    </p>
                </AnimatedSection>
                
                <AnimatedSection animationType="fade-in-up" delay={400}>
                    <div className="max-w-xl mx-auto">
                        {submitted ? (
                            <p className="text-lg text-nebula-primary font-semibold">Thank you for subscribing!</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                <input 
                                    type="email" 
                                    required 
                                    placeholder="your-email@domain.com"
                                    className="flex-grow w-full px-5 py-3 text-white bg-gray-900/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-nebula-primary focus:border-nebula-primary outline-none transition-all duration-300" 
                                />
                                <button type="submit" className="px-8 py-3 font-bold text-white bg-gradient-to-r from-nebula-primary to-nebula-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    Sign Up
                                </button>
                            </form>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default EmailSignupSection;
