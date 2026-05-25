import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-gold/20"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-brand-green">Nhận Ưu Đãi Độc Quyền</h2>
          <p className="text-brand-brown/80 mb-8 max-w-md mx-auto">
            Đăng ký nhận voucher <strong className="text-brand-gold">giảm giá 20%</strong> cho đơn hàng đầu tiên của bạn.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Nhập email của bạn..." 
              className="flex-1 px-5 py-4 rounded-full border border-brand-green/20 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-brand-cream/50"
              required
            />
            <button type="submit" className="bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green-dark transition-colors flex justify-center items-center gap-2">
              Đăng Ký
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          
          <p className="text-xs text-brand-brown/50 mt-4">
            Chúng tôi cam kết bảo mật thông tin của bạn. Có thể hủy đăng ký bất cứ lúc nào.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
