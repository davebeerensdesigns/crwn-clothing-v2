import {useState, useEffect, Fragment} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/category.selector";

import ProductCardComponent from "../../components/product-card/products-card.component";
import SpinnerComponent from "../../components/spinner/spinner.component";

import {CategoryContainer, CategoryTitle} from "./category.styles";

type CategoryRouteParams = {
    category: string;
}

const CategoryComponent = () => {
    const {category} = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {isLoading ? <SpinnerComponent/> :
                <CategoryContainer>
                    {
                        products && products.map((product) => <ProductCardComponent key={product.id}
                                                                                    product={product}/>)
                    }
                </CategoryContainer>
            }
        </Fragment>

    )
}

export default CategoryComponent