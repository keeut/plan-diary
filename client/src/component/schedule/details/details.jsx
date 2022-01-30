import React from 'react';
import styles from './details.module.css'
const Details = ({schedule,handleDelete}) => {
    let today = new Date();

    const getDday = (day) => (
        parseInt(day[4]+day[5]- today.getMonth()
        + parseInt(day[6]+day[7]) - today.getDate() 
    ));
    
    const onDelete = () =>{handleDelete(schedule)
        }

    return (
        <div className={styles.container}>
            <div className={styles.Dday}>
                D - {getDday(schedule.time)}
            </div>
            <div className={styles.title}>
                {schedule.title}
            </div>
            <button onClick={onDelete} className={styles.delete}>
                <i class="fas fa-minus-circle"></i>
            </button>
        </div>
    );
};

export default Details;

