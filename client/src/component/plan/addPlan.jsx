import React, { useRef } from 'react';
import styles from './addPlan.module.css'

const AddPlan = (props) => {
    const inputRef = useRef();
    const onEdit = () => {
        props.onEdit(inputRef.current.value)
    }

    return(
    <div className={styles.container}>
        <div className={styles.header}>
            {props.year}년 {props.month}월 {props.date}일
        </div>
        <div className={styles.planned}>
            일정들 = {props.plans.map((x)=>(<div>{x.plan}</div>))}
        </div>
        <div className={styles.input_container} >
            <input className={styles.input} ref={inputRef} type="text" />
        </div>
        <button className={styles.button} onClick={onEdit}>edit</button>
    </div>    
        
    )};

export default AddPlan;