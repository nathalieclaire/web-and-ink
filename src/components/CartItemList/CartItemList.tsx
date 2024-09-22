import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { CartItem as CartItemType } from '../../state/cart/cartSlice';
import './CartItemList.css';
import { RootState } from '../../state/store';
import { selectUserEmail } from '../../state/user/userSlice';

const CartItemList: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const userEmail = useSelector(selectUserEmail);

  // filter out the items that belong to the current user
  const userCartItems = cartItems.filter(item => item.email === userEmail); 

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
    </div>
  );
};

export default CartItemList;