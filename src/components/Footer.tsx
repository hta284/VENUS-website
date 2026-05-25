import { Facebook, Instagram, Music2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-cream/10 pb-12 mb-8">
          
          <div className="md:col-span-1">
            <div className="font-serif text-3xl font-bold tracking-widest text-brand-gold mb-4">
              VENUS
            </div>
            <p className="text-brand-cream/70 text-sm leading-relaxed mb-6">
              CocoVenus by Thorakao — Công ty Lan Hảo.<br/>
              Khơi dậy vẻ đẹp tự nhiên từ thảo mộc Việt Nam.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-colors">
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-brand-gold text-sm">Liên Kết</h4>
            <ul className="space-y-4 text-sm text-brand-cream/70">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Sản phẩm CocoVenus</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Cửa hàng</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Tin tức & Khuyến mãi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-brand-gold text-sm">Hỗ Trợ</h4>
            <ul className="space-y-4 text-sm text-brand-cream/70">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Chính sách giao hàng</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Đổi trả & Hoàn tiền</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-brand-gold text-sm">Liên Hệ</h4>
            <ul className="space-y-4 text-sm text-brand-cream/70">
              <li><span className="text-white block mb-1">Hotline:</span> 0123 456 789 (Zalo)</li>
              <li><span className="text-white block mb-1">Email:</span> cskh@thorakao.vn</li>
              <li><span className="text-white block mb-1">Địa chỉ:</span> 241Bis Cách Mạng Tháng 8, P.4, Q.3, TP.HCM</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-cream/50">
          <p>&copy; 2026 Thorakao. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
