import './cart-dropdown.styles.scss';
import ButtonComponent from "../button/button.component";

const CartDropdownComponent = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <ButtonComponent>CHECKOUT</ButtonComponent>
        </div>
    );
};

export default CartDropdownComponent;