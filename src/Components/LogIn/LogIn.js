import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import './Login.css'
import { Link } from 'react-router-dom';


const LogIn = () => {

    const [user, setUser] = useState({
        isSignedIn : false,
        displayName : '',
        email : '',
        password : '',
        photo : ''
      })

    const [newUser, setNewUser] = useState(false)


      initializeLoginFramework();
    
      const [loggedInUser, setLoggedInUser] = useContext(UserContext)
      const history = useHistory();
      const location = useLocation();
    
      let { from } = location.state || { from: { pathname: "/" } };
    
      const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
             handleResponse(res, true)  
        })
      }
    
    //   const fbSignIn = () => {
    //     handleFbSignIn()
    //     .then(res => {
    //         handleResponse(res, true)     
    //     })
    //   }
    
      const signOut = () => {
        handleSignOut()
        .then(res => {
          handleResponse(res, false)
        })
      }
    
      const handleSubmit = (e) => {
        
        if(newUser && user.password && user.email){
            createUserWithEmailAndPassword(user.displayName, user.email, user.password)
            .then(res => {
              (res.success == true) 
              ? handleResponse(res, false)
              : handleResponse(res, false)   // wrote double for self understanding
              debugger;          
            })
        }
    
        if(!newUser && user.password && user.email){
            signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
              (res.success == true) 
                ? handleResponse(res, true)
                : handleResponse(res, false) 
                debugger;      
            })
        }
    
        e.preventDefault(); // so that it doesnt auto reload after submit
      }
      
    
      const handleResponse = ( res, redirect ) => {
        setUser(res);
        setLoggedInUser(res);  
        if(redirect){
          history.replace(from) // so that it takes you to your expected directory automatically after sign in  
        }
      }
    
      let firstPassword;
      let secondPassword;

      const checkPasswordMatch = (e) => {
        if(!newUser){
          handleBlur(e)
        }
        else{
          if(e.target.name === 'passwordFirst'){
            firstPassword = e.target.value;
          }
          if(e.target.name === 'password'){
            secondPassword = e.target.value;
          }
          if( firstPassword === secondPassword ){
            e.target.name = 'password'
            handleBlur(e)
          }
        }
      }

    
      const handleBlur = (e) => {
    
        let isFieldValid = true;
        console.log('passio', e.target.name) 
        
        if (e.target.name === 'email'){
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password'){
          const isPasswordValid = e.target.value.length > 5
          const passwordHasNumber = /\d{1}/.test(e.target.value);
          isFieldValid = isPasswordValid && passwordHasNumber
        }
        if(isFieldValid){
          const userInfo = {...user} ;    
          userInfo[e.target.name] = e.target.value
          setUser(userInfo)
          console.log(user)
        }
      }

      return (
        <div style={{textAlign : 'center', paddingTop : '30px'}}>
          { 
              user.isSignedIn ? <button onClick={signOut}>Sign out</button>
              : <button onClick={googleSignIn}>Google Sign in</button>
          }
          <br/>
          {/* <button onClick={fbSignIn}>Log In with Facebook</button> */}
    
          {
            user.isSignedIn && <div>
              <p>Welcome, {user.displayName}</p>
              <p>Email : {user.email}</p>
              <img src={user.photo} alt=""/>
            </div>
          }
    
          <h1>Our own authentication</h1>
          {/* <h2>Name : {user.displayName}</h2>
          <h2>Email : {user.email}</h2>
          <h2>Password : {user.password}</h2> */}
          <form onSubmit={handleSubmit} id='form'>
              <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
              <label htmlFor="newUser"> New User Sign Up </label>
              <br/>
              { newUser && <input className='box' type="text" name="displayName" placeholder="Your name" onBlur={handleBlur} required/> }
              <br/>
              <input className='box' type="text" name="email" placeholder="Your email here" onBlur={handleBlur} required/>
              <br/>
              { newUser && <input className='box' type="password" name="passwordFirst" placeholder="Your password here" onBlur={checkPasswordMatch} required/> }
              { newUser && <br/>} 
              <input className='box' type="password" name="password" placeholder="Repeat your password" onBlur={checkPasswordMatch} required/> 
              <br/>
              <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
          </form>
          <p style={{color : 'red'}}>{user.error}</p>
          {
            user.success && <p style={{color : 'green'}}>User {newUser ? 'signed up' : 'logged in'} successfully!</p>
          }
          {
            !user.success && <p style={{color : 'red'}}>User {newUser ? 'signed up' : 'logged in'} wrong</p>
          }
    
        </div>
      );
};

export default LogIn;
