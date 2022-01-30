import React from 'react';
import styles from './rightSideBar.module.css'

const RightSideBar = (props) => (
        <div className={styles.container}>
            <div className={styles.title}>메모</div>
            <div className={styles.memo_container}></div>
        </div>
    );

export default RightSideBar;