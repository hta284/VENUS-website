import { TrendingUp, Users, Heart, Award } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Khách Hàng Hài Lòng",
      trend: "+25% nam nay",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      value: "4.9?",
      label: "Ðánh Giá Trung Bình",
      trend: "T? 2,500+ reviews",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "T? L? Quay L?i",
      trend: "Khách hàng l?p l?i",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      value: "8+",
      label: "Gi?i Thu?ng Qu?c T?",
      trend: "Công nhân ch?t lu?ng",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-brand-primary mb-4 border border-brand-primary/20">
            Th?ng Kê & Thành Tích
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-4">
            Nh?ng Con S? Nói
            <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Lên Ti?ng
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-full glass rounded-2xl p-6 border border-brand-border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute -inset-40 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10 rounded-full blur-3xl`} />

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <p className="font-serif text-3xl font-bold text-brand-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-brand-text mb-3">
                    {stat.label}
                  </p>
                  <p className="text-xs text-brand-text-muted">
                    {stat.trend}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-20 pt-12 border-t border-brand-border">
          <h3 className="font-semibold text-2xl text-brand-text mb-8 text-center animate-fade-in-up">
            So Sánh V?i Các S?n Ph?m Khác
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full glass rounded-2xl border border-brand-border overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <thead>
                <tr className="bg-brand-primary/5 border-b border-brand-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Tiêu Chí</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    <span className="text-brand-primary">CocoVenus</span>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-brand-text-muted">Brand A</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-brand-text-muted">Brand B</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Thành Ph?n T? Nhiên", coco: "?", a: "?", b: "?" },
                  { name: "Không Hóa Ch?t Ð?c H?i", coco: "?", a: "?", b: "?" },
                  { name: "Ch?ng Ch? FDA", coco: "?", a: "?", b: "?" },
                  { name: "Ðánh Giá 4.9+", coco: "?", a: "3.8", b: "3.5" },
                  { name: "Hoàn L?i Ti?n 30 Ngày", coco: "?", a: "?", b: "?" },
                  { name: "Giá C?nh Tranh", coco: "?", a: "?", b: "?" }
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-brand-border ${i % 2 === 0 ? "bg-white/50" : ""} hover:bg-brand-primary/5 transition-colors`}>
                    <td className="px-6 py-4 text-sm text-brand-text font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-center text-lg font-semibold text-brand-primary">{row.coco}</td>
                    <td className="px-6 py-4 text-center text-sm text-brand-text-muted">{row.a}</td>
                    <td className="px-6 py-4 text-center text-sm text-brand-text-muted">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}


