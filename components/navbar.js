import CartIcon from "./cart-icon";
import Link from "next/dist/client/link";

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><Link><a className='nav-link' href='/'>HOME</a></Link></li>
                <li><a className='nav-link' href='#ethos-section'>ETHOS</a></li>
                <li><a className='nav-link' href='#products-section'>PRODUCTS</a></li>
                <li><a className='nav-link' href='#contact-section'>CONTACT</a></li>
            </ul>
            <CartIcon />
        </nav>
    );
}

export default Navbar;