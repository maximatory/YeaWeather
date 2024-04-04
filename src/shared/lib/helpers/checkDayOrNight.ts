export const checkDayOrNight = (time:string) => {
    const hour = Number(time.slice(0,2))
    if(hour > 6 && hour < 18) {
        return 'day'
    } else {
        return 'night'
    }
}