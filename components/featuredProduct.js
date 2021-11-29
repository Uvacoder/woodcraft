import Link from "next/dist/client/link";

const FeaturedProduct = ({ productData }) => {

    return (
        <>
            {
                productData.map((product, productIndex) => {
                    if (productIndex === 0) {
                        return (
                            <div className='product-container' key={productIndex}>
                                <h3 className='product-title'>{product.name}</h3>
                                <img src={product.imageUrl} className="product-image" />
                                <div className='product-details'>
                                    <p className='product-price'>£{product.price}</p>
                                    <Link href='/product/[id]' as={`/product/${product.id}`}><button className='more-details'>Details <span className='button-arrow'> →</span></button></Link>
                                </div >
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default FeaturedProduct;