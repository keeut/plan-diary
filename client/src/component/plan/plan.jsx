import React, { useContext, useEffect, useState } from 'react';
import MonthPlanContext from '../../context/MonthPlanContext';
import AddPlan from './addPlan';
import Dates from './dates';
import Header from './header';
import NonDates from './nonDates';
import styles from './plan.module.css'

const Plan = () => {
    
    useEffect(()=>{document.addEventListener("drag", function(event) {
    }, false);
    
    document.addEventListener("dragstart", function(event) {
    let dragged = event.target;
    event.target.style.opacity = .5;
  }, false);
  
    document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "";
  }, false);

    document.addEventListener("dragover", function(event) {
    event.preventDefault();
  }, false);
  
    document.addEventListener("drop", function(event) {
    event.preventDefault();
    console.log(event.target)})

    },[]);

    const today = new Date();
    const DEFAULT_YEAR = today.getFullYear();
    const DEAFULT_MONTH = today.getMonth()+1;

    const [year,setYear] = useState(DEFAULT_YEAR,[])
    const [month,setMonth] = useState(DEAFULT_MONTH,[])
    const [flag, setFlag] = useState([false,0,false],[]);
    
    const {daysPlan, getLastMonthDates,getThisMonthDates,getNextMonthDates,editPlan} = useContext(MonthPlanContext);
   
    const lastMonthDates = getLastMonthDates(year,month);
    const thisMonthDates = getThisMonthDates(year,month);
    const nextMonthDates = getNextMonthDates(year,month);

   
    const onClick = (date,plans) =>{
        setFlag([true,date,plans])
    }
    const onEdit = (value) =>{
        editPlan(flag[1],value)
        setFlag([false,0,false])
    }

    const goPreivousMonth = () =>{
        const previousMonth = month -1 > 0? month -1 : 12 ;
        setMonth(previousMonth);
        if (previousMonth === 12) {
            const previousYear = year -1;
            setYear(previousYear); 
        };
    }
    const goNextMonth = () =>{
        const nextMonth = month +1 > 12? 1 : month +1 ;
        setMonth(nextMonth);
        if (nextMonth === 1) {
            const nextYear = year +1;
            setYear(nextYear); 
        };
    }

    const findPlan = (date) =>(
        daysPlan.filter((x) => (x.month ===month && x.date === date))
    )

    return (
    <div className={styles.container}>
        <div className={styles.plan}>
            <Header year={year} month={month} goPreivousMonth={goPreivousMonth} goNextMonth={goNextMonth}/>

            <div className={styles.days}>
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thr</div>
                <div>Fri</div>
                <div>Sat</div> 
            </div>
            
            {flag[0] && 
            <AddPlan 
                onEdit={onEdit} 
                date = {flag[1]}
                plans = {flag[2]} 
                year={year} 
                month={month}/>}

            <div className={styles.dates}>

                {lastMonthDates.map((date)=>(
                    <NonDates
                    date={date}
                    />))}
                
                {thisMonthDates.map((date)=>(
                    <Dates 
                    date={date}
                    onClick={onClick}
                    plan = {findPlan(date)}/>))}
                
                {nextMonthDates.map((date)=>(
                    <NonDates
                    date={date}
                    />))}
            
            </div>
            
        </div>
    </div>
    );
};

export default Plan;