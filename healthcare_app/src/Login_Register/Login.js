import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../Context/AuthProvider';

import axios from '../API/axios';
const LOGIN_URL = '/auth';

/**/
const Login = () => {
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

    const handelSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({user, pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
        );
            console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user, pwd, roles, accessToken});
            setUser("");
            setPwd('');
            setSuccess(true);

        }catch(err){
            if(!err?.response){
                setErrMsg('No Server Response');

            }else if (err.response?.status === 400){
                setErrMsg('Missing Username or Password');

            }else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            }else{
                setErrMsg('Login Failed');
            }

        }


       
    }

  return (
    <>
        {success ? (

            <section>
                <h1>you are Logged In!!</h1>
                <br />
                <p>
                    <a herf="#">Go to Home</a>
                </p>
            </section>
        )   :(

    <section>
        <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={handelSubmit}>
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
                <a herf='#'>Sign Up</a>

            </span>
        </p>
    </section>
    )}
    </>
  )
}

export default Login