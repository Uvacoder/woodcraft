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
                <motion.li whileTap={{ scale: 0.9 }} ><a className='home-link' onClick={() => handleScroll('#ethos-section')}>ETHOS</a></motion.li>
                <motion.li whileTap={{ scale: 0.9 }}><a className='home-link' onClick={() => handleScroll('#products-section')}>PRODUCTS</a></motion.li>
                <motion.li whileTap={{ scale: 0.9 }}><a className='home-link' onClick={() => handleScroll('#gallery-section')}>GALLERY</a></motion.li>
                <motion.li whileTap={{ scale: 0.9 }}><a className='home-link' onClick={() => handleScroll('#contact-section')}>CONTACT</a></motion.li>
            </ul>
            <CartIcon />
        </nav >
    );
}

export default Navbar;