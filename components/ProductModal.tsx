import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (product) {
      setIsShowing(true);
    } else {
      setIsShowing(false);
    }
  }, [product]);

  if (!product) {
    return null;
  }
  
  const handleAddToCart = () => {
      addToCart(product);
      onClose();
  }

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ease-in-out ${isShowing ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div 
        className={`relative w-11/12 max-w-4xl max-h-[90vh] bg-gray-900/80 border border-white/10 rounded-2xl shadow-glow-violet-lg transform transition-all duration-300 ease-in-out ${isShowing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white bg-black/20 rounded-full"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8 overflow-y-auto max-h-[90vh]">
          <div className="w-full h-auto">
             <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl lg:text-4xl font-extrabold font-display mb-4">{product.name}</h2>
            <p className="text-gray-300 mb-6">{product.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <p className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-nebula-secondary to-nebula-primary">
                R{product.price.toFixed(2)}
              </p>
              <button 
                onClick={handleAddToCart}
                className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-nebula-primary to-nebula-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
