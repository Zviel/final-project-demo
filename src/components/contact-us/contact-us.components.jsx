import React from 'react';
import FormInput from "../form-input/form-input.component";
import FormTextArea from '../form-text-area/form-text-area.components';
import './contact-us.styles.scss'
import CustomSubmitButton from "../custom-submit-button/custom-submit-button.component";

class ContactUs extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName:'',
            email:'',
            subject:'',
            content:''

        }
    }

    handleSubmit = async event => {

    };

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    };

    render () {
        const {displayName,email,subject,content}=this.state;
        return (
            <div className="contact-us">
                <h2 className='title'>יצירת קשר</h2>
                <span>יש למלא את כל השדות על מנת לשלוח הודעה למנהלי האתר</span>
                <form  onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name ='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='שם מלא'
                        required
                    >
                    </FormInput>
                    <FormInput
                        type='email'
                        name ='email'
                        value={email}
                        onChange={this.handleChange}
                        label='כתובת מייל'
                        required
                    >
                    </FormInput>
                    <FormInput
                        type='text'
                        name ='subject'
                        value={subject}
                        onChange={this.handleChange}
                        label='נושא ההודעה'
                        required
                    >
                    </FormInput>
                    <FormTextArea
                        type='text'
                        name ='content'
                        value={content}
                        onChange={this.handleChange}
                        label='תוכן ההודעה'
                        required
                    >
                    </FormTextArea>
                    <CustomSubmitButton email="moranith@gmail.com" formValues={this.state}>   שליחה</CustomSubmitButton>
                </form>
            </div>
        );
    }
}
export default ContactUs;