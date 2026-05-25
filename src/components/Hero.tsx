import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green font-medium text-xs mb-6 border border-brand-green/20">
              <Star className="w-3 h-3 fill-brand-green" />
              <span>Thương hiệu Việt từ 1961</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Mềm Mại Tự Nhiên <br/>
              <span className="italic text-brand-green">Vẻ Đẹp Từ Đất Việt</span>
            </h1>
            
            <p className="text-lg text-brand-brown/80 mb-8 max-w-xl mx-auto md:mx-0">
              Bộ đôi dầu gội & dầu xả chiết xuất Dầu Dừa Bến Tre và Tinh Dầu Bưởi — dành riêng cho mái tóc Việt.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#products" className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Mua Ngay — Miễn Phí Ship
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#reviews" className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-brand-green border border-brand-green hover:bg-brand-green/5 transition-colors flex items-center justify-center">
                Xem Đánh Giá Thực Tế
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-brand-brown/70">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              🔥 <span className="font-bold text-brand-brown">Combo đang được 500+ người</span> thêm vào giỏ hôm nay
            </div>
          </motion.div>
          
          {/* Images/Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square bg-gradient-to-tr from-brand-green to-brand-green-light rounded-[2rem] overflow-hidden shadow-2xl relative">
              {/* Abstract bottle representations via css for placeholder */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-4 h-[70%]">
                {/* Shampoo */}
                <div className="w-24 md:w-32 h-[90%] bg-brand-cream/10 backdrop-blur-md rounded-t-3xl border border-white/20 shadow-inner relative flex flex-col justify-end pb-8 items-center">
                   <div className="absolute top-0 -mt-6 w-8 h-12 bg-zinc-800 rounded-t-md mx-auto left-0 right-0"></div>
                   <span className="font-serif text-white/90 font-bold text-center leading-tight">Dầu<br/>Gội</span>
                </div>
                {/* Conditioner */}
                <div className="w-24 md:w-32 h-[75%] bg-brand-cream/10 backdrop-blur-md rounded-t-3xl border border-white/20 shadow-inner relative flex flex-col justify-end pb-8 items-center">
                   <div className="absolute top-0 -mt-6 w-8 h-10 w-12 bg-brand-cream rounded-t-md mx-auto left-0 right-0 shadow-sm border border-black/10"></div>
                   <span className="font-serif text-white/90 font-bold text-center leading-tight">Dầu<br/>Xả</span>
                </div>
              </div>
              
              {/* Botanical accents */}
              <div className="absolute top-10 right-10 text-white/20">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>
            </div>
            
            {/* Trust badge floating */}
            <div className="absolute -left-4 md:-left-12 top-1/4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="bg-brand-cream p-2 rounded-full hidden sm:block">
                <Star className="w-6 h-6 text-brand-gold fill-brand-gold" />
              </div>
              <div>
                <p className="text-sm font-bold">10,000+</p>
                <p className="text-xs text-brand-brown/70">Phụ nữ tin dùng</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
