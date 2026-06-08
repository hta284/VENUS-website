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
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Dòng Sản Phẩm CocoVenus</h2>
          <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg">
            Sự kết hợp hoàn hảo giữa Dầu Dừa Bến Tre và Tinh Dầu Bưởi giúp chăm sóc tóc toàn diện.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-brand-cream/30 rounded-2xl p-6 md:p-8 border border-brand-green/10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-full aspect-[4/5] bg-gradient-to-b from-brand-green/20 to-brand-green/5 rounded-xl mb-6 relative flex items-center justify-center p-8">
              <div className="w-24 h-48 bg-gradient-to-t from-brand-green to-brand-green-light rounded-t-2xl rounded-b-lg border-2 border-brand-green-dark/20 shadow-lg relative">
                <div className="absolute top-0 -mt-6 w-8 h-12 bg-zinc-800 rounded-t-md mx-auto left-0 right-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-brand-cream rounded flex items-center justify-center p-1 border border-brand-green/30">
                  <span className="font-serif text-[10px] uppercase font-bold text-brand-green">Dầu Gội</span>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">{shampooObj.name}</h3>
            <p className="text-brand-brown/70 mb-4 px-4 h-12 line-clamp-2">{shampooObj.description}</p>
            <div className="text-sm border-t border-b border-brand-green/10 py-3 w-full mb-6">
              <span className="font-medium text-brand-green">Thành phần:</span> {shampooObj.ingredients}
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
            
            <div className="w-full aspect-[4/5] bg-gradient-to-b from-brand-gold/10 to-transparent rounded-xl mb-6 relative flex items-center justify-center px-4">
              <div className="flex gap-2">
                <div className="w-20 h-40 bg-gradient-to-t from-brand-green to-brand-green-light rounded-t-2xl rounded-b-lg border-2 border-brand-green-dark/20 shadow-lg relative transform -rotate-6">
                  <div className="absolute top-0 -mt-5 w-6 h-10 bg-zinc-800 rounded-t-md mx-auto left-0 right-0"></div>
                </div>
                <div className="w-20 h-36 bg-gradient-to-t from-brand-green to-brand-green-light rounded-t-2xl rounded-b-lg border-2 border-brand-green-dark/20 shadow-lg relative transform mt-4 rotate-6 z-10">
                  <div className="absolute top-0 -mt-5 w-6 h-8 bg-brand-cream border border-black/10 rounded-t-md mx-auto left-0 right-0"></div>
                </div>
              </div>
            </div>
            
            <h3 className="font-serif text-2xl font-bold mb-2">{bundleObj.name}</h3>
            <p className="text-brand-brown/70 mb-4 px-4 h-12 flex items-center justify-center">{bundleObj.description}</p>
            
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
            <div className="w-full aspect-[4/5] bg-gradient-to-b from-brand-green/20 to-brand-green/5 rounded-xl mb-6 relative flex items-center justify-center p-8">
              <div className="w-24 h-40 bg-gradient-to-t from-brand-green to-brand-green-light rounded-t-2xl rounded-b-lg border-2 border-brand-green-dark/20 shadow-lg relative mt-8">
                <div className="absolute top-0 -mt-5 w-8 h-10 w-12 bg-brand-cream rounded-t-md mx-auto left-0 right-0 border border-black/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-brand-cream rounded flex items-center justify-center p-1 border border-brand-green/30">
                  <span className="font-serif text-[10px] uppercase font-bold text-brand-green">Dầu Xả</span>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">{conditionerObj.name}</h3>
            <p className="text-brand-brown/70 mb-4 px-4 h-12 line-clamp-2">{conditionerObj.description}</p>
            <div className="text-sm border-t border-b border-brand-green/10 py-3 w-full mb-6">
              <span className="font-medium text-brand-green">Thành phần:</span> {conditionerObj.ingredients}
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
      </div>
    </section>
  );
}
