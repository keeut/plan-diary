import React, { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import AuthContext from '../../context/AuthContext';
import Signup from '../signup/signup';
import styles from './login.module.css'

const Login = (props) => {

    const {login,signup} = useContext(AuthContext);
    const [userId,setUserId] =useState('')
    const [password,setPassword] =useState('')
    const [signupflag, setSignupFlag] = useState(false)
    
    const onSubmit = (event)=>{
        event.preventDefault();
        login(userId,password).catch((Error)=>{console.log(Error)});
    };

    const onClickSignup = () => {
        setSignupFlag(true)
    };

    const onChange = (e) =>{
        switch (e.target.name) {
            case 'id':
                setUserId(e.target.value)
                break;
        
            case 'password':
                setPassword(e.target.value)    
                break;
        }
    };

    return(
    <div className={styles.container}>
        {signupflag? <Signup signup={signup}/> :
        <div className={styles.login_container}>
            <div className={styles.header}>
                LOGIN
            </div>
            <form className={styles.form} onSubmit={onSubmit}>
                <input placeholder='id' type="text" onChange={onChange} value={userId} className={styles.input} name='id'/>
                <input placeholder='password' type="text" onChange={onChange} value={password} className={styles.input} name='password' />
                <button className={styles.button}>login</button>
            </form>
            <div className={styles.footer}>
                <button onClick={onClickSignup} className={styles.signup_button}>signup</button>    
            </div>
        </div>
        }
    </div>
    );
}

export default Login;