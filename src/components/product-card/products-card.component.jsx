import './product-card.styles.scss';

import React from 'react';
import ButtonComponent from "../button/button.component";

const ProductCardComponent = ({product}) => {
    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ButtonComponent buttonType='ínverted'>Add to cart</ButtonComponent>
        </div>
    );
};

export default ProductCardComponent;