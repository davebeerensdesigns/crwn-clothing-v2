import {useEffect} from "react";
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from "react-redux";

import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {setCategoriesMap} from "../../store/categories/category.action";

import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import CategoryComponent from "../category/category.component";

const ShopComponent = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            dispatch(setCategoriesMap(categoryMap));
        }
        getCategoriesMap();
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreviewComponent />} />
            <Route path=':category' element={<CategoryComponent />} />
        </Routes>
    );
};

export default ShopComponent;
