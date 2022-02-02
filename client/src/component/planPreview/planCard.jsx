import React, { memo, useCallback } from 'react';
import styles from './planCard.module.css'

const PlanCard = memo(({title,contents,onClick,cardName}) => {
    const onClickCard = useCallback(()=>{
        onClick(cardName)
    },[]);
    return (
        <div className={styles.conatiner}>
            <div className={styles.title}>{title}</div>
            <button className={styles.button} onClick={onClickCard}>
                <div className={styles.content}>{contents}</div>
            </button>
        </div>
    );
});

export default PlanCard;