import { motion } from "framer-motion";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { useDispatchCart } from "../../context/cartContext";
import { useState } from "react";
import { UseLocoScroll } from "../../hooks/useLocoScroll";

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

    const [slideIndex, setSlideIndex] = useState(1);

    const selectedGalleryLength = product.images.length

    console.log(product.images.length)

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
        <motion.div className='product-page-container' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className='product-image-gallery'>
                {product.images.map((image, imageIndex) => {
                    if (slideIndex === imageIndex + 1) {
                        return (
                            <img className='product-page-image' src={image} key={imageIndex} />
                        )
                    }
                })}
                <div className='gallery-buttons'>
                    <p onClick={prevSlide}>⇐</p>
                    <p onClick={nextSlide}>⇒</p>
                </div>
            </div>
            <div className='product-page-details'>
                <Link href='/#products-section' scroll={false}><a className='product-page-link'>Back To Products</a></Link>
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