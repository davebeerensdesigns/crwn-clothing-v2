import {Fragment, useContext} from "react";

import {CategoriesContext} from "../../contexts/categories.context";
import ProductCardComponent from "../../components/product-card/products-card.component";

import './shop.styles.scss';

const ShopComponent = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => (
                <Fragment key={title}>
                    <h2>{title}</h2>
                    <div className='products-container'>
                        {categoriesMap[title].map((product) => (
                            <ProductCardComponent key={product.id}
                                                  product={product}/>
                        ))}
                    </div>
                </Fragment>
            ))}
        </Fragment>
    );
};

export default ShopComponent;
