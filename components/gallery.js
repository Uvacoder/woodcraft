import { motion } from "framer-motion";
import { useState } from "react";
import { galleryList } from "../galleryList";

const Gallery = () => {

    const [galleryItem, setGalleryItem] = useState(0)

    const handleGalleryScrollLeft = () => {
        if (galleryItem === 0) {
            setGalleryItem(galleryList.length - 1)
        } else {
            setGalleryItem(galleryItem - 1)
        }
    }

    const handleGalleryScrollRight = () => {
        if (galleryItem + 1 === galleryList.length) {
            setGalleryItem(0)
        } else {
            setGalleryItem(galleryItem + 1)
        }
    }

    return (
        <section className='gallery-section' id='gallery-section'>
            <h2 className='section-title'>GALLERY</h2>
            <div className="gallery-navigation">
                <h3 className="explore-text">Explore...</h3>
                <div className="gallery-buttons">
                    <button className="button-left" onClick={() => handleGalleryScrollLeft()}><img src='img/leftArrow.png' /></button>
                    <button className="button-right" onClick={() => handleGalleryScrollRight()}><img src='img/RightArrow.png' /></button>
                </div>
            </div>
            <motion.div className="gallery-scroll-container" >
                {galleryList.map((slide, slideIndex) => {
                    if (slideIndex === galleryItem) {
                        return (
                            <motion.div className="gallery-element gallery-element-1" key={slideIndex} exit={{ x: -400 }} initial={{ x: 50, opacity: 0.5 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                                <h3 className='h3-1'>{slide.name}</h3>
                                <img src={slide.imageUrl} className='img-1' />
                                <div className="gallery-text-container"><p className="gallery-text">{slide.description}</p></div>
                            </motion.div>

                        )
                    }
                })}
            </motion.div>
        </section >
    );
}

export default Gallery;