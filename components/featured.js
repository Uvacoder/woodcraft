import ProductsGallery from "./productsGallery";

const Featured = ({ productData }) => {

    return (
        <section className='featured-section' id='featured-section'>
            <h2 className='section-title featured-title'>PRODUCTS</h2>
            <p className='product-info'>Producing high quality, ecologically sustainable products that showcase the natural beauty of wood. Made using hand tools to preserve the natural form of the material. For furniture, gifts, garden sculptures and kitchenware visit our Etsy shop or get in touch.
            </p>
            <div className='featured-products-container data-scroll-section' id='product-scroll'>
                <ProductsGallery productData={productData} />
            </div>

            <div className='bespoke-product-container'>
                <h3 className='bespoke-title'>Made Just For You...</h3>
                <p className='bespoke-product-info'>Can&apos;t find what your looking for? We can arrange a customised design on any existing product or create something entirely new!
                    <br />
                    <br />
                    Sculptures and furniture are typically made to order. For bespoke projects that will become a feature of your garden or home its important that you have a hand in the creative process. Tell me about your vision and we can arrange a commission.
                </p>
            </div>
        </section >
    );
}

export default Featured;
