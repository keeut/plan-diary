import React, { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import styles from './navBar.module.css'

const NavBar = () =>{
    console.log('navbar')
    const {user,logout,setUser} = useContext(AuthContext)
    
    const [onAccount,setOnAccount] = useState('')

    const navigate = useNavigate();
    const goHome = useCallback(()=>{
        navigate('/')
    },[])
    const onLogout = useCallback(() =>{
        if(window.confirm('로그아웃 하시겠습니까?')){
        logout();
        setUser('')
        }},[]);
         
    const onClickAccount = useCallback(() =>{
        switch (onAccount) {
            case '':
                setOnAccount(true)
                break;
            case true:
                setOnAccount('')
                break;
        }
    },[])

return(
    <div className={styles.container}>
        {console.log('rerender navbar   ')}
        <button className={styles.icon} onClick={goHome}>
        <div className={styles.name}>PlAN-DIARY</div>
        </button>
        
        <div className={styles.user_container}>
            <div className={styles.user}>
                {user}
            </div>
            <div className={styles.buttons_continaer}>
                <button className={styles.account_button} onClick={onClickAccount}><i class="fas fa-sort-down"></i></button>
            </div>
        </div>
        <div className={styles.account_content}>
                {onAccount &&
                    <button className={styles.logout} onClick={onLogout}>logout</button>}
        </div>
    </div>
        
    )};

export default NavBar;