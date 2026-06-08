import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Reviews() {
  const reviews = [
    {
      name: "Nguyễn Thị Lan",
      role: "Nhân viên văn phòng",
      text: "Tóc mình trước đây rụng rất nhiều, dùng combo CocoVenus khoảng 1 tháng thấy tóc con mọc lởm chởm luôn. Mùi cũng rất thơm và lưu hương lâu.",
      initials: "L"
    },
    {
      name: "Trần Minh Châu",
      role: "Mẹ bỉm sữa",
      text: "Thích nhất là thành phần tự nhiên an toàn. Gội xong tóc mềm mượt, không bị bết dính. Giá cả lại quá hợp lý cho 1 sản phẩm chất lượng như vậy.",
      initials: "C"
    },
    {
      name: "Lê Thu Hương",
      role: "Sinh viên",
      text: "Đúng là Thorakao không bao giờ làm mình thất vọng. Dầu xả gỡ rối cực tốt, mùi hương bưởi dừa kết hợp siêu thư giãn lúc gội đầu.",
      initials: "H"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Khách Hàng Nói Gì?</h2>
          <div className="flex flex-col items-center mt-2">
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-6 h-6 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <p className="font-bold text-lg">10,000+ <span className="font-normal text-brand-brown/70">khách hàng tin dùng</span></p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              key={index}
              className="bg-brand-cream/40 p-8 rounded-2xl border border-brand-green/10 relative"
            >
              <div className="flex gap-1 mb-6 text-brand-gold">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-brand-gold" />)}
              </div>
              
              <blockquote className="text-brand-brown/80 mb-8 italic">
                "{review.text}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-serif text-xl font-bold">
                  {review.initials}
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-sm border flex items-center gap-1 border-brand-green text-brand-green px-2 py-0.5 rounded text-xs mt-1 bg-brand-green/5 w-fit">
                    Đã mua combo
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
