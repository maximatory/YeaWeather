export default function getCurrentDate(){
    const date = new Date();
    date.setMonth(0, 1)
    const currentTime = date.toLocaleTimeString()
    const currentDate = date.toLocaleDateString()
    
    return {
        currentTime: currentTime.slice(0, -3),
        currentDate
    }
}

