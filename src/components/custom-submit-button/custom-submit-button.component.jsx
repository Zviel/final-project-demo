import React from 'react';
import {PropTypes} from 'prop-types';


class CustomSubmitButton extends React.Component {
    static propTypes = {
        email:PropTypes.string.isRequired,
        formValues:PropTypes.shape(
            {
                displayName:PropTypes.string.isRequired,
                email:PropTypes.string.isRequired,
                content:PropTypes.string.isRequired,
            }
        ).isRequired,

    };
    constructor(props){
        super(props);

        this.state = {
            isClicked:false,
            email:"moranith@gmail.com"
        };
        this.logFormDataToConsole.bind(this);
    }

    logFormDataToConsole(event){
        console.log(this.props.formValues);
    }

    render() {
        const recipient = `mailto:${this.state.email}`;
        const subject = '?subject=mail%20from%20user';
        const body = `&body=${this.props.formValues.content}`;
        return (
            <a href = {`${recipient}${subject}${body}`}
            onClick={this.logFormDataToConsole}>
            שליחה
            </a>
        );
    }
}

export default CustomSubmitButton;