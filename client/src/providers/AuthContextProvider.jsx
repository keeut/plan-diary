import React, { useEffect, useState } from 'react';
import Login from '../component/login/login';
import AuthContext from '../context/AuthContext';

const AuthContextProvider = ({children,authservice}) => {

    useEffect(()=>{
        const token = localStorage.getItem('token')
        authservice.me(token).then(result=>{setUser(result.userId)})
        //토큰 있나 확인하고 있으면 로그인
    },[])

    const [user,setUser] = useState(undefined)

    const login = async (userId,password) => {
        authservice.login(userId,password).then(data=>(setUser(data.id)))
    };

    const signup = async (userId,password,name,email) => {
        authservice.signup(userId,password,name,email).then(data=>(setUser(data.id)))
    }

    const logout = async() =>{
        authservice.logout()
    }

    return (
        <AuthContext.Provider value={{login,signup,user,logout,setUser}}>
            {user? children : <Login />}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider


;