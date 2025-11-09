
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/30 border-t border-white/10 mt-24">
            <div className="container mx-auto px-6 py-8 text-center text-gray-400">
                <h2 className="text-2xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-nebula-primary to-nebula-secondary">
                    NEBULA
                </h2>
                <p className="mt-2">The future of commerce is here.</p>
                <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Nebula. A futuristic demo for portfolio purposes.</p>
            </div>
        </footer>
    );
};

export default Footer;
