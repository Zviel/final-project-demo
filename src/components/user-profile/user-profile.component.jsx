import React from 'react';
import ProfileFormInput from '../profile-form-input/profile-form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './user-profile.styles.scss';
import DropDownInput from "../drop-down-input/drop-down-input.component";
import {firestore} from "../../firebase/firebase.utils";
import {connect} from 'react-redux';
//a high order component that allows us to modify components with things related to redux
//takes components as arguments and return a component

class UserProfile extends React.Component {

    constructor() {

        super();

        this.state = {
            userId:'',
            firstName:'',
            lastName:'',
            birthDate:new Date(),
            gender:''


        }
    }

    async componentDidMount() {
        const user = this.props.currentUser;
        const ref = await firestore.collection('users').get();
        ref.docs.map(doc => {
            if (doc.exists) {
                const userData = doc.data();
                if (userData.email === user.email) {
                    this.setState({
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        birthDate: userData.birthDate,
                        gender: userData.gender,
                        userId:doc.id
                    });
                } else {
                    console.log("No such document!");
                }
            }
            return doc;
        });
    }

    //we want full control of what the submit will do
    handleSubmit = async event => {
        event.preventDefault();
        const { userId,firstName, lastName, birthDate,gender } = this.state;
        const updateRef = firestore.collection('users').doc(userId);
        updateRef.update({

            firstName,
            lastName,
            birthDate,
            gender
        }).then((docRef) => {
            this.setState({
                firstName: '',
                lastName: '',
                birthDate: '',
                gender: ''
            });
            this.props.history.push('/')
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    };

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    };

    handleSelect = event => {
        this.setState({gender: event.value});
        alert(event.value);
    };


    render () {
        const {firstName,lastName,birthDate,gender}=this.state;
        const genderOptions = ["נקבה","גבר","אחר"];
        const defaultOption = genderOptions[0];
        return (
            <div className="input-field">
                <h2 className='title'>עריכת פרופיל משתמש</h2>
                <span>במסך זה ניתן לערוך את המידע האישי שלכם, אפשרות זו הינה לבחירתכם בלבד</span>
                <form  onSubmit={this.handleSubmit}>
                    <ProfileFormInput
                        type='text'
                        name ='firstName'
                        value={firstName}
                        onChange={this.handleChange}
                        label='שם פרטי'

                    >
                    </ProfileFormInput>
                    <ProfileFormInput
                        type='text'
                        name ='lastName'
                        value={lastName}
                        onChange={this.handleChange}
                        label='שם משפחה'

                    >
                    </ProfileFormInput>
                    <ProfileFormInput
                        type='date'
                        name ='birthDate'
                        value={birthDate}
                        onChange={this.handleChange}
                        label='תאריך לידה'

                    >
                    </ProfileFormInput>
                    <DropDownInput
                        label='מגדר'
                        name ='gender'
                        value={gender}
                        defaultOption = {defaultOption}
                        onChange={this.handleSelect}
                        options = {genderOptions}
                    >
                    </DropDownInput>

                    <CustomButton type="submit">שליחה</CustomButton>
                </form>
            </div>
        );
    }
}

//function that allows us to access the state - our root reducer
const mapStateToProps = state =>(
    {
        currentUser: state.user.currentUser
    }
);
export default connect(mapStateToProps)(UserProfile);