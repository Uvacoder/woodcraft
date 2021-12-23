import { motion } from "framer-motion";

const skewLogo = {
    rest: {
        y: 0,
    },
    hover: {
        y: -4,
        transition: {
            duration: 0.3,
        },
    }
}

const textSkew = {
    rest: {
        transition: {
            delay: 0,
        }
    },
    hover: {
        transition: {
            duration: 0.1,
            delay: 0,
            ease: 'linear',
        },
    }
}

const Contact = () => {
    return (
        <section className='contact-section' id='contact-section'>
            <img className="contact-image" src="img/chesnut.jpg" />
            <h2 className='section-title contact-title'>CONTACT</h2>

            <form>
                <title></title>
            </form>
            <div className='contact-links'>
                <ul className='contact-list'>
                    <li>
                        <p>Email us at:</p>
                        <h3> mattcook.fireside@gmail.com</h3>
                    </li>
                    <li>
                        <p>Or call on: </p>
                        <h3>07943886904 </h3>
                    </li>
                </ul>
                <ul className='social-media-links'>
                    <p>Find us on:</p>
                    <motion.li initial="rest" whileHover="hover" animate="rest">
                        <motion.img variants={skewLogo} src='img/facebook.png' className='socials-image' />
                        <motion.a variants={textSkew} href='https://www.facebook.com/FiresideWoodcraftFB/?ref=page_internal' target='_blank' rel="noreferrer">Facebook</motion.a>
                    </motion.li>
                    <motion.li initial="rest" whileHover="hover" animate="rest">
                        <motion.img variants={skewLogo} src='img/etsy.png' className='socials-image' />
                        <motion.a variants={textSkew} href='https://www.etsy.com/uk/shop/FiresideWoodcraft?ref=profile_header' target='_blank' rel="noreferrer">Etsy</motion.a>
                    </motion.li>
                    <motion.li initial="rest" whileHover="hover" animate="rest">
                        <motion.img variants={skewLogo} src='img/instagram.png' className='socials-image' />
                        <motion.a variants={textSkew} href='https://www.instagram.com/firesidewoodcraft_/' target='_blank' rel="noreferrer">Instagram</motion.a>
                    </motion.li>
                </ul>
            </div>
            <motion.button whileTap={{ scale: 0.8 }} className='back-to-top-button' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Back To Top</motion.button>
        </section >
    );
}

export default Contact;