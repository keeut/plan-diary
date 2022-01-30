import React, { useRef } from 'react';
import styles from './addSchedule.module.css'

const AddSchedule = (props) =>{
    const timeRef = useRef();
    const titleRef = useRef();
    const contentRef = useRef();

    const onAdd = () => { 
    props.onAdd(timeRef.current.value,titleRef.current.value,contentRef.current.value)
    };

    return(
        <div className={styles.addform}>
            <input type="text" ref={timeRef} className={styles.time} placeholder='날짜' />
            <input type="text" ref={titleRef} className={styles.title} placeholder='제목'/>
            <textarea name="content"className={styles.content}  ref={contentRef} id="" cols="30" rows="10" placeholder='내용'></textarea>
            <button className={styles.submit} onClick={onAdd}>추가</button>
        </div>
    )};

export default AddSchedule;