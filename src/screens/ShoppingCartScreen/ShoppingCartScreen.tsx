import React from 'react';
import './ShoppingCartScreen.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../../state/user/userSlice';
import CartItemList from '../../components/CartItemList/CartItemList';
import { LuShoppingCart } from "react-icons/lu";

function ShoppingCartScreen() {

  const userEmail = useSelector(selectUserEmail);

  // Helper function to capitalize the first letter
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Take the string and split it at '@', then take the first part (index 0)
  const userName = userEmail ? capitalizeFirstLetter(userEmail.split('@')[0]) : 'Guest';

  return (
    <div className="App shopping-cart-container">
        <h1 className="blue-color bold-label2 flex flex-c">Shopping Cart <LuShoppingCart className="shopping-cart-icon" size={30} /></h1>
        <h2 className="user-email bold-label"> {userName} </h2>
        <CartItemList />
    </div>
  );
}

export default ShoppingCartScreen;