import Navbar from "../components/navbar";
import Ethos from "../components/ethos";
import Featured from "../components/products";
import Contact from "../components/contact";
import { motion } from "framer-motion";
import Gallery from "../components/gallery";

export default function Home({ productData }) {

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />
      <section className='title-section' >
        <motion.img src='img/oldtool.jpg' className='title-image' initial={{ x: 60 }} animate={{ x: 0 }} />
        <motion.img src='img/willow.jpg' className='header-image' initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 1.5 }} />
        <motion.h1 initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }} className='page-title'>Fireside Woodcraft<span><img className='logo-image' src='img/FSW Logo.jpg' /></span></motion.h1>
      </section>
      <Ethos />
      <Featured productData={productData} />
      <Gallery />
      <Contact />
    </motion.div >
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://fireside-woodcraft.vercel.app//api/product');
  const data = await res.json();

  return {
    props: {
      productData: data
    }
  }
}
