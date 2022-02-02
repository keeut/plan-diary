import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import Login from '../component/login/login';
import AuthContext from '../context/AuthContext';

const AuthContextProvider = memo(({children,authservice}) => {

    useEffect(()=>{
        const token = localStorage.getItem('token')
        authservice.me(token).then(result=>{setUser(result.userId)})
        //토큰 있나 확인하고 있으면 로그인
    },[])

    const [user,setUser] = useState(undefined,[authservice])

    const login = useCallback( async (userId,password) => {
        authservice.login(userId,password).then(data=>(setUser(data.id)))
    },[authservice]);

    const signup = useCallback(async (userId,password,name,email) => {
        authservice.signup(userId,password,name,email).then(data=>(setUser(data.id)))
    },[authservice])

    const logout = useCallback(async() =>{
        authservice.logout()
    },[authservice])

    return (
        <Fragment>
            {console.log('rerender Authprovider')}
        <AuthContext.Provider value={{login,signup,user,logout,setUser}}>
            
            {user? children : <Login />}
        </AuthContext.Provider>
        </Fragment>
    );
});

export default AuthContextProvider


;