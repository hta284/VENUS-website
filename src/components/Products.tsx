import { Star, ShoppingCart, Heart } from "lucide-react";

const productData = [
  {
    id: 1,
    name: "Vitamin C Brightening Serum",
    price: 599000,
    originalPrice: 799000,
    image: "??",
    rating: 4.9,
    reviews: 285,
    badge: "Best Seller",
    description: "Serum làm sáng da ch?a Vitamin C tinh khi?t"
  },
  {
    id: 2,
    name: "Hydra Boost Moisturizer",
    price: 749000,
    originalPrice: 949000,
    image: "??",
    rating: 4.8,
    reviews: 192,
    badge: "Recommended",
    description: "Kem du?ng ?m sâu cho da khô"
  },
  {
    id: 3,
    name: "Anti-Aging Night Cream",
    price: 899000,
    originalPrice: 1199000,
    image: "?",
    rating: 4.9,
    reviews: 156,
    badge: "Premium",
    description: "Kem dêm ch?ng lão hóa cao c?p"
  },
  {
    id: 4,
    name: "Pore Minimizing Toner",
    price: 499000,
    originalPrice: 649000,
    image: "??",
    rating: 4.7,
    reviews: 124,
    badge: "Popular",
    description: "Nu?c hoa h?ng se khít l? chân lông"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-to-b from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-brand-primary mb-4 border border-brand-primary/20">
            S?n Ph?m N?i B?t
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-4">
            B? Suu T?p Cham Sóc Da
            <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Hoàn H?o
            </span>
          </h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto mt-6">
            M?i s?n ph?m du?c ch?n l?c k? lu?ng d? mang d?n hi?u qu? t?t nh?t cho làn da c?a b?n.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="h-full glass rounded-2xl overflow-hidden border border-brand-border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 shadow transition-all duration-300">
                {/* Header with Badge */}
                <div className="relative overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 p-4 pt-6">
                  {product.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Image Placeholder */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-white/50 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </div>
                  </div>

                  {/* Like Button */}
                  <button className="absolute top-3 left-3 p-2 rounded-full bg-white/20 hover:bg-white/40 text-brand-primary transition-all duration-300 backdrop-blur-sm">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-brand-text-muted mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-brand-accent text-brand-accent"
                              : "text-brand-border"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-brand-text">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-brand-primary">
                      {product.price.toLocaleString("vi-VN")}?
                    </span>
                    <span className="text-sm text-brand-text-muted line-through opacity-60">
                      {product.originalPrice.toLocaleString("vi-VN")}?
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary-dark hover:to-brand-primary text-white py-3 rounded-lg font-medium shadow-md group-hover:shadow-lg transition-all duration-300 transform">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Thêm Vào</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10 font-semibold transition-all duration-300"
          >
            <span>Xem T?t C? S?n Ph?m</span>
            <span className="text-lg">?</span>
          </a>
        </div>
      </div>
    </section>
  );
}


