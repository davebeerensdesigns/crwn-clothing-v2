import {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import {CategoriesContext} from "../../contexts/categories.context";

import './category.styles.scss';
import ProductCardComponent from "../../components/product-card/products-card.component";

const CategoryComponent = () => {
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(()=> {
        setProducts(categoriesMap[category])
    },[category, categoriesMap])

    return (
        <div className='categories-container'>
            {
                products && products.map((product) => <ProductCardComponent key={product.id} product={product} /> )
            }
        </div>
    )
}

export default CategoryComponent