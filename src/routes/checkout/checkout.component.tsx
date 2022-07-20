import {useSelector} from "react-redux";

import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import PaymentFormComponent from "../../components/payment-form/payment-form.component";

import {CartTotal, CheckoutContainer, CheckoutHeader, HeaderBlock} from "./checkout.styles";

const CheckoutComponent = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

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

            <PaymentFormComponent/>
        </CheckoutContainer>
    );
};

export default CheckoutComponent;
