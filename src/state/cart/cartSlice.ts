import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    title: string;
    author: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    userEmail: string | null;
}

const initialState: CartState = {
    items: [],
    userEmail: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Save user email after login
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.userEmail = action.payload;
        },
        // add to cart (if its not yet in the cart, add it when the "Add to cart" button is clicked)
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            state.items.push(action.payload);
        },
        // remove from cart (just click the bin symbol and the item is removed)
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        // increase quantity (click the "+" button to increase the quantity) TODO
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1; // Increase item quantity
            }
        },
        // decrease quantity (click the "-" button to decrease the quantity) TODO
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1; // Decrease item quantity
            }
        }
    }
});

export const { setUserEmail, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export default cartSlice.reducer;

  