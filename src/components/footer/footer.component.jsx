import React from 'react';
import {Link} from 'react-router-dom';

import './footer.styles.scss';

const Footer = () => (
    <div className='footer'>
        <div className='options'>
            <Link className='option' to="/contact-us">
                צור קשר
            </Link>
            <Link className='option' to="/java">
                עלינו
            </Link>

        </div>
        <Link className='companyName' to="/">
           כל הזכויות שמורות לצוות eCademy
        </Link>
    </div>
);

export default Footer