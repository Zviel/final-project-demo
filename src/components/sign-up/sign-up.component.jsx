import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth , createUserProfileDocument} from "../../firebase/firebase.utils";
import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        //manually creating a user
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert("הסיסמאות אינן תואמות");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState(
                {
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                }
            );
            if(user)
                alert("ההרשמה בוצעה בהצלחה, הינך מועבר לאתר");

        }catch(e){
            console.error(e.message);
        }
    };

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    };

    render () {
        const {displayName,email,password,confirmPassword}=this.state;
        return (
            <div className="sign-up">
                <h2 className='title'>אין לי חשבון, אני רוצה להרשם!</h2>
                <span>הרשמה עם כתובת מייל וסיסמא</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
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
                        type='password'
                        name ='password'
                        value={password}
                        onChange={this.handleChange}
                        label='סיסמא'
                        required
                        >
                    </FormInput>
                    <FormInput
                        type='password'
                        name ='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='אימות סיסמא'
                        required
                        >
                    </FormInput>
                    <CustomButton type='submit'>הרשמה</CustomButton>
                </form>
            </div>
        );
    }
}
export default SignUp;