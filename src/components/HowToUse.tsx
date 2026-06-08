import { Droplets, Hand, Timer } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowToUse() {
  const steps = [
    {
      icon: Droplets,
      num: 1,
      title: "Làm ướt tóc",
      desc: "Làm ướt tóc hoàn toàn bằng nước ấm để mở biểu bì tóc."
    },
    {
      icon: Hand,
      num: 2,
      title: "Gội và Massage",
      desc: "Thoa dầu gội CocoVenus, massage nhẹ nhàng da đầu từ 2–3 phút."
    },
    {
      icon: Timer,
      num: 3,
      title: "Dùng dầu xả",
      desc: "Xả sạch bọt. Thoa dầu xả lên phần thân và ngọn tóc, giữ 1–2 phút rồi xả lại."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Chu Trình Chăm Sóc Tóc 3 Bước</h2>
          <p className="text-brand-brown/70 max-w-2xl mx-auto">Hiệu quả tốt nhất khi sử dụng trọn bộ sản phẩm CocoVenus.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-4 relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:absolute top-12 left-[15%] right-[15%] h-px bg-brand-green/20 border-t border-dashed"></div>

          {steps.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index} 
              className="flex-1 flex flex-col items-center text-center relative z-10 w-full"
            >
              <div className="w-24 h-24 bg-brand-cream rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-6 relative group hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold text-white font-bold rounded-full flex items-center justify-center shadow-md">
                  {step.num}
                </div>
                <step.icon className="w-10 h-10 text-brand-green group-hover:text-brand-gold transition-colors" />
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-brand-brown/70 text-sm px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
