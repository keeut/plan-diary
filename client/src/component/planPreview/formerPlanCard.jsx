import React from 'react';
import styles from './formerPlanCard.module.css'
const FormerPlanCard = (props) => {
    return (
        <button className={styles.container}>
            <div className={styles.date}>{props.date.slice(4,6)}월 &nbsp;{props.date.slice(6,8)}일</div>
            <div className={styles.plan}>{props.plan}</div>
            <div className={styles.complete}>{props.complete}</div>
            <div className={styles.todo}>{props.todo}</div>
        </button>
    );
};

export default FormerPlanCard;