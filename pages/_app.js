import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRouter } from 'next/dist/client/router';
import { AnimatePresence } from "framer-motion"
import { CartProvider } from '../context/cartContext';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {

  const containerRef = useRef(null)
  const router = useRouter()

  return (


    <LocomotiveScrollProvider options={{ smooth: true, multiplier: 1, lerp: 0.1, gestureDirection: 'both', }} watch={[router.asPath]} containerRef={containerRef}>
      <div className='global-container' id='global-container' data-scroll-container ref={containerRef}>
        <AnimatePresence exitBeforeEnter>
          <CartProvider>
            {<Component {...pageProps} key={router.route} />}
          </CartProvider>
        </AnimatePresence>
      </div>
    </LocomotiveScrollProvider>
  )
}

export default MyApp;
