import Link from "next/dist/client/link";

const ProductsGallery = ({ productData }) => {

    return (
        <div className='product-gallery'>
            {productData.map((product, productIndex) => {
                return (
                    <div className='product-container' key={productIndex}>
                        <h3 className='product-title'>{product.name}</h3>
                        <img src={product.imageUrl} className="product-image" />
                        <div className='product-details'>
                            <p className='product-price'><span>Price:</span> £{product.price}</p>
                        </div >
                        <div className='product-buttons'>
                            <Link href='/product/[id]' as={`/product/${product.id}`}><button className='more-details'>More Details <span className='button-arrow'>→</span></button></Link>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default ProductsGallery;