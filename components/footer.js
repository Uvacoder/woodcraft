import Link from "next/dist/client/link";

const Footer = () => {
    return (
        <footer>
            <p>© Fireside Woodcraft 2022</p>
            <ul>
                <Link href='/terms'><li><a>Terms &#38; Conditions</a></li></Link>
                <Link href='/shipping'><li><a>Shipping Info</a></li></Link>
                <Link href='/privacy'><li><a>Privacy &#38; Cookies</a></li></Link>
            </ul>
        </footer>
    );
}
export default Footer;