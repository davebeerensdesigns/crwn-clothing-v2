import {useEffect} from "react";
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from "react-redux";

import {fetchCategoriesStart} from "../../store/categories/category.action";

import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import CategoryComponent from "../category/category.component";

const ShopComponent = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCategoriesStart());
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreviewComponent />} />
            <Route path=':category' element={<CategoryComponent />} />
        </Routes>
    );
};

export default ShopComponent;
