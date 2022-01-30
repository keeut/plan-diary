import React from 'react';
import styles from './header.module.css'
const Header = ({year,month,goPreivousMonth,goNextMonth}) => {

    const onPrevious = ()=>{
        goPreivousMonth()
    }
    const onNext = ()=>{
        goNextMonth()
    }

    return (
        <div className={styles.container}>
            <button onClick={onPrevious} className={styles.button} >
                <i class="far fa-arrow-alt-circle-left"></i></button>
            <div className={styles.year_month}>
                {year}년 {month}월</div>
            <button onClick={onNext} className={styles.button}>
                <i class="far fa-arrow-alt-circle-right"></i></button>
        </div>
    );
};

export default Header;