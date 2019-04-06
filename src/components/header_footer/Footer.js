import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
        <Fade delay={500}>
            <div className="font_pt footer_logo_venue">
                Natural Life
            </div>
            <div className="footer_copyright">
                @The Natural Life 2019
            </div>
        </Fade>
            
        </footer>
    );
};

export default Footer;