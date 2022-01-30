export function getLastMonthDates(year,month) {
    
    const lastMonthLastDay = new Date(year,month-1,0).getDay();
    const lastMonthLastDate = new Date(year,month-1,0).getDate();
    let dates = []
    for (let i = lastMonthLastDay; i>-1 ; i--){
        dates.push(lastMonthLastDate-i)
    }
    return dates
};

export function getThisMonthDates(year,month){
    
    const thisMonthLastDate = new Date(year,month,0).getDate();
    let dates = []
    for (let i = 1; i<thisMonthLastDate+1; i++){
        dates.push(i)
    } //이번달
    return dates
};
    
export function getNextMonthDates(year,month) {
    
    const thisMonthLastDay = new Date(year,month,0).getDay();
    let dates = []
    for (let i = 1; i<7-thisMonthLastDay ; i++){
        dates.push(i)
    }
    return dates
};