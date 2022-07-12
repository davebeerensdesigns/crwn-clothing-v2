import {Fragment, useContext} from "react";

import {CategoriesContext} from "../../contexts/categories.context";

import './shop.styles.scss';
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";

const ShopComponent = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    return (
        <div className='shop-container'>
            {Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title]
                return <CategoryPreviewComponent key={title} title={title} products={products}/>
                })
            }
        </div>
    );
};

export default ShopComponent;
