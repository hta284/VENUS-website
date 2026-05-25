import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingChat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show chat bubble after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="bg-white p-3 rounded-2xl rounded-br-none shadow-xl border border-brand-green/10 text-sm max-w-[200px] hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
        Xin chào! 👋 Cần tư vấn chọn sản phẩm phù hợp?
      </div>
      <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-transform hover:scale-110">
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
