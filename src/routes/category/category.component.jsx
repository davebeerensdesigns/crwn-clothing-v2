import { useState, useEffect, Fragment} from "react";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";

import {selectCategoriesMap} from "../../store/categories/category.selector";

import ProductCardComponent from "../../components/product-card/products-card.component";

import {CategoryContainer, CategoryTitle} from "./category.styles";

const CategoryComponent = () => {
    const {category} = useParams()
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category])
    console.log('render/re-rendering category component');

    useEffect(()=> {
        console.log('effect fired calling setProducts');
        setProducts(categoriesMap[category])
    },[category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {
                    products && products.map((product) => <ProductCardComponent key={product.id} product={product} /> )
                }
            </CategoryContainer>
        </Fragment>

)
}

export default CategoryComponent