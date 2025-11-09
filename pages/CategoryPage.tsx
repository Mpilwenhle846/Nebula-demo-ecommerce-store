import React from 'react';
import { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';
import AnimatedSection, { AnimationType } from '../components/AnimatedSection';

interface CategoryPageProps {
  category: Category;
  products: Product[];
  onOpenQuickView: (product: Product) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, products, onOpenQuickView }) => {
  const cardAnimations: AnimationType[] = ['slide-in-left-rotate', 'fade-in-up', 'slide-in-right-rotate'];

  return (
    <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
            <AnimatedSection animationType="fade-in-up">
                <h1 className="text-5xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-nebula-primary to-nebula-secondary">
                    {category.name}
                </h1>
            </AnimatedSection>
            <AnimatedSection animationType="fade-in-up-soft" delay={200}>
                <p className="mt-2 text-lg text-gray-400">Explore our curated collection of {category.name.toLowerCase()}.</p>
            </AnimatedSection>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onQuickView={onOpenQuickView}
            animationType={cardAnimations[index % 3]}
            animationDelay={(index % 3) * 150}
            />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;