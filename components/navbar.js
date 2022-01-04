import CartIcon from "./cart-icon";
import { motion } from "framer-motion";

const Navbar = () => {

    const handleScroll = (location) => {
        document.querySelector(location).scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <nav>
            <ul>
                <img src="img/FSW Logo.jpg" className="nav-logo" />
                <li ><a className='home-link' onClick={() => handleScroll('#ethos-section')}>ETHOS</a></li>
                <li><a className='home-link' onClick={() => handleScroll('#products-section')}>PRODUCTS</a></li>
                <li><a className='home-link' onClick={() => handleScroll('#gallery-section')}>GALLERY</a></li>
                <li><a className='home-link' onClick={() => handleScroll('#contact-section')}>CONTACT</a></li>
            </ul>
            <CartIcon />
        </nav >
    );
}

export default Navbar;