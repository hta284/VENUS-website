import { Zap, Leaf, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "K?t Qu? Nhanh Chóng",
    description: "Nhìn th?y s? c?i thi?n trong vòng 7 ngày ho?c hoàn l?i ti?n"
  },
  {
    icon: Leaf,
    title: "100% T? Nhiên",
    description: "Không ch?a hóa ch?t d?c h?i, du?c ch?ng nh?n t? nhiên"
  },
  {
    icon: Shield,
    title: "An Toàn & Ki?m Ch?ng",
    description: "Ðu?c ki?m nghi?m b?i chuyên gia da li?u, an toàn cho m?i lo?i da"
  },
  {
    icon: Zap,
    title: "Công Ngh? Tiên Ti?n",
    description: "K?t h?p công th?c truy?n th?ng v?i khoa h?c hi?n d?i"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-brand-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-brand-primary mb-4 border border-brand-primary/20">
            T?i Sao Ch?n CocoVenus
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-4">
            Công D?ng & L?i Ích
          </h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
            Khám phá nh?ng l?i ích tuy?t v?i mà s?n ph?m c?a chúng tôi mang l?i
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-full glass rounded-2xl p-8 border border-brand-border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 mb-6 group-hover:from-brand-primary/40 group-hover:to-brand-secondary/40 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-brand-primary group-hover:text-brand-primary-dark transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg text-brand-text mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              number: "10+",
              title: "Nam Kinh Nghi?m",
              desc: "Hon m?t th?p k? chuyên nghi?p trong ngành cham sóc da"
            },
            {
              number: "50K+",
              title: "Khách Hàng T?ng",
              desc: "Hàng ch?c nghìn khách hàng hài lòng trên kh?p th? gi?i"
            },
            {
              number: "99%",
              title: "T? L? Hài Lòng",
              desc: "G?n nhu t?t c? khách hàng s? gi?i thi?u cho b?n bè"
            }
          ].map((stat, i) => (
            <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
              <div className="inline-block glass rounded-2xl p-8 border border-brand-border w-full">
                <p className="font-serif text-4xl md:text-5xl font-bold text-brand-primary mb-2">
                  {stat.number}
                </p>
                <h3 className="font-semibold text-brand-text mb-2">{stat.title}</h3>
                <p className="text-sm text-brand-text-muted">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


