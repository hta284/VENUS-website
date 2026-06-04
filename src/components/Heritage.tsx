import { Award, Users, Globe, Zap } from "lucide-react";

export default function Heritage() {
  return (
    <section id="heritage" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-brand-primary mb-4 border border-brand-primary/20">
              Câu Chuy?n C?a Chúng Tôi
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
              Hành Trình T?
              <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Ðam Mê Ð?n Hi?n Th?c
              </span>
            </h2>

            <p className="text-lg text-brand-text-muted mb-6 leading-relaxed">
              CocoVenus du?c thành l?p v?i m?t m?c dích don gi?n: t?o ra nh?ng s?n ph?m cham sóc da t? nhiên, hi?u qu? và giá c? ph?i chang cho m?i ngu?i.
            </p>

            <p className="text-lg text-brand-text-muted mb-8 leading-relaxed">
              Hon 10 nam qua, chúng tôi dã nghiên c?u, phát tri?n và hoàn thi?n công th?c c?a mình d? mang l?i k?t qu? t?t nh?t.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {[
                { year: "2014", text: "Thành l?p CocoVenus v?i ni?m dam mê t?o m? ph?m t? nhiên" },
                { year: "2017", text: "Ð?t ch?ng nh?n FDA và b?t d?u bán qu?c t?" },
                { year: "2020", text: "Ph?c v? hon 10,000 khách hàng trên toàn th? gi?i" },
                { year: "Nay", text: "Tr? thành thuong hi?u cham sóc da hàng d?u ? Vi?t Nam" }
              ].map((milestone, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-primary text-sm">{milestone.year}</p>
                    <p className="text-brand-text-muted text-sm mt-1">{milestone.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image/Video Area */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main image area */}
              <div className="glass rounded-3xl p-8 border border-brand-border overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-tertiary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">??</div>
                    <p className="text-brand-text-muted font-medium">S?n Ph?m T? Nhiên 100%</p>
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: Users, label: "Khách Hàng", value: "50K+" },
                  { icon: Globe, label: "Qu?c Gia", value: "25+" },
                  { icon: Award, label: "Gi?i Thu?ng", value: "8+" },
                  { icon: Zap, label: "S?n Ph?m", value: "20+" }
                ].map((stat, i) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={i} className="glass rounded-xl p-4 border border-brand-border text-center">
                      <IconComponent className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                      <p className="font-bold text-brand-primary text-lg">{stat.value}</p>
                      <p className="text-xs text-brand-text-muted">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


