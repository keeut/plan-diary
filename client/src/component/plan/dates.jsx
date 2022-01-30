import React from 'react';
import styles from './dates.module.css'
const Dates = (props) => {

    const onClick = () => {props.onClick(props.date,props.plan)}

    return(
           <div draggable ={true} className={styles.container}>
               <div className={styles.date}>{props.date}</div>
               <div className={styles.plans}>
                {props.plan && 
                    props.plan.map((x) =>(
                        <div className={styles.plan}>{x.plan}</div>))}
               </div>
               <button onClick={onClick} className={styles.button}>
                </button>
            </div> 
    )};

export default Dates;