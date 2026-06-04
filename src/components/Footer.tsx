import { Heart, Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-text text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-primary rounded-full" />
              <span className="font-serif text-xl font-bold">CocoVenus</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              S?n ph?m cham sóc da cao c?p t? các thành ph?n t? nhiên t?t nh?t.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Mail, label: "Email" }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center hover:bg-brand-primary/40 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {[
            {
              title: "S?n Ph?m",
              links: ["T?t C? S?n Ph?m", "Serum", "Kem Du?ng", "Toner"]
            },
            {
              title: "Công Ty",
              links: ["V? Chúng Tôi", "Blog", "Công Vi?c", "Liên H?"]
            },
            {
              title: "H? Tr?",
              links: ["Câu H?i Thu?ng G?p", "Tr? L?i Hàng", "V?n Chuy?n", "Chính Sách"]
            }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* Payment Methods */}
          <div className="mb-8">
            <p className="text-xs text-white/60 uppercase tracking-widest font-medium mb-4">
              Phuong Th?c Thanh Toán
            </p>
            <div className="flex gap-4">
              {["?? Th? Tín D?ng", "?? Chuy?n Kho?n", "?? Ví Ði?n T?", "? Thanh Toán Sau"].map((method) => (
                <div key={method} className="px-4 py-2 rounded-lg bg-white/10 text-xs text-white/70">
                  {method}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} CocoVenus. T?t c? quy?n du?c b?o luu.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-brand-primary fill-brand-primary" />
              <span>by Thorakao Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


