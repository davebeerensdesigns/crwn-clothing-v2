import React, {useContext} from 'react';

import {CartContext} from "../../contexts/cart.context";

import ButtonComponent, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import {Footer, Image, Name, Price, ProductCardContainer} from "./product-card.styles";

const ProductCardComponent = ({product}) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

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
