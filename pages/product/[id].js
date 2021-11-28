import { motion } from "framer-motion";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { useDispatchCart } from "../../context/cartContext";

const Product = ({ product }) => {


    const router = useRouter();
    const dispatch = useDispatchCart();

    const addToCart = (item) => {
        dispatch({ type: 'ADD_ITEM', item })
    }

    const buyNow = (item) => {
        dispatch({ type: 'BUY_NOW', item })
        router.push('/cart')
    }

    return (
        <motion.div className='product-page-container' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src={product.imageUrl} className='product-page-image' />
            <div className='product-page-details'>
                <Link href='/'><a className='product-page-link'>Back To Products</a></Link>
                <h2 className='product-page-title'>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: £{product.price}</p>
                <div className='product-page-buttons'>
                    <button onClick={() => addToCart(product)} className='cart-button'>Add To Cart</button>
                    <button onClick={() => buyNow(product)} className='cart-button'>Buy Now <span className='button-arrow'>→</span></button>
                </div>
            </div >
        </motion.div >
    )
}

export async function getServerSideProps(req) {
    const { id } = req.query
    const res = await fetch(`http://localhost:3000/api/product/${id}`);
    const data = await res.json();
    return { props: { product: data } }
}

export default Product;