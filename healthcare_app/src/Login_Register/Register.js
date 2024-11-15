import React from 'react'
import {useRef, useState, useEffect} from "react";
import { openDB } from 'idb';

import { useNavigate } from 'react-router-dom';


const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/; /*This regular expression ensures that the username must start with a letter (either uppercase or lowercase), followed by 3 to 23 characters that can be letters, numbers, hyphens, or underscores.*/

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; /*This line defines a regular expression that requires a password to be between 8 and 24 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%). */


const Register = () => {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [user , setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState (false);

  const [pwd , setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState (false);

  const [matchPwd , setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState (false);

  const [errMsg,setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])


  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd])


  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if button enabled with js hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if(!v1 || !v2 || !validMatch) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(user, pwd);
    setSuccess(true);
  }
 
  

  return (
    <>
    {success ? (
      <section><h1>Success!</h1>
        <p>
            
          <a href="http://localhost:3000/home">Sign In</a>
        </p>
      </section>
    ) : (
    <section>
      <p ref= {errRef} className= {errMsg ? "errmsg": "offscreen"} aria-live='assertive'>{errMsg}</p>

      <h1>Register</h1>      
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: 
          <span className={validName ? "valid" : "hide"}>
            <icon aria-label="Checkmark icon">✔</icon>
          </span>
          <span className={validName ||  !user ? "hide" : "invalid"}>
            <icon aria-label="Invalid icon">×</icon>
          </span>
          
        </label>
        <input 
          type='text'
          id='username'
          ref={userRef}
          autoComplete='off'
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby='uidnote'
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
          <icon>Icon here </icon> <br/>
          4 to 24 characters. <br/>
          Must begin with a letter. <br />
          Letters, numbers, underscores, hyphesn allowed.
        </p>


        <label htmlFor='password'>
          Password:
          <span className={validPwd ? "valid" : "hide" }>
            <icon aria-label="Checkmark icon">✔</icon>
          </span>
          <span className={validPwd ||  !pwd? "hide" : "invalid"}>
            <icon ria-label="Invalid icon">×</icon>
          </span>
        </label>
        <input
          type='password'
          id='password'
          onChange = {(e) => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby='pwdnote'
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}        
        />
        <p id='pwdnote' className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
          <icon>Icon here </icon> <br/>
            8 to 24 characters. <br/>
            Must include uppercase and lowercase letters, a number and a special character. <br />
            Allowed special characters: <span  aria-label='exclamation mark'>!</span><span aria-label='at symbol'>@</span><span aria-label='hashtag'>#</span><span aria-label='dollar sign'>$</span><span aria-label='percent'>%</span>
        </p>


        <label htmlFor='confirm_pwd'>
          Confirm Password: 
          <span className={validMatch && matchPwd ? "valid": "hide"}>
            <icon aria-label="Checkmark icon">✔</icon>
          </span>
          <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
            <icon ria-label="Invalid icon">×</icon>
          </span>
        </label>
        <input 
          type='password'
          id='confirm_pwd'
          onChange={(e) => setMatchPwd(e.target.value)}
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby='confirmnote'
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)} 
          />
        <p id='confirmnote' className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            <icon>icone here</icon>
            Must match the first password input field. 
        </p>

        <button disabled={!validName || !validPwd || ! validMatch ? true : false}>
          Sign Up
        </button>
        

      </form>
      <p>
        Already registered? <br/>
        <span className='line'>
          {/*put  router link here */}
          <a href='http://localhost:3000/'>Sign in</a>
        </span>
      </p>





    </section>
    )}
    </>
  )
}

export default Register