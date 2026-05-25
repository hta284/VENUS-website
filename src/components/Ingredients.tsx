import { motion } from 'motion/react';

export default function Ingredients() {
  return (
    <section className="py-20 bg-brand-cream border-y border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Tinh Túy Từ Thiên Nhiên</h2>
          <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg">Sự hòa quyện của hai nguyên liệu truyền thống trong một công thức hiện đại.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Ingredient 1: Coconut */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
          >
            <div className="w-32 h-32 shrink-0 bg-brand-green/10 rounded-full flex items-center justify-center text-5xl">
              🥥
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-3 text-brand-green">Dầu Dừa Bến Tre</h3>
              <p className="text-brand-brown/80 leading-relaxed text-lg">
                Giàu axit lauric tự nhiên, dầu dừa Bến Tre thẩm thấu sâu vào lõi tóc, giúp <strong>dưỡng ẩm sâu, phục hồi tóc hư tổn</strong> và tạo màng bảo vệ tóc khỏi các tác nhân gây hại từ môi trường.
              </p>
            </div>
          </motion.div>

          {/* Ingredient 2: Pomelo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row-reverse items-center sm:items-start gap-6 text-center sm:text-right"
          >
            <div className="w-32 h-32 shrink-0 bg-orange-100 rounded-full flex items-center justify-center text-5xl">
              🍊
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-3 text-orange-600">Tinh Dầu Bưởi Thuần Việt</h3>
              <p className="text-brand-brown/80 leading-relaxed text-lg">
                Chứa hàm lượng Vitamin C tự nhiên cao, tinh dầu bưởi giúp <strong>làm sạch da đầu, kháng khuẩn, giảm gàu</strong> và đặc biệt hiệu quả trong việc <strong>kích thích nang tóc phát triển</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
