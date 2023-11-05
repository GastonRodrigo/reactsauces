import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const {cantidadEnCarrito} = useContext (CartContext);

  return (
    <Link className='menu-link' to='/cart'>
    <Badge badgeContent={cantidadEnCarrito()} color='success'>
      <ShoppingBasketIcon />
    </Badge>
    </Link>
  );
};

export default CartWidget;
