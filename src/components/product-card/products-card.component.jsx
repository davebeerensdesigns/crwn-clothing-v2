import {useDispatch, useSelector} from "react-redux";

import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart} from "../../store/cart/cart.action";

import ButtonComponent, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import {Footer, Image, Name, Price, ProductCardContainer} from "./product-card.styles";

const ProductCardComponent = ({product}) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <ButtonComponent onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</ButtonComponent>
        </ProductCardContainer>
    );
};

export default ProductCardComponent;
