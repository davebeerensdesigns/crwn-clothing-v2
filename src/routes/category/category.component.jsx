import {useContext, useState, useEffect, Fragment} from "react";
import { useParams } from "react-router-dom";

import {CategoriesContext} from "../../contexts/categories.context";

import ProductCardComponent from "../../components/product-card/products-card.component";

import {CategoryContainer, CategoryTitle} from "./category.styles";

const CategoryComponent = () => {
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(()=> {
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