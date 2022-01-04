import Head from "next/head";
import Link from "next/dist/client/link";
import Footer from "../components/footer";

const Terms = () => {
    return (
        <>
            <Head>
                <title>Terms &#38; Conditions | Fireside Woodcraft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section className="terms-container">
                <Link href='/'><a>&#8592; Back to Home</a></Link>
                <h2>Terms and Conditions</h2>
                <p></p>
            </section>
            <Footer />
        </>
    );
}

export default Terms;