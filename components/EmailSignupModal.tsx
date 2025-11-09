import React, { useEffect, useState } from 'react';

interface EmailSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailSignupModal: React.FC<EmailSignupModalProps> = ({ isOpen, onClose }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShowing(true);
    } else {
      setIsShowing(false);
    }
  }, [isOpen]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
        onClose();
    }, 2000);
  };

  if (!isOpen) {
    return null;
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
        className={`relative w-11/12 max-w-lg p-8 text-center bg-gray-900/80 border border-white/10 rounded-2xl shadow-glow-violet-lg transform transition-all duration-300 ease-in-out ${isShowing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
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
        
        {submitted ? (
            <div>
                <h2 className="text-3xl font-extrabold font-display mb-2 bg-clip-text text-transparent bg-gradient-to-r from-nebula-primary to-nebula-secondary">Thank You!</h2>
                <p className="text-gray-300">You're on the list for the latest updates.</p>
            </div>
        ) : (
            <>
                <h2 className="text-3xl font-extrabold font-display mb-2 bg-clip-text text-transparent bg-gradient-to-r from-nebula-primary to-nebula-secondary">Join the Future</h2>
                <p className="text-gray-300 mb-6">Get the latest on futuristic tech, special offers, and more.</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        required 
                        placeholder="Enter your email" 
                        className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-nebula-secondary focus:border-nebula-secondary outline-none transition-all duration-300 mb-4"
                    />
                    <button 
                        type="submit"
                        className="w-full px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-nebula-primary to-nebula-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </>
        )}
      </div>
    </div>
  );
};

export default EmailSignupModal;
