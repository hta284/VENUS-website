import { Award, Shield, Zap, Leaf } from "lucide-react";

const trusts = [
  { icon: Award, text: "100% T? Nhiên & An Toàn" },
  { icon: Shield, text: "Ðu?c Ki?m Nghi?m B?i Bác Si" },
  { icon: Zap, text: "K?t Qu? Nhanh Ch? Sau 7 Ngày" },
  { icon: Leaf, text: "Không Có Hóa Ch?t Ð?c H?i" }
];

export default function TrustBar() {
  return (
    <section className="relative -mt-12 md:-mt-16 mb-8 md:mb-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl border border-brand-border shadow-lg overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-secondary/5 to-brand-tertiary/5 -z-10" />

          <div className="grid md:grid-cols-4 divide-x divide-brand-border/20">
            {trusts.map((trust, index) => {
              const IconComponent = trust.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-6 hover:bg-white/20 transition-colors duration-300 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center group-hover:from-brand-primary/40 group-hover:to-brand-secondary/40 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-brand-primary group-hover:text-brand-primary-dark transition-colors" />
                    </div>
                  </div>
                  <p className="font-medium text-sm text-brand-text group-hover:text-brand-primary transition-colors">
                    {trust.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


