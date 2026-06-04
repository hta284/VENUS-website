import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Làm S?ch",
    description: "R?a s?ch m?t v?i nu?c ?m d? m? l? chân lông"
  },
  {
    number: "02",
    title: "Toner",
    description: "Thoa toner lên toàn b? m?t b?ng cotton ho?c tay"
  },
  {
    number: "03",
    title: "Serum",
    description: "Áp d?ng serum lên các vùng c?n cham sóc"
  },
  {
    number: "04",
    title: "Kem Du?ng",
    description: "K?t thúc b?ng kem du?ng d? khóa d? ?m"
  }
];

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-brand-primary mb-4 border border-brand-primary/20">
            Hu?ng D?n S? D?ng
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-4">
            Quy Trình 4 Bu?c Ðon Gi?n
          </h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
            Ch? c?n 5 phút m?i ngày d? có làn da kh?e m?nh và r?ng r?
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full glass rounded-2xl p-8 border border-brand-border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-center">
                {/* Number */}
                <div className="text-5xl font-bold text-brand-primary/20 mb-2">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center group-hover:from-brand-primary/40 group-hover:to-brand-secondary/40 transition-all">
                  <CheckCircle className="w-8 h-8 text-brand-primary" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-brand-text mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 border border-brand-border animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-semibold text-lg text-brand-text mb-4 flex items-center gap-2">
              <span className="text-2xl">??</span>
              M?o Ð? Có K?t Qu? T?t Nh?t
            </h3>
            <ul className="space-y-3">
              {[
                "S? d?ng hàng ngày d? có k?t qu? t?i uu",
                "Áp d?ng bu?i sáng và bu?i t?i",
                "Không quên ch?ng n?ng vào ban ngày",
                "U?ng d? nu?c d? c?p ?m t? bên trong"
              ].map((tip, i) => (
                <li key={i} className="flex gap-2 text-sm text-brand-text-muted">
                  <span className="text-brand-primary font-bold">?</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-8 border border-brand-border animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h3 className="font-semibold text-lg text-brand-text mb-4 flex items-center gap-2">
              <span className="text-2xl">??</span>
              Ði?u C?n Tránh
            </h3>
            <ul className="space-y-3">
              {[
                "Không áp d?ng quá nhi?u s?n ph?m cùng lúc",
                "Tránh ti?p xúc v?i m?t",
                "Không s? d?ng trên da b? t?n thuong",
                "Ng?ng s? d?ng n?u có d?u hi?u kích ?ng"
              ].map((warning, i) => (
                <li key={i} className="flex gap-2 text-sm text-brand-text-muted">
                  <span className="text-brand-primary-dark font-bold">?</span>
                  {warning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


