import { ShoppingCart, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart, productsList } from '../context/CartContext';

export default function Products() {
  const { addToCart } = useCart();
  
  const shampooObj = productsList.find(p => p.id === 'shampoo')!;
  const bundleObj = productsList.find(p => p.id === 'bundle')!;
  const conditionerObj = productsList.find(p => p.id === 'conditioner')!;

  return (
    <section id="products" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Dòng Sản Phẩm Venus Coco</h2>
          <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg">
            Sự kết hợp hoàn hảo giữa Dầu Dừa Bến Tre và Tinh chất bưởi giúp chăm sóc tóc toàn diện, kích mọc tóc và điều tiết dầu nhờn bết dính.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-brand-cream/30 rounded-2xl p-6 md:p-8 border border-brand-green/10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-full aspect-[4/5] bg-gradient-to-b from-brand-green/20 to-brand-green/5 rounded-xl mb-6 relative flex items-center justify-center p-4">
              <img src="/goi.png" alt="Dầu gội Venus Coco" className="w-full h-full object-contain filter drop-shadow-md" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2 leading-tight">{shampooObj.name}</h3>
            <p className="text-brand-brown/70 mb-4 px-4 min-h-[3rem]">{shampooObj.description}</p>
            <div className="text-sm border-t border-b border-brand-green/10 py-3 w-full mb-6">
              <span className="font-medium text-brand-green">Quy cách:</span> Chai 500ml &bull; 100% Thảo Mộc
            </div>
            <div className="text-2xl font-bold mb-6 text-brand-green">{shampooObj.price.toLocaleString('vi-VN')} ₫</div>
            <button 
              onClick={() => addToCart(shampooObj)}
              className="w-full bg-brand-green text-white hover:bg-brand-green-dark py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2 mt-auto cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              Thêm vào giỏ
            </button>
          </motion.div>

          {/* Bundle */}
          <motion.div 
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-brand-cream rounded-2xl p-6 md:p-8 border-2 border-brand-gold relative flex flex-col items-center text-center shadow-2xl z-10 before:absolute before:-inset-[2px] before:rounded-2xl before:border-2 before:border-brand-gold/30 before:animate-ping before:pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-white px-6 py-1.5 rounded-full font-bold text-sm shadow-md whitespace-nowrap">
              {bundleObj.badge}
            </div>
            
            <div className="w-full aspect-[4/5] bg-gradient-to-b from-brand-gold/15 to-transparent rounded-xl mb-6 relative flex items-center justify-center pb-4 overflow-hidden">
              <img src="/combo.png" alt="Combo Dầu Gội & Xả Venus Coco" className="w-full h-full object-contain filter drop-shadow-lg" referrerPolicy="no-referrer" />
            </div>
            
            <h3 className="font-serif text-2xl font-bold mb-2 leading-tight">{bundleObj.name}</h3>
            <p className="text-brand-brown/70 mb-4 px-4 min-h-[3rem] text-sm md:text-base flex items-center justify-center">{bundleObj.description}</p>
            
            <div className="flex flex-col items-center w-full mb-6">
              <span className="text-gray-400 line-through text-sm">{bundleObj.originalPrice?.toLocaleString('vi-VN')} ₫</span>
              <div className="text-3xl font-bold text-brand-green">{bundleObj.price.toLocaleString('vi-VN')} ₫</div>
            </div>
            
            <button 
              onClick={() => addToCart(bundleObj)}
              className="w-full bg-brand-gold text-brand-brown hover:bg-yellow-500 py-3.5 rounded-full font-bold transition-colors flex items-center justify-center gap-2 mt-auto shadow-md cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" />
              Mua Combo Ngay
            </button>
            <div className="mt-3 text-xs text-brand-brown/60 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Cam kết chính hãng 100%
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-brand-cream/30 rounded-2xl p-6 md:p-8 border border-brand-green/10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-full aspect-[4/5] bg-gradient-to-b from-brand-green/20 to-brand-green/5 rounded-xl mb-6 relative flex items-center justify-center p-4">
              <img src="/xa.png" alt="Dầu xả Venus Coco" className="w-full h-full object-contain filter drop-shadow-md" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2 leading-tight">{conditionerObj.name}</h3>
            <p className="text-brand-brown/70 mb-4 px-4 min-h-[3rem]">{conditionerObj.description}</p>
            <div className="text-sm border-t border-b border-brand-green/10 py-3 w-full mb-6">
              <span className="font-medium text-brand-green">Quy cách:</span> Chai 500ml &bull; 100% Thảo Mộc
            </div>
            <div className="text-2xl font-bold mb-6 text-brand-green">{conditionerObj.price.toLocaleString('vi-VN')} ₫</div>
            <button 
              onClick={() => addToCart(conditionerObj)}
              className="w-full bg-brand-green text-white hover:bg-brand-green-dark py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2 mt-auto cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              Thêm vào giỏ
            </button>
          </motion.div>
        </div>

        <div className="mt-12 text-center text-xs text-brand-brown/50 italic">
          * Lưu ý: Giá hiển thị trên là giá niêm yết chính hãng chưa giảm. Hãy nhập thêm mã giảm giá bất kỳ tại bước thanh toán để mua với mức giá ưu đãi hơn nữa!
        </div>
      </div>
    </section>
  );
}
