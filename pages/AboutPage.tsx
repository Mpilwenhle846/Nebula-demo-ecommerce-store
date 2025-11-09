import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-nebula-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-nebula-secondary/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <AnimatedSection animationType="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-nebula-primary to-nebula-secondary">
              About Nebula
            </h1>
          </AnimatedSection>
          <AnimatedSection animationType="fade-in-up-soft" delay={200}>
            <p className="mt-4 text-lg text-gray-400">
              A futuristic e-commerce demonstration for portfolio purposes.
            </p>
          </AnimatedSection>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <AnimatedSection animationType="slide-in-right-rotate" delay={400}>
            <div className="group relative p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-glow-blue transition-transform duration-500 ease-out hover:-translate-y-2">
                <img
                  src="https://picsum.photos/seed/cyber/1200/600"
                  alt="Futuristic cityscape"
                  className="rounded-xl w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-1"
                />
                 <div className="absolute inset-0 bg-gradient-to-br from-nebula-primary/10 to-nebula-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-16 max-w-3xl mx-auto space-y-8 text-gray-300 text-left md:text-center text-lg">
          <AnimatedSection animationType="fade-in-up-soft" delay={600}>
            <p>
              Welcome to Nebula, a conceptual e-commerce platform designed and developed to showcase modern frontend engineering skills. This is not a real store, and no actual products are for sale. Instead, Nebula serves as a creative playground to demonstrate proficiency in technologies like React, TypeScript, and Tailwind CSS, coupled with a strong focus on UI/UX design, animations, and creating an immersive user experience.
            </p>
          </AnimatedSection>
          <AnimatedSection animationType="fade-in-up-soft" delay={750}>
            <p>
              The project emphasizes a clean, responsive, and aesthetically pleasing interface with a futuristic "cyber-neon" theme. From the smooth page transitions and scroll-triggered animations to the state management of the shopping cart, every element is crafted to be both functional and visually engaging. The goal is to present a portfolio piece that is not only technically sound but also demonstrates a keen eye for design and detail.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
