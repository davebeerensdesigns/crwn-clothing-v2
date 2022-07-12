import {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';

import {signOutUser} from "../../utils/firebase/firebase.utils";

import {UserContext} from "../../contexts/user.context";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";

const NavigationComponent = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIconComponent />
                </div>
                {isCartOpen && <CartDropdownComponent />}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavigationComponent