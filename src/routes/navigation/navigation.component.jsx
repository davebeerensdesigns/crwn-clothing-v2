import {Fragment, useContext} from "react";
import {Outlet} from "react-router-dom";

import {signOutUser} from "../../utils/firebase/firebase.utils";

import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart.context";

import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import {LogoContainer, NavigationContainer, NavLink, NavLinkContainer} from './navigation.styles';

const NavigationComponent = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinkContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIconComponent />
                </NavLinkContainer>
                {isCartOpen && <CartDropdownComponent />}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default NavigationComponent