import React from 'react';

import './form-input.styles.scss';
//this function will get the change event , the label and the rest of the props that we do not have to declare
//we want to bubble up any change that occurs
//the other props are the name , type , required etc.
const FormInput = ({handleChange,label,...otherProps}) =>(
    <div className='group'>
        {
            //if the user wants to send a label then we need it , if not then we will not set it
            label ?
                (<label className={`${otherProps.value.length ? 'move':''} form-input-label`}>
                {label}
            </label>)
                :null
        }

        <input className='form-input' onChange={handleChange} {...otherProps}/>
    </div>
);

export default FormInput