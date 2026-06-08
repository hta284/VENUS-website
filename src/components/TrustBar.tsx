import { CheckCircle2, ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustBar() {
  const items = [
    { icon: Leaf, text: 'Chiết xuất 100% thiên nhiên' },
    { icon: ShieldCheck, text: 'Thương hiệu Việt từ 1961' },
    { icon: CheckCircle2, text: 'Không hóa chất độc hại' },
    { icon: HeartHandshake, text: 'Phù hợp khí hậu Việt Nam' },
  ];

  return (
    <section className="bg-brand-green py-6 border-y border-brand-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          {items.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index} 
              className="flex items-center gap-2 text-white/90"
            >
              <item.icon className="w-5 h-5 text-brand-gold" />
              <span className="text-sm md:text-base font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
