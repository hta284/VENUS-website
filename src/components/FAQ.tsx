import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "Sản phẩm CocoVenus của Thorakao có an toàn cho phụ nữ mang thai hoặc sau sinh không?",
      answer: "Hoàn toàn an toàn! Combo dầu gội & dầu xả CocoVenus chiết xuất từ Dầu Dừa Bến Tre và Tinh Dầu Bưởi thiên nhiên, không chứa parabens, silicon độc hại, lành tính tuyệt đối cho mẹ bầu và mẹ bỉm sữa sau sinh đang gặp tình trạng rụng tóc nghiêm trọng."
    },
    {
      question: "Gội bao lâu thì tình trạng rụng tóc sẽ giảm bớt?",
      answer: "Thông thường, từ 2 đến 3 tuần sử dụng đều đặn combo gội xả CocoVenus (khoảng 3 lần/tuần), bạn sẽ thấy lượng tóc rụng khi chải hoặc gội giảm tới 70%. Sau 1 tháng, các sợi tóc con bắt đầu mọc lởm chởm ở vùng trán, đỉnh đầu đầy sức sống."
    },
    {
      question: "Bộ sản phẩm có gây bết tóc do chứa Dầu Dừa không?",
      answer: "Không hề gây bết dính. Nhờ công nghệ nhũ hóa thảo mộc tiên tiến từ phòng Lab của Thorakao, lượng ẩm từ dầu dừa được cân bằng hoàn hảo với tinh dầu bưởi nhẹ dịu, giúp tóc giữ được độ suôn mượt bồng bềnh tự nhiên và da đầu thông thoáng suốt 24 giờ."
    },
    {
      question: "Tôi có được miễn phí giao nhận hàng không?",
      answer: "Có! Tất cả các đơn hàng mua trọn bộ Combo Gội & Xả CocoVenus (hoặc hóa đơn từ 200,000đ trở lên) đều được miễn phí giao hàng (Free Ship) toàn quốc một cách nhanh chóng nhất."
    },
    {
      question: "Thương hiệu Thorakao thành lập năm nào và có uy tín không?",
      answer: "Thorakao (Công ty Lan Hảo) tự hào là thương hiệu mỹ phẩm huyền thoại lâu đời bậc nhất Việt Nam, được thành lập từ năm 1961. Trải qua hơn 60 năm đồng hành cùng nhan sắc Việt, Thorakao đạt vô số giải thưởng uy tín và xuất khẩu sang cả thị trường Châu Âu, Mỹ, Trung Đông."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-cream border-t border-brand-green/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green font-medium text-xs mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Giải đáp thắc mắc</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-brown">Câu Hỏi Thường Gặp</h2>
          <p className="text-brand-brown/70 mt-3">Mọi điều bạn cần biết trước khi sở hữu bộ đôi siêu dưỡng CocoVenus</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-brand-green/10 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-brand-cream/10 transition-colors"
                >
                  <span className="font-bold text-base md:text-lg text-brand-brown leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-brand-green/5 flex items-center justify-center text-brand-green">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-6 pt-0 border-t border-brand-green/5 text-brand-brown/80 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
