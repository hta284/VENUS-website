import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-tertiary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -right-32 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-32 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/50 mb-6 backdrop-blur-sm">
            <Mail className="w-8 h-8 text-brand-primary" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-4">
            Nh?n Uu Ðãi Ð?c Quy?n
          </h2>

          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto mb-8">
            Ðang ký email d? nh?n b?n tin hàng tu?n v?i m?o cham sóc da, uu dãi d?c quy?n và s?n ph?m m?i nh?t.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nh?p email c?a b?n"
                required
                className="w-full px-5 py-4 rounded-xl border-2 border-brand-border bg-white/80 backdrop-blur-sm text-brand-text placeholder-brand-text-muted focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/20 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary-dark hover:to-brand-primary text-white px-8 py-4 rounded-xl font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Ðang Ký</span>
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="mt-6 inline-block glass px-6 py-3 rounded-xl border border-brand-border/50 text-sm font-medium text-brand-primary animate-fade-in-up">
              ? C?m on! Vui lòng ki?m tra email c?a b?n.
            </div>
          )}

          {/* Trust statement */}
          <p className="text-xs text-brand-text-muted mt-6">
            Chúng tôi không bao gi? chia s? email c?a b?n. B?n có th? h?y dang ký b?t k? lúc nào.
          </p>
        </div>
      </div>
    </section>
  );
}


