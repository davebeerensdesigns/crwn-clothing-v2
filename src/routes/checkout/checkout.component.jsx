import {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";

import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";

import {CartTotal, CheckoutContainer, CheckoutHeader, HeaderBlock} from "./checkout.styles";

const CheckoutComponent = () => {
    const {cartItems, cartTotal} = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />)}
            <CartTotal>Total: ${cartTotal}</CartTotal>
        </CheckoutContainer>
    );
};

export default CheckoutComponent;
