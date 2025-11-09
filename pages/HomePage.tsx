import React, { useState, useEffect, useRef } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import AnimatedSection, { AnimationType } from '../components/AnimatedSection';
import { Product } from '../types';

interface HomePageProps {
    onNavigateToCategory: (categoryId: string) => void;
    onOpenQuickView: (product: Product) => void;
}

const backgroundVideos = [
    'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
    'https://videos.pexels.com/video-files/7578550/7578550-hd_1920_1080_30fps.mp4',
    'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4',
    'https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4',
];

const HomePage: React.FC<HomePageProps> = ({ onNavigateToCategory, onOpenQuickView }) => {
  const featuredProducts = products.slice(0, 6);
  const cardAnimations: AnimationType[] = ['slide-in-left-rotate', 'fade-in-up', 'slide-in-right-rotate'];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startSlideshow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideos.length);
    }, 10000); // Change video every 10 seconds
  };
  
  useEffect(() => {
    startSlideshow();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToVideo = (index: number) => {
    setCurrentVideoIndex(index);
    startSlideshow(); // Reset timer on manual navigation
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="relative h-[80vh] md:h-screen flex items-center justify-center text-center overflow-hidden -mt-24">
        <div className="absolute inset-0 z-0">
            {backgroundVideos.map((videoSrc, index) => (
                <video
                    key={videoSrc}
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentVideoIndex ? 'opacity-100' : 'opacity-0'}`}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-black opacity-70 z-10"></div>
        <div className="absolute inset-0 z-0">
             <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-nebula-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
             <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-nebula-secondary/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-20 px-4 pt-24">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-display text-white drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Discover the Future
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                Shop the next generation of technology, apparel, and accessories. Welcome to Nebula.
              </p>
              <button 
                onClick={() => document.querySelector('#featured-products')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-nebula-primary to-nebula-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                 style={{ animationDelay: '600ms' }}
              >
                Explore Now
              </button>
        </div>
        
        {/* Video navigation dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {backgroundVideos.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToVideo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentVideoIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </div>
      
      {/* Featured Products Section */}
      <section id="featured-products" className="container mx-auto px-6">
        <AnimatedSection>
            <h2 className="text-4xl font-extrabold text-center font-display mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Featured Products</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={onOpenQuickView}
                animationType={cardAnimations[index % 3]}
                animationDelay={(index % 3) * 150}
            />
          ))}
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="container mx-auto px-6">
        <AnimatedSection>
            <h2 className="text-4xl font-extrabold text-center font-display mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Shop by Category</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              onClick={() => onNavigateToCategory(category.id)}
              animationType={cardAnimations[index % 3]}
              animationDelay={(index % 3) * 150}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;