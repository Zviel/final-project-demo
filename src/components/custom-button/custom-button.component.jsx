import React from 'react';

import './custom.button.styles.scss';
//we want to create a button that we can reuse through all of the components
const CustomButton = ({children ,isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn? 'google-sign-in' : '' } custom-button `} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;