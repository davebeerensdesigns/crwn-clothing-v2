import {useEffect} from "react";
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from "react-redux";

import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {setCategories} from "../../store/categories/category.action";

import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import CategoryComponent from "../category/category.component";

const ShopComponent = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArray));
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
