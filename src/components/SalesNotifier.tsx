import { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PurchaseToast } from '../types';

const mockSales: Omit<PurchaseToast, 'id'>[] = [
  { name: 'Chị Lan', location: 'Quận 3, TP. Hồ Chí Minh', product: '1 Combo Gội & Xả CocoVenus', timeAgo: '2 phút trước' },
  { name: 'Anh Minh', location: 'Tp. Bến Tre', product: '2 Dầu Gội CocoVenus', timeAgo: '5 phút trước' },
  { name: 'Chị Thu Hương', location: 'Cầu Giấy, Hà Nội', product: '1 Combo Gội & Xả CocoVenus', timeAgo: '1 phút trước' },
  { name: 'Chị Ngọc', location: 'Hải Châu, Đà Nẵng', product: '1 Dầu Xả CocoVenus', timeAgo: '8 phút trước' },
  { name: 'Cô Hồng', location: 'Ninh Kiều, Cần Thơ', product: '1 Combo Gội & Xả CocoVenus', timeAgo: '12-phút trước' },
  { name: 'Chị Vân Anh', location: 'Thành phố Vinh', product: '1 Combo Gội & Xả CocoVenus', timeAgo: '3 phút trước' },
];

export default function SalesNotifier() {
  const [currentSale, setCurrentSale] = useState<PurchaseToast | null>(null);

  useEffect(() => {
    const showRandomSale = () => {
      const randomIdx = Math.floor(Math.random() * mockSales.length);
      const sale = mockSales[randomIdx];
      setCurrentSale({
        ...sale,
        id: Math.random().toString(),
      });

      // Hide after 6 seconds
      setTimeout(() => {
        setCurrentSale(null);
      }, 6000);
    };

    // First display after 4 seconds
    const initialTimer = setTimeout(showRandomSale, 4000);

    // Dynamic looping interval (every 18 seconds)
    const interval = setInterval(showRandomSale, 18000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm pointer-events-none">
      <AnimatePresence>
        {currentSale && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="pointer-events-auto bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-brand-green/10 flex items-center gap-3.5"
          >
            <div className="w-10 h-10 bg-brand-green text-white rounded-xl flex items-center justify-center shrink-0">
              <ShoppingBag className="w-5 h-5 animate-pulse" />
            </div>
            
            <div className="flex-grow pr-4">
              <div className="text-xs text-brand-brown/60 flex justify-between">
                <span>Đặt Mua Thành Công</span>
                <span>{currentSale.timeAgo}</span>
              </div>
              <p className="text-sm font-bold text-brand-brown mt-0.5">
                {currentSale.name} <span className="font-normal text-xs text-brand-brown/70">({currentSale.location})</span>
              </p>
              <p className="text-xs text-brand-green font-semibold mt-0.5">
                Vừa chốt mua {currentSale.product}
              </p>
            </div>

            <button
              onClick={() => setCurrentSale(null)}
              className="text-gray-300 hover:text-gray-500 shrink-0 self-start mt-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
