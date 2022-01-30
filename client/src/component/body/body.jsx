import React from 'react';
import PlanPreview from '../planPreview/planPreview';
import Schedule from '../schedule/schedule';
import styles from './body.module.css';
const Body = () => {
    return (
        <div className={styles.body}>
            <PlanPreview/>
            <Schedule/>
        </div>
    );
};

export default Body;