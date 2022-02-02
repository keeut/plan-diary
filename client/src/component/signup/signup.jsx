import React, {  useState,useCallback } from 'react';
import styles from './signup.module.css'

const Signup = ({signup}) => {

    const [userId,setUserId] =useState('')
    const [password,setPassword] =useState('')
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
  
    const onSubmit = useCallback((event)=>{
        event.preventDefault();
        signup(userId,password,name,email).catch(Error)
    },[]);
  
    

    const onChange = useCallback((e) =>{
        switch (e.target.name) {
            case 'id':
                setUserId(e.target.value)
                break;
        
            case 'password':
                setPassword(e.target.value)    
                break;
            case 'name':
                setName(e.target.value)    
                break;
            case 'email':
                setEmail(e.target.value)    
                break;
        }
    },[]);


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                SIGNUP
            </div>
            <form className={styles.form} onSubmit={onSubmit}>
                <input placeholder='id' type="text" onChange={onChange} value={userId} className={styles.input} name='id'/>
                <input placeholder='password' type="text" onChange={onChange} value={password} className={styles.input} name='password' />
                <input placeholder='name' type="text" onChange={onChange} value={name} className={styles.input} name='name' />
                <input placeholder='email' type="text" onChange={onChange} value={email} className={styles.input} name='email' />
                <button className={styles.button}>signup</button>
            </form>
            <div className={styles.footer}>MAKE UR PLAN</div>
        </div>
    );
};

export default Signup;