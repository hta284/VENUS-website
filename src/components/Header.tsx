import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass shadow-lg py-3 border-b border-brand-border/50" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center shadow">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-brand-primary group-hover:text-brand-primary-dark transition-colors">
              CocoVenus
            </span>
            <span className="text-xs text-brand-text-muted font-medium tracking-widest uppercase">
              Beauty Essentials
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "S?n Ph?m", href: "#products" },
            { label: "Công D?ng", href: "#benefits" },
            { label: "Câu Chuy?n", href: "#heritage" },
            { label: "Ðánh Giá", href: "#reviews" }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-text hover:text-brand-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#products"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary-dark hover:to-brand-primary text-white px-6 py-2.5 rounded-full font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 transform"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Mua Ngay</span>
          </a>
          <button
            className="md:hidden p-2 text-brand-primary hover:bg-brand-background rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-brand-border shadow-lg py-4 px-4 flex flex-col gap-3 animate-fade-in-up">
          {[
            { label: "S?n Ph?m", href: "#products" },
            { label: "Công D?ng", href: "#benefits" },
            { label: "Câu Chuy?n", href: "#heritage" },
            { label: "Ðánh Giá", href: "#reviews" }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2.5 text-sm font-medium text-brand-text hover:text-brand-primary border-b border-brand-border/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#products"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-6 py-3 rounded-full font-medium mt-2 shadow-md hover:shadow-lg transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ShoppingBag className="w-4 h-4" />
            Mua Ngay
          </a>
        </div>
      )}
    </header>
  );
}


