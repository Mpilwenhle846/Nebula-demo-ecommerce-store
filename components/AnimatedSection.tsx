import React, { useRef, ReactNode } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export type AnimationType = 
  | 'fade-in-up' 
  | 'fade-in-up-soft' 
  | 'slide-in-left' 
  | 'slide-in-right' 
  | 'zoom-in'
  | 'slide-in-left-rotate'
  | 'slide-in-right-rotate';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: AnimationType;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, animationType = 'fade-in-up', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const getAnimationClasses = () => {
    let baseClasses = 'transition-all duration-700 ease-out';
    let startState = 'opacity-0';
    let endState = 'opacity-100';

    switch (animationType) {
      case 'fade-in-up':
        startState += ' translate-y-10';
        endState += ' translate-y-0';
        break;
      case 'fade-in-up-soft':
        startState += ' translate-y-6';
        endState += ' translate-y-0';
        break;
      case 'slide-in-left':
        startState += ' -translate-x-10';
        endState += ' translate-x-0';
        break;
      case 'slide-in-right':
        startState += ' translate-x-10';
        endState += ' translate-x-0';
        break;
      case 'zoom-in':
        baseClasses = 'transition-all duration-500 ease-out';
        startState += ' scale-95';
        endState += ' scale-100';
        break;
      case 'slide-in-left-rotate':
        startState += ' -translate-x-10 -rotate-3';
        endState += ' translate-x-0 rotate-0';
        break;
      case 'slide-in-right-rotate':
        startState += ' translate-x-10 rotate-3';
        endState += ' translate-x-0 rotate-0';
        break;
    }

    return `${baseClasses} ${isVisible ? endState : startState}`;
  };

  const style: React.CSSProperties = {
    transitionDelay: isVisible ? `${delay}ms` : '0ms'
  };

  return (
    <div ref={ref} className={`${className} ${getAnimationClasses()}`} style={style}>
      {children}
    </div>
  );
};

export default AnimatedSection;
