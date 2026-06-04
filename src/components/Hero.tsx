import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="glass px-4 py-2 rounded-full text-sm font-medium text-brand-primary border border-brand-primary/20">
                ? #1 Cham Sóc Da T? Nhiên
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6 text-brand-text">
              Làm Sáng Và
              <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Khôi Ph?c Da
              </span>
            </h1>
            
            <p className="text-lg text-brand-text-muted mb-8 leading-relaxed max-w-xl">
              S?n ph?m cham sóc da cao c?p du?c t?o ra t? các thành ph?n t? nhiên t?t nh?t. C?m nh?n s? khác bi?t t? nh?ng ngày d?u tiên.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#products"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary-dark hover:to-brand-primary text-white px-8 py-4 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <span>Khám Phá Ngay</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                <Play className="w-4 h-4" />
                <span>Xem Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-border">
              {[
                { number: "10K+", label: "Khách Hàng H?nh Phúc" },
                { number: "4.9?", label: "Ðánh Giá Trung Bình" },
                { number: "100%", label: "T? Nhiên & An Toàn" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-serif text-2xl font-bold text-brand-primary">{stat.number}</p>
                  <p className="text-xs text-brand-text-muted font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30 rounded-3xl blur-2xl opacity-50 animate-glow" />
              
              {/* Image placeholder with modern design */}
              <div className="relative rounded-3xl overflow-hidden glass border border-brand-border shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-tertiary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-4xl">??</span>
                    </div>
                    <p className="text-brand-text-muted text-sm font-medium">Premium Beauty Product</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 glass rounded-2xl p-4 shadow-lg border border-brand-border/50 max-w-xs animate-float">
              <p className="font-medium text-sm text-brand-text mb-2">Công Th?c Khoa H?c</p>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                K?t h?p thành ph?n t? nhiên v?i công ngh? hi?n d?i d? mang l?i k?t qu? t?t nh?t.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


