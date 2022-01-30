import React from 'react';
import styles from './nonDates.module.css'

const NonDates = (props) => {

    return(
           <div className={styles.container}>
               <div className={styles.date}>{props.date}</div>
            </div> 
    )};

export default NonDates;