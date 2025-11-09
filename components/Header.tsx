import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
    onNavigate: (page: string, categoryId?: string) => void;
    onToggleCart: () => void;
}

const NavLink: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
    <button onClick={onClick} className="relative text-lg font-medium text-gray-300 transition-colors duration-300 hover:text-white group py-2">
        <span>{children}</span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-nebula-primary to-nebula-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-sm"></span>
    </button>
);

export const Header: React.FC<HeaderProps> = ({ onNavigate, onToggleCart }) => {
    const { itemCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Wrapper function to handle navigation from mobile menu and close it
    const handleMobileNav = (page: string, categoryId?: string) => {
        onNavigate(page, categoryId);
        setIsMenuOpen(false);
    };

    return (
        <div className="sticky top-0 z-50 p-4">
            <header className="relative container mx-auto rounded-full bg-black/30 backdrop-blur-lg border border-white/10 shadow-glow-violet">
                <div className="flex justify-between items-center px-6 py-3">
                    <div className="flex-1 flex justify-start">
                        <h1 
                            className="text-3xl font-extrabold font-display cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-nebula-primary to-nebula-secondary"
                            onClick={() => handleMobileNav('home')}
                        >
                            NEBULA
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center justify-center space-x-8">
                        <NavLink onClick={() => onNavigate('home')}>Home</NavLink>
                        <NavLink onClick={() => onNavigate('categories')}>Categories</NavLink>
                        <NavLink onClick={() => onNavigate('about')}>About</NavLink>
                        <NavLink onClick={() => onNavigate('contact')}>Contact</NavLink>
                    </nav>

                    {/* Right-side controls */}
                    <div className="flex-1 flex justify-end items-center space-x-2">
                        <button onClick={onToggleCart} className="relative p-2 text-gray-300 transition-colors duration-300 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {itemCount > 0 && (
                                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-nebula-accent rounded-full">
                                    {itemCount}
                                </span>
                            )}
                        </button>
                        
                        {/* Hamburger Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300 hover:text-white">
                                {isMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div 
                  className={`
                    absolute top-full left-0 right-0 mt-2 md:hidden
                    transform transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
                  `}
                >
                    <nav className="flex flex-col items-center space-y-2 p-4 mx-4 bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg">
                        <NavLink onClick={() => handleMobileNav('home')}>Home</NavLink>
                        <NavLink onClick={() => handleMobileNav('categories')}>Categories</NavLink>
                        <NavLink onClick={() => handleMobileNav('about')}>About</NavLink>
                        <NavLink onClick={() => handleMobileNav('contact')}>Contact</NavLink>
                    </nav>
                </div>
            </header>
        </div>
    );
};
