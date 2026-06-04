import { X, Gift } from "lucide-react";
import { useState, useEffect } from "react";

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass rounded-3xl border border-brand-border shadow-lg max-w-md w-full animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 hover:bg-brand-background rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-brand-text-muted" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 mb-6">
            <Gift className="w-8 h-8 text-brand-primary" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-text mb-4">
            Ch?! B?n Quên Gì R?i?
          </h2>

          {/* Description */}
          <p className="text-brand-text-muted mb-6 leading-relaxed">
            Hãy nh?n uu dãi d?c quy?n 15% cho l?n mua d?u tiên. D? dàng và nhanh chóng!
          </p>

          {/* Input */}
          <div className="mb-6">
            <input
              type="email"
              placeholder="Nh?p email c?a b?n"
              className="w-full px-4 py-3 rounded-xl border-2 border-brand-border bg-white text-brand-text placeholder-brand-text-muted focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/20 transition-all"
            />
          </div>

          {/* CTA Button */}
          <button className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary-dark hover:to-brand-primary text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all mb-3">
            Nh?n Uu Ðãi Ngay
          </button>

          {/* Secondary Action */}
          <button
            onClick={() => setIsVisible(false)}
            className="w-full text-brand-primary hover:text-brand-primary-dark font-medium text-sm py-2 transition-colors"
          >
            Có, tôi s? quay l?i sau
          </button>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-brand-border text-center text-xs text-brand-text-muted">
          ? B?o m?t - Không bao gi? chia s? email
        </div>
      </div>
    </div>
  );
}


