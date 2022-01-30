import React, { useState } from 'react';
import SideBarButtons from './sideBarButtons';
import styles from './sideBar.module.css'
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [list,setList] = useState([
        {order : 1 , name : '플랜', icon: 'A'},
        {order : 2 , name : '메모', icon: 'B'},
        {order : 3 , name : '일정', icon: 'C'},
        {order : 4 , name : '일기', icon :'D'},
    ],[])

    const navigate = useNavigate();

    const onClick = (name) =>{
        switch (name) {
            case '플랜':
                navigate('/plan')
                break;

                default:
                break;
        }
    }

    return (
        <div className={styles.container} >
            {list.map((content)=>(
            <SideBarButtons 
            content ={content}
            onClickButton={onClick}/>))}
        </div>
    );
};

export default SideBar;