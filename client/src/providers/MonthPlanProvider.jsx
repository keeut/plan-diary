import React, {memo, useCallback, useState } from 'react';
import MonthPlanContext from '../context/MonthPlanContext';
import {getLastMonthDates,getThisMonthDates,getNextMonthDates} from '../service/calender';

const MonthPlanProvider = ({children}) => {

    const [daysPlan,setdays] = useState([
        {month:1, date:23, plan:'놀기'},
        {month:1, date:5, plan:'구아'},
        {month:1, date:12, plan:'라기'},    
    ],[]);
    
    const editPlan = useCallback( (date,value)=>{
        const updated = [...daysPlan]
        updated.push({month:1,date:date,plan:value})
        setdays(updated)
    },[daysPlan])

    return (
        <div>
            {console.log('rerender Monthplanprovider')}
            <MonthPlanContext.Provider
                value ={{daysPlan,getLastMonthDates,getThisMonthDates,getNextMonthDates,editPlan}}>

                {children}

            </MonthPlanContext.Provider>
        </div>
    );
};

export default MonthPlanProvider;