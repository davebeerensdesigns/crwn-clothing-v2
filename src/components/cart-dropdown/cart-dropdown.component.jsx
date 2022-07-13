import {useContext} from "react";
import {useNavigate} from 'react-router-dom';

import {CartContext} from "../../contexts/cart.context";

import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";

import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdownComponent = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
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
