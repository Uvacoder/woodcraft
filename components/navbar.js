import CartIcon from "./cart-icon";
import { UseLocoScroll } from "../hooks/useLocoScroll";

const Navbar = () => {

    const { scrollToLocation } = UseLocoScroll();

    return (
        <nav>
            <ul>
                <li><a className='nav-link'>HOME</a></li>
                <li><a className='nav-link' onClick={() => scrollToLocation('#ethos-section')}>ETHOS</a></li>
                <li><a className='nav-link' onClick={() => scrollToLocation('#featured-section')}>PRODUCTS</a></li>
                <li><a className='nav-link' onClick={() => scrollToLocation('#contact-section')}>CONTACT</a></li>
            </ul>
            <CartIcon />
        </nav>
    );
}

export default Navbar;