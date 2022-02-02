import React, { useRef ,useCallback, useState } from 'react';
import styles from './editCard.module.css'

const EditCard = (props) => {

    const inputRef = useRef();
    
    const [text,setText] =useState(props.content[props.cardName])
    
    const onEdit = useCallback(() => {
    props.onEdit(inputRef.current.value,props.cardName)
    },[])
    const onChange= useCallback((e) =>{
        setText(e.target.value)
    },[])
    return(
    <div className={styles.container}>
        <div className={styles.header}>
            {props.cardName}
        </div>
        <div className={styles.explanation}>수정하기</div>
        <div className={styles.input_container} >
            <textarea className={styles.input} cols="5" rows="5" ref={inputRef} onChange={onChange} value={text} ></textarea>
        </div>
        <button className={styles.button} onClick={onEdit}>edit</button>
    </div>    
    );
}
export default EditCard;