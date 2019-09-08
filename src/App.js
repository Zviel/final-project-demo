import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import QuizStack from './components/quiz-stack/quiz-stack.components';
import QuizQueue from './components/quiz-queue/quiz-queue.component';
import StackPartA from './components/stack-part-a/stack-part-a.component';
import StackPartB from './components/stack-part-b/stack-part-b.components';
import QueuePartA from './components/queue-part-a/queue-part-a.component';
import QueuePartB from './components/queue-part-b/queue-part-b.component';
import Header from './components/header/header.component';
import ContactUsPage from './pages/contact-us/contact-us.component';
import AboutUs from './components/about-us/abous-us.component'
import Footer from './components/footer/footer.component';
import LandingPage from './pages/landingpage/landingpage.component';
import SignInPage from './pages/sign-in/sign-in.component';
import  SignUpPage from './pages/sign-up/sign-up.component';
import UserProfile from './components/user-profile/user-profile.component';
import {connect} from 'react-redux';
import { auth , createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import DataStructureA from "./pages/data-structure-a/data-structure-a-component";

class App extends React.Component {

    unSubscribeFromAuth = null;
    //when firebase realize that the user has changed
    //firebase give us this user and the state will change
    //we need to close this connection
    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth){
                //getting the user reference for the user
                //if there isn't we will register it
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    //whenever our user state is changed we are sending the data to the reducer
                    setCurrentUser(
                        {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    );
                    //replacing this code with the current user prop
                   /*this.setState({
                       currentUser: {
                           id: snapShot.id,
                           ...snapShot.data()
                       }
                   });*/
                });
            }
           // this.setState({currentUser:userAuth});
            setCurrentUser(userAuth);

        });
    }
    //when the user will disconnect this will fire
    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }
    /*<Header currentUser={this.state.currentUser}/> using the userReducer so we don't need to pass this on*/
    render () {
        return (
            <div>
                <div className='headerStyle'>
                    <Header/>
                </div>
                <div className='bodyContainer'>
                    <Switch>
                        <Route exact path='/' component={LandingPage}/>
                        <Route exact path={'/about-us'} component={AboutUs} />
                        <Route exact path='/contact-us' component={ContactUsPage}/>
                        /* <Route exact path='/homepage' render={()=>
                            this.props.currentUser ? <HomePage/>:(<Redirect to='/'/>)}/>
                        {/* <Route exact path='/homepage' component={HomePage}/>*/}
                        <Route exact path='/user-profile' render={()=>
                            this.props.currentUser ? <UserProfile/>:(<Redirect to='/'/>)}/>
                        <Route exact path='/homepage/shop' render={()=>
                            this.props.currentUser ? <ShopPage/>:(<Redirect to='/'/>)}/>
                        {/* <Route exact path='/homepage/shop' component={ShopPage}/>*/}
                        <Route exact path='/homepage/data-structure-a' render={()=>
                            this.props.currentUser ? <DataStructureA/>:(<Redirect to='/'/>)}/>
                        {/*<Route exact path='/homepage/data-structure-a' component={DataStructureA}/>*/}
                        <Route exact path='/homepage/data-structure-a/quiz-stack' render={()=>
                            this.props.currentUser ? <QuizStack/>:(<Redirect to='/'/>)}/>
                        {/*<Route exact path='/homepage/data-structure-a/quiz-stack' component={QuizStack}/>*/}
                        <Route exact path='/homepage/data-structure-a/quiz-queue' render={()=>
                            this.props.currentUser ? <QuizQueue/>:(<Redirect to='/'/>)}/>
                        <Route exact path='/homepage/data-structure-a/stack-part-a' render={()=>
                            this.props.currentUser ? <StackPartA/>:(<Redirect to='/'/>)}/>
                        {/*<Route exact path='/homepage/data-structure-a/stack-part-a' component={StackPartA}/>*/}
                        <Route exact path='/homepage/data-structure-a/stack-part-b' render={()=>
                            this.props.currentUser ? <StackPartB/>:(<Redirect to='/'/>)}/>
                        <Route exact path='/homepage/data-structure-a/queue-part-a' render={()=>
                            this.props.currentUser ? <QueuePartA/>:(<Redirect to='/'/>)}/>
                        <Route exact path='/homepage/data-structure-a/queue-part-b' render={()=>
                            this.props.currentUser ? <QueuePartB/>:(<Redirect to='/'/>)}/>
                        <Route exact path='/sign-in' render={()=>
                            this.props.currentUser ? (<Redirect to='/homepage'/>):<SignInPage/>}/>
                        <Route exact path='/sign-up' render={()=>
                            this.props.currentUser ? (<Redirect to='/homepage'/>):<SignUpPage/>}/>

                    </Switch>
                </div>
                <div className='footerStyle'>
                    <Footer />
                </div>
            </div>
        );
    }

}
//if the user is connected we are redirecting him from the sign in page
//we are doing it because we don't want to expose other users to the details of the current user
const mapStateToProps = ({user}) => (
    {
        currentUser:user.currentUser
    }
);
//The app does not need the current user , it only passes it to the header so we will send a null as the first argument
//The dispatch uses whatever action you are passing to be an action Object that is passed on to every reducer
const mapDispatchToProps = dispatch => (
    {
        setCurrentUser : user => dispatch(setCurrentUser(user))//we are just dispatching the Object
    }
);
export default connect(mapStateToProps,mapDispatchToProps)(App);
