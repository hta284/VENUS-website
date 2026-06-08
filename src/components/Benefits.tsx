import { Leaf, Droplets, Flower2, Sparkles, Award, Receipt } from 'lucide-react';
import { motion } from 'motion/react';

export default function Benefits() {
  const benefits = [
    {
      icon: Leaf,
      title: "Thiên Nhiên Bản Địa",
      description: "Dầu dừa Bến Tre — nguồn nguyên liệu thuần Việt chất lượng cao"
    },
    {
      icon: Droplets,
      title: "Dưỡng Ẩm Chuyên Sâu",
      description: "Phục hồi tóc hư tổn, giữ ẩm suốt 24 giờ"
    },
    {
      icon: Flower2,
      title: "Trị Gàu & Kích Mọc",
      description: "Tinh dầu bưởi tự nhiên giảm gàu, kích thích chân tóc"
    },
    {
      icon: Sparkles,
      title: "An Toàn Cho Mọi Loại Tóc",
      description: "Lành tính, không chứa hóa chất độc hại, phù hợp sử dụng hàng ngày"
    },
    {
      icon: Award,
      title: "Thương Hiệu Uy Tín",
      description: "Thorakao — Hơn 60 năm đồng hành chăm sóc vẻ đẹp người Việt"
    },
    {
      icon: Receipt,
      title: "Giá Cả Phải Chăng",
      description: "Chất lượng làm đẹp cao cấp với mức giá hợp lý cho mọi gia đình"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-brand-cream border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold text-sm tracking-wider uppercase mb-2 block">Tại sao chọn</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">CocoVenus by Thorakao?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-green/5 hover:border-brand-green/20 hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-brand-green group-hover:text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-brand-brown">{benefit.title}</h3>
              <p className="text-brand-brown/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
