import Link from "next/dist/client/link";
import { motion } from "framer-motion";
import { useDispatchCart } from "../context/cartContext";
import { useState, useEffect } from "react";
import { getCookie } from "../hooks/useCookie";
import { useCart } from "../context/cartContext";
import { useRouter } from "next/dist/client/router";

const Cart = () => {

    const items = useCart()
    const router = useRouter()

    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, item) => total + item.price, 0)

    const removeItem = async (index) => {
        await dispatch({ type: 'REMOVE_ITEM', index })
    }

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

    if (items.length === 0) {
        return (
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <nav className="cart-nav">
                    <ul><Link href='/'><li><a className='cart-home-link'>HOME</a></li></Link>
                    </ul>
                </nav>
                <div className='cart-list-container'>
                    <h2>Cart</h2>
                    <p>Cart is empty.</p>
                </div>
            </motion.div>
        )
    }
    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <nav className="cart-nav">
                <ul>
                    <Link href='/'><li><a className='cart-home-link'>HOME</a></li></Link>
                </ul>
            </nav>
            <div className='cart-list-container'>
                <h2>Cart</h2>
                {items.map((item, itemIndex) => (
                    <CartItem index={itemIndex} removeItem={removeItem} item={item} key={itemIndex} />
                ))}
                <div className='checkout-container'>
                    <h3 className='total'>Total: £ {totalPrice}</h3>
                    <div className='buttons'>
                        <Link href='/#products-section' scroll={false} ><button className='checkout-button cart-button'>Continue Shopping</button></Link>
                        <button className='checkout-button cart-button'>Checkout</button>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default Cart;