const CartItem = ({ item, removeItem, index }) => {

    return (
        <div className='cart-item-container'>
            <h2>{item.name}</h2>
            <img src={item.imageUrl} />

            <h3>£ {item.price}</h3>
            <button className='cart-button' onClick={() => removeItem(index)}>Remove From Cart</button>
        </div>
    )
}

export default CartItem;