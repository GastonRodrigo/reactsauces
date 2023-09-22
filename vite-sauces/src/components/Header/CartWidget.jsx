import Badge from '@mui/material/Badge';
// import Cart from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const CartWidget = () => {
    return (
        <Badge badgeContent={4} color='success'>
        <ShoppingBasketIcon />
        </Badge>
    );
};

export default CartWidget;