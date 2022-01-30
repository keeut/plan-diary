import React, { useState } from 'react';
import AddSchedule from './details/addSchedule';
import Details from './details/details';
import styles from './schedule.module.css'
const Schedule = () => {
    const [schedules, setSchedules] = useState([
        {time: '20220120', title :'공백',content : '일하기'},
        {time: '20220120', title :'글쎄',content : '놀기'},
        {time: '20220120', title :'뭐할까',content : '롤하기'},
        {time: '20220120', title :'몰겠누',content : '우르'},
    ],[]
    )
    const [addSchedule,setAddschedule] = useState(false,[])


    const onClick = () =>{
        setAddschedule(true)
    }

    const onAdd = (time,title,content) => {
        setSchedules((schedules)=>{
             const updated = [...schedules];
             updated.push({time,title,content})
             return updated
         });
        setAddschedule(false);
    }

    const onDelete = (schedule) =>[
        setSchedules((schedules)=>{
            const updated = [...schedules].filter((x)=> x!==schedule)
            return updated
        })
    ]

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>일정</div>
                {addSchedule && <AddSchedule onAdd={onAdd}/>}
                <div>
                <button className={styles.add_button} onClick={onClick}>
                  <i class="fas fa-plus-circle"></i>
                </button>
            </div>
            
            </div>     
            <div className={styles.schedules}>
                {schedules.map((schedule)=>(
                <Details schedule={schedule}
                handleDelete={onDelete}/>))}
            </div>
        </div>
    );
};

export default Schedule;