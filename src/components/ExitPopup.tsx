import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Show when cursor leaves the top edge of the window
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Fallback for mobile (show after 30s)
    const mobileTimer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 30000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold mx-auto mb-6">
          <Gift className="w-8 h-8" />
        </div>
        
        <div className="text-center">
          <h3 className="font-serif text-3xl font-bold text-brand-green mb-2">Chờ đã!</h3>
          <p className="text-brand-brown/80 mb-6 font-medium">
            Nhận ngay <strong className="text-brand-gold text-lg">10% GIẢM GIÁ</strong> cho toàn bộ đơn hàng dưỡng tóc CocoVenus hôm nay.
          </p>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="w-full bg-brand-gold text-brand-brown hover:bg-yellow-500 py-4 rounded-full font-bold text-lg mb-3 transition-colors shadow-lg"
          >
            Lấy Mã Giảm Giá
          </button>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="text-sm text-gray-400 hover:text-gray-600 underline"
          >
            Không, cảm ơn. Tôi muốn bỏ lỡ ưu đãi.
          </button>
        </div>
      </div>
    </div>
  );
}
