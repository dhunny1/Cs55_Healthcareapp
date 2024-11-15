import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../Context/AuthProvider.js';

import { useNavigate } from 'react-router-dom';


import axios from '../API/axios.js';
const LOGIN_URL = '/auth';

const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/; /*This regular expression ensures that the username must start with a letter (either uppercase or lowercase), followed by 3 to 23 characters that can be letters, numbers, hyphens, or underscores.*/

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; /*This line defines a regular expression that requires a password to be between 8 and 24 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%). */


/**/
const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef(); /**/
    const errRef = useRef();/*error*/

    const [user , setUser] = useState('');
    const [pwd , setPwd] = useState('');

    const [errMsg , setErrMsg] = useState(''); /*Shows if there is any error*/
    const[success, setSuccess] = useState(false); /*shows when you have successfully loged in*/


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg(''); /*erases previous errors  */
    }, [user,pwd])

  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setSuccess(false);
    }

   
  return (
    <>
        {success ? (

            <section>
                <h1>you are Logged In!!</h1>
                <br />
                <p>
                    <a href='/home'>go to home</a>
                </p>
            </section>
        )   :(

    <section>
        <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>UserName: </label>
            <input type='text' 
            id="username" 
            ref={userRef} 
            autoComplete='off' 
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            />
            <label htmlFor='password'>Password: </label>
            <input type='password' 
            id="password" 
            autoComplete='off' 
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            />
            <button>Sign In</button>
        </form>

        <p>
            Need an Account?<br />
            
            <span className='line'>
                {/*put router link here */}
                <a href='http://localhost:3000/register'>Sign up</a>
                

            </span>
        </p>
    </section>
    )}
    </>
  )
}

export default Login