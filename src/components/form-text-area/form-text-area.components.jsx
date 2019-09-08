import React from 'react';

import './form-text-area.styles.scss';
//this function will get the change event , the label and the rest of the props that we do not have to declare
//we want to bubble up any change that occurs
//the other props are the name , type , required etc.
const FormTextArea = ({handleChange,label,...otherProps}) =>(
    <div className='group'>
        {
            //if the user wants to send a label then we need it , if not then we will not set it
            label ?
                (<label className={`${otherProps.value.length ? 'move':''} form-text-area-label`}>
                    {label}
                </label>)
                :null
        }

        <textarea className='form-text-area' onChange={handleChange} {...otherProps}/>
    </div>
);

export default FormTextArea