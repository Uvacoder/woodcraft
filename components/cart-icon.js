import Link from "next/dist/client/link";
import { useCart } from "../context/cartContext";

const CartIcon = () => {

    const cartItems = useCart()

    return (
        <div>
            <Link href='/cart'><a className='cart-icon'>CART ({cartItems.length})</a></Link>
        </div>
    );
}

export default CartIcon;