import React from 'react';
import { Category } from '../types';
import AnimatedSection, { AnimationType } from './AnimatedSection';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
  animationType?: AnimationType;
  animationDelay?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, animationType = 'zoom-in', animationDelay = 0 }) => {
  return (
    <AnimatedSection animationType={animationType} delay={animationDelay}>
        <div 
            onClick={onClick}
            className="relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-glow-blue"
        >
            <img src={category.imageUrl} alt={category.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-nebula-primary/20 to-nebula-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="absolute bottom-6 left-6 text-3xl font-extrabold font-display text-white drop-shadow-lg">{category.name}</h3>
        </div>
    </AnimatedSection>
  );
};

export default CategoryCard;
