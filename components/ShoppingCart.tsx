

import React from 'react';
import { useCart } from '../context/CartContext';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-gray-900/80 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold font-display text-white">Shopping Cart</h2>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-grow p-6 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-400 mt-20">
                <p className="text-lg">Your cart is empty.</p>
                <p className="text-sm">Add some futuristic gear!</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {cartItems.map(item => (
                  <li key={item.id} className="flex items-center space-x-4 p-2 rounded-lg bg-white/5">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md"/>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <p className="text-sm text-gray-400">
                        {item.quantity} x R{item.price.toFixed(2)}
                      </p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="p-1 text-gray-500 hover:text-nebula-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg text-gray-300">Total:</span>
                <span className="text-2xl font-bold text-white">R{cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-nebula-primary to-nebula-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Checkout (Demo)
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
