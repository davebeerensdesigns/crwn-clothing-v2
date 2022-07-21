import {useCallback} from "react";

import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import {selectCartItems} from "../../store/cart/cart.selector";

import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdownComponent = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();

    const goToCheckoutHandler = useCallback(() => {
        navigate('/checkout')
    }, []);
    
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItemComponent key={item.id} cartItem={item}/>)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <ButtonComponent onClick={goToCheckoutHandler}>CHECKOUT</ButtonComponent>
        </CartDropdownContainer>
    );
};

export default CartDropdownComponent;
