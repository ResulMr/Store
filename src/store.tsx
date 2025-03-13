
import {create} from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
 
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
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )};
    }
    return { cart: [...state.cart, { ...item, quantity: 1 }] };
  }),
  
  getTotal: () => {
    return (state) => state.cart.reduce((total, item) => total + item.price * item.quantity);
  }
}));

export default useStore;
