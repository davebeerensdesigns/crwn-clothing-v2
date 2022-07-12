import './cart-item.styles.scss';

const CardItemComponent = ({cartItem}) => {
    const {name, quantity} = cartItem
    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    );
};

export default CardItemComponent;
