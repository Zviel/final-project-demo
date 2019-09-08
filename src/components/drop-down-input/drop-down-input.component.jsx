import React from 'react';
import '../../../node_modules/react-dropdown/style.css';
import './drop-down-input.styles.scss';
import DropDown from "react-dropdown";
//this function will get the change event , the label and the rest of the props that we do not have to declare
//we want to bubble up any change that occurs
//the other props are the name , type , required etc.
const DropDownInput = ({handleSelect,label,options,...otherProps}) =>(
    <div className='group'>
        {
            //if the user wants to send a label then we need it , if not then we will not set it
            label ?
                (<label className= "form-input-label-profile">
                    {label}
                </label>)
                :null
        }
        <DropDown  options={options}
                   onChange ={handleSelect} {...otherProps}  placeholder="בחר">
        </DropDown>
    </div>
);

export default DropDownInput