import Link from "next/dist/client/link";
import Footer from "../components/footer";
import Head from "next/head";

const Privacy = () => {
    return (
        <>
            <Head>
                <title>Privacy | Fireside Woodcraft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section className="terms-container">
                <Link href='/'><a>&#8592; Back to Home</a></Link>
                <h2>Privacy Infomation</h2>
                <p></p>
                <h2>Cookies</h2>
                <p></p>
            </section>
            <Footer />
        </>
    );
}

export default Privacy;