import './cart-dropdown.styles.scss';
import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";

const CartDropdownComponent = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {[].map(item => <CartItemComponent cartItem={item} />)}
            </div>
            <ButtonComponent>CHECKOUT</ButtonComponent>
        </div>
    );
};

export default CartDropdownComponent;
