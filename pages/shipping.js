import Link from "next/dist/client/link";
import Footer from "../components/footer";
import Head from "next/head";

const Shipping = () => {
    return (
        <>
            <Head>
                <title>Shipping | Fireside Woodcraft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className='global-container' id='global-container'>
                <section className="terms-container">
                    <Link href='/'><a>&#8592; Back to Home</a></Link>
                    <h2>Shipping Infomation</h2>
                    <p></p>
                </section>
                <Footer />
            </div>
        </>
    );
}

export default Shipping;