import {Routes, Route} from 'react-router-dom';

import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";

import './shop.styles.scss';

const ShopComponent = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreviewComponent />} />
        </Routes>
    );
};

export default ShopComponent;
