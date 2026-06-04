import { Leaf, Droplet, Sparkles, Shield } from "lucide-react";

const ingredients = [
  {
    icon: Leaf,
    name: "Chi?t Xu?t Cây Lô H?i",
    benefits: "Du?ng ?m sâu, làm d?u da",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Droplet,
    name: "Vitamin C Tinh Khi?t",
    benefits: "Làm sáng da, ch?ng oxy hóa",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    icon: Sparkles,
    name: "Hyaluronic Acid",
    benefits: "Gi? d? ?m, tái t?o da",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Shield,
    name: "Niacinamide",
    benefits: "Cân b?ng d?u, se khít l? chân lông",
    color: "from-pink-400 to-pink-600"
  },
  {
    icon: Leaf,
    name: "Peptides T? Nhiên",
    benefits: "Ch?ng lão hóa, tang dàn h?i",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: Droplet,
    name: "Tinh D?u Huong Hoa",
    benefits: "Thom d? ch?u, d? da",
    color: "from-rose-400 to-rose-600"
  }
];

export default function Ingredients() {
  return (
    <section className="py-20 md:py-32 bg-brand-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-brand-primary mb-4 border border-brand-primary/20">
            Thành Ph?n Chính
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-4">
            Công Th?c Hoàn H?o T?
            <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              T? Nhiên & Khoa H?c
            </span>
          </h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
            M?i thành ph?n du?c ch?n l?c d? mang l?i hi?u qu? t?i da
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => {
            const IconComponent = ingredient.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-full glass rounded-2xl p-6 border border-brand-border transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ingredient.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg text-brand-text mb-2">
                    {ingredient.name}
                  </h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {ingredient.benefits}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-20 pt-12 border-t border-brand-border">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="font-semibold text-2xl text-brand-text mb-2">
              Ch?ng Nh?n & Ki?m Ð?nh
            </h3>
            <p className="text-brand-text-muted">
              T?t c? s?n ph?m d?u du?c ki?m test và ch?ng nh?n b?i các co quan uy tín
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "FDA Approved", icon: "?" },
              { name: "Cruelty-Free", icon: "??" },
              { name: "Vegan Friendly", icon: "??" },
              { name: "Dermatologist Tested", icon: "?????" }
            ].map((cert, i) => (
              <div key={i} className="text-center glass rounded-xl p-6 border border-brand-border animate-fade-in-up" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                <div className="text-3xl mb-2">{cert.icon}</div>
                <p className="font-medium text-sm text-brand-text">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


