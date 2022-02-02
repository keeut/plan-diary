import React, { memo, useContext } from 'react';
import DayPlanContext from '../../context/DayPlanContext';
import FormerPlanCard from './formerPlanCard';
import styles from './formerPlans.module.css'
const FormerPlans = memo(() => {

    const {formerPlans} = useContext(DayPlanContext)

    return (
        <div>
            <div className={styles.title}> 이전 플랜들</div>
            <div className={styles.container}>
            <div className={styles.tag}>
                <div>날짜</div>
                <div>plan</div>
                <div>complete</div>
                <div>todo</div>

            </div>
            {formerPlans.map(plan => (
                <FormerPlanCard date = {plan.date} 
                    plan = {plan.plan}
                    complete = {plan.complete}
                    todo = {plan.todo}/>
            ))}
            </div>
        </div>
    );
});

export default FormerPlans;