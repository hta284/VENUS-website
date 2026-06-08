export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  ingredients: string;
  imageType: 'shampoo' | 'conditioner' | 'bundle';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PurchaseToast {
  id: string;
  name: string;
  location: string;
  product: string;
  timeAgo: string;
}
