import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-cream/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col items-center cursor-pointer group">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-brand-green group-hover:text-brand-green-light transition-colors">
            VENUS
          </span>
          <span className="h-0.5 w-12 bg-brand-green mt-1 rou group-hover:w-full transition-all duration-300"></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium hover:text-brand-green transition-colors">Sản Phẩm</a>
          <a href="#benefits" className="text-sm font-medium hover:text-brand-green transition-colors">Công Dụng</a>
          <a href="#heritage" className="text-sm font-medium hover:text-brand-green transition-colors">Câu Chuyện</a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#products" className="hidden md:flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <ShoppingBag className="w-4 h-4" />
            Mua Ngay
          </a>
          <button 
            className="md:hidden p-2 text-brand-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-green/10 shadow-lg py-4 px-4 flex flex-col gap-4">
          <a href="#products" className="block py-2 text-sm font-medium border-b border-brand-green/10" onClick={() => setMobileMenuOpen(false)}>Sản Phẩm</a>
          <a href="#benefits" className="block py-2 text-sm font-medium border-b border-brand-green/10" onClick={() => setMobileMenuOpen(false)}>Công Dụng</a>
          <a href="#heritage" className="block py-2 text-sm font-medium border-b border-brand-green/10" onClick={() => setMobileMenuOpen(false)}>Câu Chuyện</a>
          <a href="#products" className="flex items-center justify-center gap-2 w-full bg-brand-green text-white px-6 py-3 rounded-full font-medium mt-2" onClick={() => setMobileMenuOpen(false)}>
            <ShoppingBag className="w-4 h-4" />
            Mua Ngay
          </a>
        </div>
      )}
    </header>
  );
}
