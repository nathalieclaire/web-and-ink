import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../state/cart/cartSlice';
import './CartItem.css';

interface CartItemProps {
  id: number;
  title: string;
  author: string;
  price: string;
  quantity: number;
  email?: string; // Optional field for user email
}

const CartItem: React.FC<CartItemProps> = ({ id, title, author, price, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-item">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Price: </p>
      <div className="cart-item-controls">
        <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;