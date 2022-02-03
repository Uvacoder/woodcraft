import { motion } from "framer-motion";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { useCart, useDispatchCart } from "../../context/cartContext";
import { useState } from "react";
import Head from "next/head";
import Footer from "../../components/footer";

const Product = ({ product }) => {

    const [itemAlreadyAdded, setItemAlreadyAdded] = useState(false)
    const [itemAdded, setItemAdded] = useState(false)

    const router = useRouter();
    const dispatch = useDispatchCart();
    const currentCart = useCart()

    const addToCart = (item) => {
        let cartCheck = currentCart.filter(i => i.id === item.id)
        if (cartCheck.length === 0) {
            dispatch({ type: 'ADD_ITEM', item })
            setItemAdded(true)
        } else {
            setItemAdded(false)
            setItemAlreadyAdded(true)
        }
    }

    const buyNow = async (item) => {
        await dispatch({ type: 'BUY_NOW', item })
        router.push('/cart')
    }

    const [slideIndex, setSlideIndex] = useState(1);

    const selectedGalleryLength = product.images.length

    const nextSlide = () => {
        if (slideIndex !== selectedGalleryLength) {
            setSlideIndex(slideIndex + 1);
        }
        else if (slideIndex === selectedGalleryLength) {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(selectedGalleryLength)
        }
    }

    return (
        <>
            <Head>
                <title>{product.name} | Fireside Woodcraft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="global-container">
                <motion.div className='product-page-container' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <motion.div className='product-image-gallery' initial={{ opacity: 0 }, { y: 100 }} animate={{ opacity: 1 }, { y: 0 }} transition={{ delay: 0 }}>
                        {product.images.map((image, imageIndex) => {
                            if (slideIndex === imageIndex + 1) {
                                return (
                                    <motion.img animate={{ opacity: 1 }}
                                        initial={{ opacity: 0.4 }}
                                        exit={{ opacity: 0.4 }}
                                        transition={{ duration: 0.1 }} className='product-page-image' src={image} key={imageIndex} />
                                )
                            }
                        })}
                        <div className='gallery-buttons'>
                            <p onClick={prevSlide}>←</p>
                            <p onClick={nextSlide}>→</p>
                        </div>
                    </motion.div>
                    <div className='product-page-details'>
                        <Link href='/#products-section' scroll={false}><a className='product-page-link'>Back To Products</a></Link>
                        <h2 className='product-page-title'>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: £{product.price}</p>
                        <div className='product-page-buttons'>
                            <button onClick={() => addToCart(product)} className='cart-button'>Add To Cart</button>
                            <button onClick={() => buyNow(product)} className='cart-button'>Buy Now <span className='button-arrow'>→</span></button>
                        </div>
                        {itemAlreadyAdded && <motion.p initial={{ y: 400, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="already-in-cart-message">Item already in cart!</motion.p>}
                        {itemAdded && <motion.p initial={{ y: 400, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="already-in-cart-message">Added to cart!</motion.p>}
                    </div >
                </motion.div >
                <Footer />
            </div>
        </>
    )
}

export async function getServerSideProps(req) {
    const { id } = req.query
    const res = await fetch(`https://fireside-woodcraft.vercel.app/api/product/${id}`);
    const data = await res.json();
    return { props: { product: data } }
}

export default Product;