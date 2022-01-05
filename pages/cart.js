import Link from "next/dist/client/link";
import { motion } from "framer-motion";
import { useDispatchCart } from "../context/cartContext";
import Head from "next/head";
import { useCart } from "../context/cartContext";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/footer";

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

    return (
        <>
            <Head>
                <title>Cart | Fireside Woodcraft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <nav className="cart-nav">
                <ul>
                    <Link href='/'><li><a className='cart-home-link'>HOME</a></li></Link>
                </ul>
            </nav>
            <div className='global-container' id='global-container'>
                {items.length > 0 &&
                    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="in-cart-container cart-container">
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
                    </motion.div >}
                {items.length === 0 && <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="empty-cart-container">
                    <motion.img exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} src='img/cart.jpg' className="old-cart-image" />
                    <h3 className="empty-cart-text">Oops, cart is empty.</h3>
                </motion.div>}
                <Footer />
            </div>
        </>
    )
}

export default Cart;