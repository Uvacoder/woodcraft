import ProductsGallery from "./productsGallery";
import FeaturedProduct from "./featuredProduct";

const Featured = ({ productData }) => {

    return (
        <section className='products-section' id='products-section'>
            <h2 className='section-title featured-title'>PRODUCTS</h2>
            <div className='featured-section'>
                <div className='product-details-container'>
                    <p className='product-info'>Producing high quality, ecologically sustainable products that showcase the natural beauty of wood. Made using hand tools to preserve the natural form of the material. For furniture, gifts, garden sculptures and kitchenware visit our Etsy shop or get in touch.
                    </p>
                    <div className='bespoke-product-container'>
                        <img className='gouge-image' src='img/gouge.svg' />

                        <h3 className='bespoke-title'>Made Just For You...</h3>
                        <p className='bespoke-product-info'>Can&apos;t find what your looking for? We can arrange a customised design on any existing product or create something entirely new!
                            <br />
                            <br />
                            Sculptures and furniture are typically made to order. For bespoke projects that will become a feature of your garden or home its important that you have a hand in the creative process. Tell me about your vision and we can arrange a commission.
                        </p>
                    </div>
                </div>
                <div className='featured-product-container'>
                    <h3 className='latest-product'>Latest Product</h3>
                    <FeaturedProduct productData={productData} />
                </div>
            </div>
            <h3 >ALL PRODUCTS</h3>
            <div className='product-gallery-container'>
                <ProductsGallery productData={productData} />
            </div>
        </section >
    );
}

export default Featured;
