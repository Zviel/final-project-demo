import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo white.svg';
import {connect} from 'react-redux';//a high order component that allows us to modify components with things related to redux
//takes components as arguments and return a component
import './header.styles.scss';
import {auth} from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
<div className='header'>
    <div className='options'>
        {
            currentUser ?
                <div className='option' onClick={()=> auth.signOut() }>
                    התנתק
                </div>
                :
                <Link className='option' to='/sign-in'> התחבר</Link>

        }
        <div >
            {
                currentUser ?
                    null
                    :
                    <Link className='option' to="/sign-up">
                        הרשמה
                    </Link>
            }
        </div>

        <div >
            {
                currentUser ?
                    <Link className='option' to="/homepage">
                        קורסים
                    </Link>
                    :
                    null
            }
        </div>

        <div >
            {
                currentUser ?
                    <a className='option' href="https://segal-chat-app.herokuapp.com/">
                        צ'אט
                    </a>
                    :
                    null
            }
        </div>

        <div className='options'>
            {
                currentUser ?

                    <Link className='option' to="/user-profile">
                        פרופיל משתמש
                    </Link>
                    :
                    null
            }
        </div>

        <div >
            {
                currentUser ?

                    <label className='display' > שלום,  {currentUser.displayName} </label>
                    :
                    null
            }
        </div>

    </div>
    <Link className='logo-container' to="/">
        <Logo className='logo'/>
    </Link>
</div>
);

//function that allows us to access the state - our root reducer
const mapStateToProps = state =>(
    {
       currentUser: state.user.currentUser
    }
);
//connect can get 2 arguments , the second is unnecessary
export default connect(mapStateToProps)(Header);
