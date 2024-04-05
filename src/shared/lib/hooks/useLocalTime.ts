import React, { useEffect, useState } from 'react'
import { getLocalTime } from '../helpers/getLocalTime'

export default function useLocalTime(timeZone: number | undefined) {
    const [time, setTime] = useState('no data')

    useEffect(()=>{
        if(timeZone !== undefined){
            const localTime = getLocalTime(timeZone)
            setTime(localTime || 'No data')
        }
    }, [timeZone])


    return time
}

