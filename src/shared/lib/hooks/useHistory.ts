import { useAppDispatch } from "@/app/appStore"
import { setHistory } from "@/entities/weather/model/historySlice"
import { WeatherApiResponse } from "@/entities/weather/model/types"
import { useEffect } from "react"
import getCurrentDate from "../helpers/getCurrentDate"

export interface UseHistoryProps {
    data: WeatherApiResponse | undefined
}

export default function useHistory({ data }:UseHistoryProps) {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if(data !== undefined){
            const date = getCurrentDate()
            const currentDate = `${date.currentDate} в ${date.currentTime}`
            const historyItem = {
                location: data.name,
                date: currentDate,
                weatherConditions: `${Math.floor(data.main.temp)} °C`,
                iconPath: `https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`
            }
            dispatch(setHistory(historyItem))
        }
    }, [data, dispatch])


    return
}
