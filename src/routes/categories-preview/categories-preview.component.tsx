import {Fragment} from "react";
import {useSelector} from "react-redux";

import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";
import SpinnerComponent from "../../components/spinner/spinner.component";

import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/category.selector";

const CategoriesPreviewComponent = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <Fragment>
            {isLoading ? <SpinnerComponent/> : (
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title]
                    return <CategoryPreviewComponent key={title}
                                                 title={title}
                                                 products={products}/>
                })
            )}
        </Fragment>
    );
};

export default CategoriesPreviewComponent;
