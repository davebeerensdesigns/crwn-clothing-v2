import ProductCardComponent from "../product-card/products-card.component";

import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles";

const CategoryPreviewComponent = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title} className='title'>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products.filter((_, index) => index < 4).map((product) => (<ProductCardComponent key={product.id} product={product} /> ))
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreviewComponent