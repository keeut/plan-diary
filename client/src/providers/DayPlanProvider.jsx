import React, { Fragment, memo, useCallback, useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import DayPlanContext from '../context/DayPlanContext';

const DayPlanProvider = ({children,planservice}) => {
    
    const today = new Date();
    let [todayMonth,todayDate,todayDay] = [today.getMonth() +1,today.getDate(),today.getDay()]
    //내가 db에 만든 날짜형식 맞춰주기 20220104
    if (todayMonth < 10){ todayMonth = `0${todayMonth}`}
    if (todayDate < 10){ todayDate = `0${todayDate}`}
    const date = `2022${todayMonth}${todayDate}`  

    const {user} = useContext(AuthContext);

    useEffect(()=>{
        planservice.findPlanByUserId(user).then(plans=>{
            plans.reverse();
        //오늘 이전의 플랜들 찾기
            setFormerPlans(plans.slice(1,4))            
            
        //오늘의 플랜찾기
            let plan = []
            if (plans[0].date !== date){      //새로생긴 -1번인덱스를 사용할 수 있게해주는 .at()구문  /// reverse필요해서 이건 안쓰게됨
                planservice.createDayPlan(date,user)
            }             //오늘의 플랜 쓴거 없으면 만들어줘야 update하니까 이구문써줬음
            else{
                plan = plans[0]
            }

            setTodayPlan({plan:plan.plan,
                complete:plan.complete,
                todo:plan.todo})
             });
            }
        ,[planservice])
            

    const [formerPlans, setFormerPlans] = useState([])
    const [todayPlan,setTodayPlan] = useState([]);

    
    const onEditPlan =  useCallback((value,cardName) => {
        console.log('rerender function onEditplan')
        const updated = {...todayPlan};
        updated[cardName] = value;
        setTodayPlan(updated)
        switch (cardName) {
            case 'plan':
                planservice.editPlan(date,value)
                break;
            case 'complete':
                planservice.editComplete(date,value)
                break;    
            case 'todo':
                planservice.editTodo(date,value)
                break;
        }
    },[todayPlan]);

    return (
        <Fragment>{console.log('rerender dayPlanprovider')}
        <DayPlanContext.Provider value= {{todayPlan,onEditPlan,todayMonth,todayDate,formerPlans}}>
            {children}
        </DayPlanContext.Provider></Fragment>   
    );
};

export default DayPlanProvider;