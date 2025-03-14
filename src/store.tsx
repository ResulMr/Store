
import {create} from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  sayi: number;
 
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  getTotal: () => number;  
  
}

const useStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => {
    const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      return { cart: state.cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, sayi: cartItem.sayi + 1 }
          : cartItem
      )};
    }
    return { cart: [...state.cart, { ...item, sayi: 1 }] };
  }),
  
  getTotal: () => {
    return (state) => state.cart.reduce((total, item) => total + item.price * item.sayi);
  }
}));

export default useStore;
