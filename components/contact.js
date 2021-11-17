const Contact = () => {
    return (
        <section className='contact-section' id='contact-section'>
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
                    <li>
                        <img src='img/facebook.png' className='socials-image' />
                        <a href='https://www.facebook.com/FiresideWoodcraftFB/?ref=page_internal' target='_blank' rel="noreferrer">Facebook</a></li>
                    <li>
                        <img src='img/etsy.png' className='socials-image' />
                        <a href='https://www.etsy.com/uk/shop/FiresideWoodcraft?ref=profile_header' target='_blank' rel="noreferrer">Etsy</a>
                    </li>
                    <li>
                        <img src='img/instagram.png' className='socials-image' />
                        <a href='https://www.instagram.com/firesidewoodcraft_/' target='_blank' rel="noreferrer">Instagram</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;