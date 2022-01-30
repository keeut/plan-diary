import React, { useContext, useState } from 'react';
import DayPlanContext from '../../context/DayPlanContext';
import EditCard from './editCard';
import FormerPlans from './formerPlans';
import PlanCard from './planCard';
import styles from './planPreview.module.css'

const PlanPreview = () => {
    
    const {todayPlan,onEditPlan,todayMonth,todayDate} = useContext(DayPlanContext)

    const [flag,setFlag] = useState(undefined,[])

    const onClick =(cardName) =>{setFlag(cardName);
    }
    const onEdit =(value,cardName) =>{
        onEditPlan(value,cardName)
        setFlag(undefined)
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>오늘의 플랜</div>
                <div className={styles.date}>
                    <div>{todayMonth}월</div>
                    <div>{todayDate}일</div>
                </div>
                <div className={styles.month_plan}>월간일정</div>
            </div>
            <div className={styles.plan_card_container}>
                {flag &&
                    <EditCard onEdit={onEdit} cardName={flag} content={todayPlan}/>}
                <PlanCard cardName='plan' title='PLAN' onClick={onClick} contents ={todayPlan.plan}/>
                <PlanCard cardName='complete' title='COMPLETE' onClick={onClick} contents ={todayPlan.complete}/>
                <PlanCard cardName='todo' title='TO DO' onClick={onClick} contents ={todayPlan.todo}/>
            </div>
            <div>
                <FormerPlans/>
            </div>        
        </div>
    );
};

export default PlanPreview;