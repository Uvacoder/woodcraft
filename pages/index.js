import Navbar from "../components/navbar";
import Ethos from "../components/ethos";
import Featured from "../components/featured";
import Contact from "../components/contact";
import { motion } from "framer-motion";
import Gallery from "../components/gallery";

export default function Home({ productData }) {

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} data-scroll-section>
      <Navbar />
      <section className='title-section' >
        <img src='img/oldtools.jpg' className='title-image' data-scroll data-scroll-direction='horizontal' />
        <img src='img/willow.jpg' className='header-image' />
        <motion.h1 initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }} className='page-title'>Fireside Woodcraft<span><img className='logo-image' src='img/FSW Logo.jpg' /></span></motion.h1>
      </section>
      <Ethos />
      <Gallery />
      <Featured productData={productData} />
      <Contact />
    </motion.div >
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/product');
  const data = await res.json();

  return {
    props: {
      productData: data
    }
  }
}
