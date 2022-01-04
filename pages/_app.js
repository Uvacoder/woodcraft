import { useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import { AnimatePresence } from "framer-motion"
import { CartProvider } from '../context/cartContext';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {

  const containerRef = useRef(null)
  const router = useRouter()

  return (
    <AnimatePresence exitBeforeEnter>
      <CartProvider>
        {<Component {...pageProps} key={router.route} />}
      </CartProvider>
    </AnimatePresence>
  )
}

export default MyApp;
