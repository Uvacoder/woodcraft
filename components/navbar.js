import CartIcon from "./cart-icon";

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><a className='nav-link' href='/'>HOME</a></li>
                <li><a className='nav-link' href='#ethos-section'>ETHOS</a></li>
                <li><a className='nav-link' href='#products-section'>PRODUCTS</a></li>
                <li><a className='nav-link' href='#contact-section'>CONTACT</a></li>
            </ul>
            <CartIcon />
        </nav>
    );
}

export default Navbar;