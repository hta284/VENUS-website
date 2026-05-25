import { motion } from 'motion/react';

export default function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-brand-green text-brand-cream relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-green-light/40 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="w-20 h-20 bg-brand-cream rounded-full mx-auto mb-8 flex items-center justify-center p-2 shadow-xl"
        >
          {/* Mock Logo representing Thorakao legacy */}
           <div className="w-full h-full border border-brand-green rounded-full flex flex-col items-center justify-center text-brand-green">
             <span className="font-serif text-[10px] font-bold leading-none mb-0.5">EST</span>
             <span className="font-serif text-lg font-bold leading-none">1961</span>
           </div>
        </motion.div>

        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-brand-gold">
          Thorakao — Hơn 60 Năm Vì Vẻ Đẹp Việt
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12">
          Được thành lập từ năm 1961, Công ty Lan Hảo (Thorakao) đã không ngừng nghiên cứu và ứng dụng những tinh hoa từ thảo mộc thiên nhiên Việt Nam vào các sản phẩm chăm sóc sắc đẹp. CocoVenus là sự kết tinh của truyền thống 60 năm và công nghệ hiện đại, mang đến giải pháp làm đẹp an toàn, hiệu quả, đậm đà bản sắc Việt.
        </p>

        <blockquote className="font-serif italic text-2xl md:text-3xl text-brand-gold border-y border-brand-gold/30 py-8 mx-auto inline-block">
          "Trắng Mịn Và Đẹp Như Thiên Thần"
        </blockquote>
      </div>
    </section>
  );
}
