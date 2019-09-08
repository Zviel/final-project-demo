import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";
import './sign-in.styles.scss';

// creating a class and not a function is due to the fact that we need to change the state of the component when the user enters his details
class SignIn extends React.Component {
    constructor(props) {
       super(props);

       this.state = {
           email:'',
           password:''
       }
    }
    //we want full control of what the submit will do
    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        try {
           await auth.signInWithEmailAndPassword(email,password);
           this.setState({email:'',password: ''});
        } catch(e){
           console.log(e);
        }

    };
    //getting the name or the password value from the event
    //we write only one function and use it in our on change event for both of our fields
    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value});
    };

    render () {
        return (
            <div className='sign-in'>
                <h2>תנו לי להכנס , יש לי חשבון</h2>
                <span> כניסה עם דואר אלקטרוני וסיסמה</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="דואר אלקטרוני"
                        required/>

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="סיסמה"
                        required/>

                    <div className='buttons'>
                        <CustomButton type='submit' >
                            כניסה
                        </CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>
                            {''}
                            כניסה עם חשבון Google
                            {''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn