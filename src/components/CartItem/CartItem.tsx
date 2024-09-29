import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../state/cart/cartSlice';
import './CartItem.css';
import { AiFillDelete } from "react-icons/ai";

interface CartItemProps {
  id: number;
  title: string;
  author: string;
  price: string;
  quantity: number;
  email: string;
}

const CartItem: React.FC<CartItemProps> = ({ id, title, author, price, quantity, email }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity({id, email}));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity({id, email}));
  };

  const handleRemove = () => {
    dispatch(removeFromCart({id, email}));
  };

  return (
    <div className="cart-item">
      <h3 className="cart-item-title">{title}</h3>
      <div className="cart-items-details flex">
        <div>
          <p>Author: {author}</p>
          <p>Price: {price} </p>
        </div>
        <button onClick={handleRemove} className="remove-button"><AiFillDelete size={27}/></button>
      </div>
      <div className="cart-item-controls">
        <button className="quantity-button blue-color" onClick={handleDecrease} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span>
        <button className="quantity-button blue-color" onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default CartItem;