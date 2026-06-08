import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingCart, Plus, Minus, Tag, ShieldCheck, Truck, Sparkles, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CartDrawer() {
  const {
    cartItems,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateQuantity,
    discountCode,
    discountPercentage,
    applyDiscount,
    clearCart,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Form states
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [formError, setFormError] = useState('');

  const handleApplyCoupon = (e: FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const success = applyDiscount(couponInput);
    if (success) {
      setCouponSuccess(true);
      setCouponError('');
    } else {
      setCouponError('Mã giảm giá không hợp lệ. Hãy thử: VENUS10');
      setCouponSuccess(false);
    }
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const originalSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((originalSubtotal * discountPercentage) / 100);
  const subtotal = originalSubtotal - discountAmount;
  
  // Free ship if subtotal is over 200,000đ (our combo is 245,000đ so naturally free ship!)
  const shippingFee = subtotal >= 200000 || subtotal === 0 ? 0 : 30000;
  const total = subtotal + shippingFee;

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) {
      setFormError('Vui lòng điền đầy đủ: Họ tên, Số điện thoại và Địa chỉ');
      return;
    }
    setFormError('');
    // Simulate API order placement
    setOrderPlaced(true);
  };

  const handleCloseSuccess = () => {
    setOrderPlaced(false);
    setIsCheckingOut(false);
    clearCart();
    setCartOpen(false);
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Overlay color shift */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black z-50 transition-opacity"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 max-w-lg w-full bg-brand-cream shadow-2xl z-[60] flex flex-col border-l border-brand-green/20"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-green/10 flex justify-between items-center bg-white">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-brand-green" />
                <h2 className="font-serif text-xl font-bold text-brand-brown">Ghép Giỏ Hàng Venus</h2>
                <span className="bg-brand-green/10 text-brand-green text-xs font-bold px-2.5 py-1 rounded-full">
                  {totalQuantity} món
                </span>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-brand-cream rounded-full transition-colors text-brand-brown/70 hover:text-brand-brown"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {orderPlaced ? (
              /* ORDER SUCCESS SCREEN */
              <div className="flex-1 p-8 flex flex-col justify-center items-center text-center overflow-y-auto">
                <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-brand-green mb-3">Đặt Hàng Thành Công!</h3>
                <p className="text-brand-brown font-medium mb-1">Mã đơn hàng: <span className="text-brand-gold font-bold">#VENUS-{Math.floor(1000 + Math.random() * 9000)}</span></p>
                <p className="text-brand-brown/70 text-sm max-w-md mb-8">
                  Cảm ơn <strong>{fullName}</strong> đã lựa chọn bộ sản phẩm CocoVenus từ Thorakao. Nhân viên tư vấn của chúng tôi sẽ liên hệ qua số điện thoại <strong>{phone}</strong> trong vòng 15 phút tới để xác nhận giao hàng.
                </p>

                <div className="bg-white p-5 rounded-2xl border border-brand-green/10 w-full mb-8 text-left max-w-sm">
                  <div className="font-bold text-sm text-brand-green mb-3 uppercase tracking-wider">Thông tin giao hàng:</div>
                  <p className="text-sm mb-1"><strong>Khách hàng:</strong> {fullName}</p>
                  <p className="text-sm mb-1"><strong>Số điện thoại:</strong> {phone}</p>
                  <p className="text-sm mb-1"><strong>Địa chỉ nhận:</strong> {address}</p>
                  <p className="text-sm border-t border-brand-green/5 pt-2 mt-2"><strong>Tổng thanh toán:</strong> <span className="text-brand-green font-bold text-lg">{total.toLocaleString('vi-VN')} ₫</span></p>
                </div>

                <button
                  onClick={handleCloseSuccess}
                  className="w-full max-w-sm bg-brand-green hover:bg-brand-green-dark text-white py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Tiếp Tục Trải Nghiệm
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              /* EMPTY CART SCREEN */
              <div className="flex-1 flex flex-col justify-center items-center p-8 text-center text-brand-brown/60">
                <div className="w-20 h-20 bg-brand-green/5 text-brand-green rounded-full flex items-center justify-center mb-6">
                  <ShoppingCart className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-brown mb-2">Giỏ Hàng Đang Trống</h3>
                <p className="text-sm max-w-xs mb-8">
                  Hãy thêm bộ đôi gội & xả CocoVenus vào giỏ để sở hữu mái tóc bóng mượt và tràn đầy sức sống.
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md"
                >
                  Khám Phá Sản Phẩm Ngay
                </button>
              </div>
            ) : (
              /* CART BODY IN PROCESS */
              <div className="flex-1 flex flex-col overflow-hidden">
                {!isCheckingOut ? (
                  /* ITEM ITEMS LIST & CALCULATIONS */
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Free shipping progress */}
                    <div className="bg-brand-green/5 border border-brand-green/20 p-4 rounded-xl">
                      {subtotal >= 200000 ? (
                        <div className="flex items-center gap-2 text-brand-green font-semibold text-sm">
                          <Truck className="w-5 h-5 animate-pulse" />
                          Chúc mừng! Bạn đã đủ điều kiện được MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC 🎉
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between text-xs font-bold text-brand-brown/70">
                            <span>Đạt mốc Free Ship</span>
                            <span>Thiếu { (200000 - subtotal).toLocaleString('vi-VN') } ₫</span>
                          </div>
                          <div className="w-full bg-brand-green/10 rounded-full h-2">
                            <div 
                              className="bg-brand-green h-2 rounded-full transition-all duration-500" 
                              style={{ width: `${Math.min((subtotal / 200000) * 100, 100)}%` }}
                            />
                          </div>
                          <p className="text-xs text-brand-brown/60">Mua Combo gội xả ngay để nhận ưu đãi Free Ship nhanh chóng.</p>
                        </div>
                      )}
                    </div>

                    {/* Product lines */}
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-brand-green/5 shadow-sm"
                        >
                          <div className="w-16 h-16 bg-brand-cream/60 rounded-xl shrink-0 flex items-center justify-center p-2 relative border border-brand-green/10">
                            {item.product.imageType === 'bundle' ? (
                              <span className="text-2xl">🎁</span>
                            ) : item.product.imageType === 'shampoo' ? (
                              <span className="text-2xl">🧴</span>
                            ) : (
                              <span className="text-2xl">🥛</span>
                            )}
                          </div>

                          <div className="flex-1">
                            <h4 className="font-bold text-brand-brown leading-snug">{item.product.name}</h4>
                            <p className="text-xs text-brand-green/80 font-medium mb-2">{item.product.ingredients}</p>
                            
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-brand-green">
                                {item.product.price.toLocaleString('vi-VN')} ₫
                              </span>

                              {/* Qty edit */}
                              <div className="flex items-center gap-2 border border-brand-green/20 rounded-full px-2.5 py-1 bg-brand-cream/30">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="text-brand-brown/60 hover:text-brand-green p-0.5"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="text-brand-brown/60 hover:text-brand-green p-0.5"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-300 hover:text-red-500 p-2 border border-transparent hover:border-red-100 rounded-xl transition-colors shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Promo coupon code form */}
                    <form onSubmit={handleApplyCoupon} className="bg-white border border-brand-green/10 rounded-2xl p-4 mt-6">
                      <div className="flex items-center gap-2 text-sm font-bold text-brand-brown mb-3">
                        <Tag className="w-4 h-4 text-brand-green" />
                        <span>Áp dụng Mã giảm giá</span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="VD: VENUS10"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          className="flex-grow px-4 py-2 text-sm rounded-lg border border-brand-green/20 focus:outline-none focus:border-brand-green bg-brand-cream/20 uppercase font-mono font-bold"
                        />
                        <button
                          type="submit"
                          className="px-5 py-2 text-sm bg-brand-green text-white font-bold rounded-lg hover:bg-brand-green-dark transition-colors"
                        >
                          Áp dụng
                        </button>
                      </div>
                      
                      {couponError && <p className="text-xs text-red-500 mt-2 font-medium">{couponError}</p>}
                      {couponSuccess && (
                        <p className="text-xs text-green-600 mt-2 font-semibold">
                          ✓ Áp dụng thành công mã {discountCode}! Giảm {discountPercentage}% hóa đơn hàng.
                        </p>
                      )}
                      
                      <div className="mt-3 text-[11px] text-brand-brown/50 bg-brand-cream/35 p-2 rounded border border-brand-green/5">
                        * Mẹo: Sao chép mã <strong>VENUS10</strong> nhận trực tiếp giảm 10% từ ưu đãi thương hiệu.
                      </div>
                    </form>
                  </div>
                ) : (
                  /* CHECKOUT FORM VIEW */
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <button
                      onClick={() => setIsCheckingOut(false)}
                      className="text-brand-green hover:underline text-sm font-bold flex items-center gap-1.5"
                    >
                      ← Trở lại chi tiết giỏ hàng
                    </button>

                    <h3 className="font-serif text-xl font-bold border-b border-brand-green/15 pb-2">Thông Tin Giao Hàng</h3>

                    {formError && (
                      <div className="bg-red-50 border border-red-200 text-red-600 p-3.5 rounded-xl text-xs font-semibold">
                        ⚠️ {formError}
                      </div>
                    )}

                    <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-brand-brown/70 mb-1.5">
                          Họ và tên người nhận <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Ví dụ: Nguyễn Thị Hương Giang"
                          className="w-full px-4 py-3 border border-brand-green/20 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-white rounded-xl text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-brand-brown/70 mb-1.5">
                          Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Ví dụ: 0987654321"
                          className="w-full px-4 py-3 border border-brand-green/20 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-white rounded-xl text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-brand-brown/70 mb-1.5">
                          Địa chỉ giao hàng <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Nhập số nhà, tên đường, phường/xã, quận/huyện, tỉnh thành..."
                          className="w-full px-4 py-3 border border-brand-green/20 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-white rounded-xl text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-brand-brown/70 mb-1.5">
                          Ghi chú giao hàng (Không bắt buộc)
                        </label>
                        <input
                          type="text"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao..."
                          className="w-full px-4 py-3 border border-brand-green/20 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-white rounded-xl text-sm"
                        />
                      </div>

                      <div className="bg-brand-green/5 border border-brand-green/10 p-4 rounded-xl flex items-start gap-2.5">
                        <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-brand-green mb-0.5">Phương thức thanh toán: COD (Thanh toán khi nhận hàng)</p>
                          <p className="text-[11px] text-brand-brown/60">An tâm kiểm tra hàng hóa trước khi thanh toán. Không cần cọc trước.</p>
                        </div>
                      </div>
                    </form>
                  </div>
                )}

                {/* Sticky price calculations and confirmation button */}
                <div className="p-6 bg-white border-t border-brand-green/10 mt-auto shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
                  <div className="space-y-2.5 mb-6 text-sm">
                    <div className="flex justify-between text-brand-brown/70">
                      <span>Tổng tiền hàng:</span>
                      <span>{originalSubtotal.toLocaleString('vi-VN')} ₫</span>
                    </div>
                    {discountPercentage > 0 && (
                      <div className="flex justify-between text-green-600 font-bold">
                        <span>Chiết khấu ({discountCode} | -{discountPercentage}%):</span>
                        <span>-{discountAmount.toLocaleString('vi-VN')} ₫</span>
                      </div>
                    )}
                    <div className="flex justify-between text-brand-brown/70">
                      <span>Phí vận chuyển:</span>
                      <span>{shippingFee === 0 ? 'Miễn phí' : `${shippingFee.toLocaleString('vi-VN')} ₫`}</span>
                    </div>
                    <div className="flex justify-between items-center text-base border-t border-dashed border-brand-green/15 pt-3 mt-1.5">
                      <span className="font-bold text-brand-brown">Tổng số tiền cần thanh toán:</span>
                      <span className="text-xl font-bold text-brand-green">
                        {total.toLocaleString('vi-VN')} ₫
                      </span>
                    </div>
                  </div>

                  {!isCheckingOut ? (
                    <button
                      onClick={() => setIsCheckingOut(true)}
                      className="w-full bg-brand-green hover:bg-brand-green-dark text-white py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-base"
                    >
                      <span>Tiến Hành Đặt Hàng</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleCheckoutSubmit}
                      className="w-full bg-brand-gold hover:bg-yellow-500 text-brand-brown py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 text-base"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span>Xác Nhận Đặt Mua Ngay</span>
                    </button>
                  )}
                  
                  <div className="flex items-center justify-center gap-4 mt-4 text-[11px] text-brand-brown/50 border-t border-brand-cream/60 pt-3">
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-green" /> Chống giả 100%
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-brand-green" /> Free Ship từ 200k
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
