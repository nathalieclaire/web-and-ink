import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { CartItem as CartItemType } from '../../state/cart/cartSlice';
import './CartItemList.css';

interface RootState {
  cart: {
    items: CartItemType[];
    userEmail: string | null;
  };
}

const CartItemList: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="cart-item-list">
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            price={item.price}
            quantity={item.quantity}
          />
        ))
      )}
    </div>
  );
};

export default CartItemList;