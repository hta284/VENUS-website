import { ShoppingCart, Globe, Store, Package } from "lucide-react";

const channels = [
  {
    icon: ShoppingCart,
    name: "Website Chính Th?c",
    description: "Mua tr?c ti?p t? trang web c?a chúng tôi v?i giá t?t nh?t",
    action: "Mua Ngay",
    url: "#"
  },
  {
    icon: Store,
    name: "C?a Hàng Tr?c Ti?p",
    description: "Ghé tham showroom c?a chúng tôi d? tr?i nghi?m s?n ph?m",
    action: "Tìm Ð?a Ch?",
    url: "#"
  },
  {
    icon: Globe,
    name: "Amazon & Marketplaces",
    description: "Mua trên các n?n t?ng thuong m?i di?n t? uy tín",
    action: "Khám Phá",
    url: "#"
  },
  {
    icon: Package,
    name: "Ð?t Hàng Buôn S?",
    description: "Liên h? d? du?c giá s? và di?u ki?n d?c bi?t",
    action: "Liên H?",
    url: "#"
  }
];

export default function Channels() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-brand-primary mb-4 border border-brand-primary/20">
            Noi Mua Hàng
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-4">
            Mua ? Ðâu
            <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              S?n Ph?m CocoVenus
            </span>
          </h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
            Chúng tôi có m?t ? nhi?u kênh bán hàng d? ti?n l?i cho b?n
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, index) => {
            const IconComponent = channel.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={channel.url} className="block h-full">
                  <div className="h-full glass rounded-2xl p-8 border border-brand-border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 mb-6 group-hover:from-brand-primary/40 group-hover:to-brand-secondary/40 transition-all">
                      <IconComponent className="w-8 h-8 text-brand-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-lg text-brand-text mb-3">
                      {channel.name}
                    </h3>
                    <p className="text-sm text-brand-text-muted mb-6 leading-relaxed">
                      {channel.description}
                    </p>

                    {/* Button */}
                    <button className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary font-medium group-hover:from-brand-primary/20 group-hover:to-brand-secondary/20 transition-all duration-300 border border-brand-primary/20 group-hover:border-brand-primary/40">
                      {channel.action}
                    </button>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


