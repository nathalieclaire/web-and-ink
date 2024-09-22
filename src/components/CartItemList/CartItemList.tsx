import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { CartItem as CartItemType } from '../../state/cart/cartSlice';
import './CartItemList.css';
import { RootState } from '../../state/store';
import { selectUserEmail } from '../../state/user/userSlice';
import { useNavigate } from 'react-router-dom';

const CartItemList: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const userEmail = useSelector(selectUserEmail);
  const navigate = useNavigate();

  // filter out the items that belong to the current user
  const userCartItems = cartItems.filter(item => item.email === userEmail); 

  // Calculate the total price considering the quantity of each item
  const totalPrice: string = userCartItems
    .reduce((acc, item) => {
      // Parse the price, multiply by quantity, and add to accumulator
      const itemPrice = Number(item.price.slice(1)); // Remove the $ sign
      return acc + (itemPrice * item.quantity);
    }, 0) // Start the accumulator at 0
    .toFixed(2); // Convert the total to 2 decimal places for currency formatting

  // Function to checkout
  const checkout = () => {
    navigate("/thanks");
  };

  return (
    <div className="cart-item-list">
      {userCartItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        userCartItems.map((item: CartItemType) => (
          <CartItem 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            author={item.author} 
            price={item.price} 
            quantity={item.quantity} 
            email={item.email}
          />
        ))
      )}
      
      <h3>Total Price: ${totalPrice} </h3>

      <button className="checkout-button" onClick={checkout}>Checkout</button>
    </div>
  );
};

export default CartItemList;