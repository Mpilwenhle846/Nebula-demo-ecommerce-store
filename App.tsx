import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import EmailSignupModal from './components/EmailSignupModal';
import EmailSignupSection from './components/EmailSignupSection';
import { CartProvider } from './context/CartContext';
import { products, categories } from './data/products';
import { Category, Product } from './types';
import AnimatedSection, { AnimationType } from './components/AnimatedSection';

type View = 
  | { page: 'home' }
  | { page: 'category'; categoryId: string }
  | { page: 'categories' }
  | { page: 'about' }
  | { page: 'contact' };


const CategoriesGrid: React.FC<{onNavigate: (categoryId: string) => void}> = ({onNavigate}) => {
    const cardAnimations: AnimationType[] = ['slide-in-left-rotate', 'fade-in-up', 'slide-in-right-rotate'];
    return (
        <div className="container mx-auto px-6 py-12">
            <AnimatedSection animationType="fade-in-up">
                <h1 className="text-5xl font-extrabold text-center font-display mb-12 bg-clip-text text-transparent bg-gradient-to-r from-nebula-primary to-nebula-secondary">
                    All Categories
                </h1>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
                <AnimatedSection 
                    key={cat.id} 
                    className="h-full"
                    animationType={cardAnimations[index % 3]}
                    delay={(index % 3) * 150}
                >
                    <div onClick={() => onNavigate(cat.id)} className="relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-glow-blue h-full">
                        <img src={cat.imageUrl} alt={cat.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-nebula-primary/20 to-nebula-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="absolute bottom-6 left-6 text-3xl font-extrabold font-display text-white drop-shadow-lg">{cat.name}</h3>
                    </div>
                </AnimatedSection>
            ))}
            </div>
        </div>
    );
}


const App: React.FC = () => {
  const [view, setView] = useState<View>({ page: 'home' });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  useEffect(() => {
    const hasModalBeenShown = sessionStorage.getItem('emailModalShown');
    if (!hasModalBeenShown) {
        const timer = setTimeout(() => {
            setIsEmailModalOpen(true);
            sessionStorage.setItem('emailModalShown', 'true');
        }, 7000); // 7-second delay

        return () => clearTimeout(timer);
    }
  }, []);


  const handleNavigate = (page: string, categoryId?: string) => {
    if (page === 'home') {
      setView({ page: 'home' });
    } else if (page === 'category' && categoryId) {
      setView({ page: 'category', categoryId });
    } else if (page === 'categories') {
      setView({ page: 'categories' });
    } else if (page === 'about') {
      setView({ page: 'about' });
    } else if (page === 'contact') {
      setView({ page: 'contact' });
    }
     window.scrollTo(0, 0);
  };
  
  const handleOpenQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };


  const renderContent = () => {
    switch (view.page) {
      case 'home':
        return <HomePage 
                    onNavigateToCategory={(catId) => handleNavigate('category', catId)}
                    onOpenQuickView={handleOpenQuickView}
                />;
      case 'category':
        const category = categories.find(c => c.id === view.categoryId) as Category;
        const categoryProducts = products.filter(p => p.categoryId === view.categoryId);
        return <CategoryPage 
                    category={category} 
                    products={categoryProducts} 
                    onOpenQuickView={handleOpenQuickView}
                />;
      case 'categories':
          return <CategoriesGrid onNavigate={(catId) => handleNavigate('category', catId)} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage 
                    onNavigateToCategory={(catId) => handleNavigate('category', catId)} 
                    onOpenQuickView={handleOpenQuickView}
                />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-nebula-bg text-white">
        <Header 
          onNavigate={handleNavigate} 
          onToggleCart={() => setIsCartOpen(!isCartOpen)} 
        />
        <main className="flex-grow">
          {renderContent()}
        </main>
        <EmailSignupSection />
        <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <ProductModal product={quickViewProduct} onClose={handleCloseQuickView} />
        <EmailSignupModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;