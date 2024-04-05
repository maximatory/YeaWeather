export type TimezoneType = number

export const getLocalTime = (timezone:number | TimezoneType) => {
    if(timezone){
        const date = new Date()
        const localTime = date.getTime()
        const localOffset = date.getTimezoneOffset() * 60000
        
        const utc = localTime + localOffset
        const city = timezone > 0 ? utc + (1000 * + timezone) : utc + (1000 * - Math.abs(timezone))
        const result = new Date(city)
        return result.toLocaleTimeString().slice(0, -3)
    }
    return
}