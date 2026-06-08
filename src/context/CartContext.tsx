import { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem } from '../types';

interface CartContextProps {
  cartItems: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  clearCart: () => void;
  discountCode: string;
  discountPercentage: number;
  applyDiscount: (code: string) => boolean;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const productsList: Product[] = [
  {
    id: 'shampoo',
    name: 'Dầu Gội Venus Coco (500ml)',
    description: 'Dầu gội thảo mộc thiên nhiên dừa bưởi, giúp tóc mượt tự nhiên, sạch gàu & giảm gãy rụng rõ rệt.',
    price: 149000,
    ingredients: 'Dầu Dừa & Tinh chất bưởi Bến Tre',
    imageType: 'shampoo',
  },
  {
    id: 'conditioner',
    name: 'Dầu Xả Venus Coco (500ml)',
    description: 'Dầu xả thảo mộc dừa bưởi phục hồi tóc xơ rối, nuôi dưỡng sợi tóc óng ả từ gốc đến ngọn.',
    price: 149000,
    ingredients: 'Dầu Dừa & Tinh chất bưởi Bến Tre',
    imageType: 'conditioner',
  },
  {
    id: 'bundle',
    name: 'Combo Gội & Xả Venus Coco + Tặng Lược',
    description: 'Bộ đôi hoàn hảo x2 hiệu quả hồi sinh mái tóc + TẶNG KÈM Lược gỡ rối cao cấp từ Thorakao.',
    price: 279000,
    originalPrice: 328000,
    badge: 'TẶNG LƯỢC GỠ RỐI',
    ingredients: 'Trọn bộ 500ml x 2 + Quà tặng Lược gỡ rối',
    imageType: 'bundle',
  }
];

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartOpen(true); // Open drawer automatically for high-conversion UX
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscountCode('');
    setDiscountPercentage(0);
  };

  const applyDiscount = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'COCO10' || cleanCode === 'VENUS10' || cleanCode === 'GIAM10') {
      setDiscountCode(cleanCode);
      setDiscountPercentage(10);
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        discountCode,
        discountPercentage,
        applyDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
