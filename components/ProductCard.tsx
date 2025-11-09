import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import AnimatedSection, { AnimationType } from './AnimatedSection';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  animationType?: AnimationType;
  animationDelay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView, animationType = 'zoom-in', animationDelay = 0 }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the modal from opening when adding to cart
    addToCart(product);
  };

  return (
    <AnimatedSection animationType={animationType} delay={animationDelay}>
        <div 
            onClick={() => onQuickView(product)}
            className="relative group overflow-hidden rounded-xl bg-gray-900/50 border border-white/10 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-glow-violet h-full cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-nebula-primary/20 to-nebula-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-1 flex flex-col h-full">
                <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover rounded-lg" />
                <div className="p-4 text-white flex flex-col flex-grow">
                    <h3 className="text-xl font-bold font-display mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-4 h-10 flex-grow">{product.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                        <p className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-nebula-secondary to-nebula-primary">
                            R{product.price.toFixed(2)}
                        </p>
                        <button 
                            onClick={handleAddToCart}
                            className="px-4 py-2 text-sm font-semibold text-white bg-nebula-primary rounded-lg shadow-md transition-all duration-300 hover:bg-nebula-primary/80 hover:shadow-glow-violet-lg focus:outline-none focus:ring-2 focus:ring-nebula-primary"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedSection>
  );
};

export default ProductCard;