import { motion } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {

    const containerRef = useRef()

    const handleGalleryScrollLeft = () => {
        document.querySelectorAll('.gallery-element').forEach((el) => el.style.transform = 'translateX(0vw)')
    }

    const handleGalleryScrollRight = () => {
        document.querySelectorAll('.gallery-element').forEach((el) => el.style.transform = 'translateX(-90vw)')
    }

    return (
        <section className='gallery-section' id='gallery-section'>
            <h2 className='section-title'>GALLERY</h2>
            <div className="gallery-buttons">
                <button className="button-left" onClick={() => handleGalleryScrollLeft()}><img src='img/leftArrow.png' /></button>
                <button className="button-right" onClick={() => handleGalleryScrollRight()}><img src='img/rightArrow.png' /></button>
            </div>
            <motion.div className="gallery-scroll-container" ref={containerRef}>
                <div className="gallery-element gallery-element-1">
                    <h3 className='h3-1'>BUG HOTEL</h3>
                    <img src='img/bughotel.jpg' className='img-1' />
                    <div className="gallery-text-container"><p className="gallery-text">Our bug hotels are designed with an ecological functionality in mind. They don't just look good, they work for the insects that live in them too.</p></div>
                </div>
                <div className="gallery-element gallery-element-2">
                    <h3 className='h3-2'>STOOL</h3>
                    <img src='img/woodleg.jpg' className='img-2' />
                </div>
            </motion.div>
        </section >
    );
}

export default Gallery;