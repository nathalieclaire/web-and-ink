import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    title: string;
    author: string;
    price: string;
    quantity: number;
    email: string;
}

interface CartState {
    items: CartItem[];
    userEmail: string; // Store the user's email
}

const initialState: CartState = {
    items: [],
    userEmail: "", // Initialize to empty string
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Action to set user email
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.userEmail = action.payload;
        },
        // add to cart (if its not yet in the cart, add it when the "Add to cart" button is clicked)
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id && item.email === action.payload.email);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity; // Increase quantity if already exists
            } else {
                state.items.push(action.payload); // Otherwise, add new item
            }
        },
        // remove from a specific users cart (just click the bin symbol and the item is removed)
        removeFromCart: (state, action: PayloadAction<{ id: number; email: string }>) => {
            const { id, email } = action.payload;
            state.items = state.items.filter(item => item.id !== id || item.email !== email);
          },
        // increase quantity (click the "+" button to increase the quantity) TODO
        increaseQuantity: (state, action: PayloadAction<{ id: number, email: string }>) => {
            const { id, email } = action.payload;
            const item = state.items.find(item => item.id === id && item.email === email);
            if (item) {
                item.quantity += 1; // Increase item quantity for the correct user
            }
        },
        // decrease quantity (click the "-" button to decrease the quantity) TODO
        decreaseQuantity: (state, action: PayloadAction<{ id: number; email: string }>) => {
            const { id, email } = action.payload;
            const item = state.items.find(item => item.id === id && item.email === email);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.items = []; // Clear the cart items
        }
    }
});

export const { setUserEmail, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

  