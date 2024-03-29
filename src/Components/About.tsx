import "../Design/CSS/ComponentStyles/About.css";

// Component with text and human image
let About = () => {
    return(
        <div id="about">
            {/* This div holds an image background coming from CSS */}
            <div className="tablet-image phone-image" />
            <div id="about__description">
                <h1>Bringing you the <span>best</span> audio gear</h1>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <div className="desktop-image" />
        </div>
    );
}

export default About;