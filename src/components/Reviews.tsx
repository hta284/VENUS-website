import { Star, Quote } from "lucide-react";

const reviewsData = [
  {
    name: "Nguy?n Hà Linh",
    role: "Beauty Influencer",
    content: "Ðây là s?n ph?m t?t nh?t mà tôi dã t?ng s? d?ng. Da c?a tôi kh?e hon, sáng hon ch? sau 2 tu?n!",
    rating: 5,
    image: "?????"
  },
  {
    name: "Tr?n Minh Hoa",
    role: "Bác Si Da Li?u",
    content: "Tôi gi?i thi?u s?n ph?m này cho t?t c? b?nh nhân c?a mình. Công th?c an toàn và hi?u qu? lâm sàng dã du?c ch?ng minh.",
    rating: 5,
    image: "?????"
  },
  {
    name: "Lê Qu?nh Anh",
    role: "Nhân Viên Công Ty",
    content: "Giá c? h?p lý, ch?t lu?ng cao. Tôi dã mua l?i nhi?u l?n và luôn r?t hài lòng v?i k?t qu?.",
    rating: 5,
    image: "?????"
  },
  {
    name: "Ph?m Thu Huong",
    role: "M? B?m",
    content: "S?n ph?m này không gây kích ?ng da, ngay c? cho da nh?y c?m c?a tôi. R?t an tâm khi s? d?ng.",
    rating: 5,
    image: "????????"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-brand-primary mb-4 border border-brand-primary/20">
            Nh?ng Ph?n H?i T? Khách Hàng
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-4">
            T?i Sao Khách Hàng Yêu Thích
            <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              CocoVenus
            </span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full glass rounded-2xl p-6 border border-brand-border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 relative">
                {/* Quote Icon */}
                <Quote className="w-6 h-6 text-brand-primary/30 absolute top-4 right-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-brand-text leading-relaxed mb-6">
                  "{review.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center text-lg">
                    {review.image}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-brand-text">{review.name}</p>
                    <p className="text-xs text-brand-text-muted">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: "4.9/5", label: "Ðánh Giá Trung Bình", desc: "T? 2,500+ dánh giá" },
            { value: "98%", label: "Khách Hàng Quay L?i", desc: "Mua l?i s?n ph?m" },
            { value: "30 Ngày", label: "B?o Hành", desc: "Hoàn l?i ti?n 100%" }
          ].map((indicator, i) => (
            <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
              <div className="glass rounded-2xl p-8 border border-brand-border">
                <p className="text-3xl font-bold text-brand-primary mb-2">{indicator.value}</p>
                <p className="font-semibold text-brand-text mb-1">{indicator.label}</p>
                <p className="text-sm text-brand-text-muted">{indicator.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


