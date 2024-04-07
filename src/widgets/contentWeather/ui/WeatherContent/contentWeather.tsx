import useLocalTime from '@/shared/lib/hooks/useLocalTime';
import { checkDayOrNight } from '@/shared/lib/helpers/checkDayOrNight';
import { getWeatherConditionByCode } from '@/shared/lib/helpers/getWeatherConditionByCode';
import { WeatherCard, WeatherDetails } from '@/entities/weather';
import { useParams } from 'react-router-dom';
import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi';

import styles from './styles.module.css'

export default function ContentWeather() {
  const {location} = useParams()
  const { data, isError } = useGetWeatherQuery(location || "Москва")
  const localTime = useLocalTime(data?.timezone)
  const timeOfDay = checkDayOrNight(localTime)
  const weatherCondition = getWeatherConditionByCode(data?.weather[0].id)
  const imageName = `${weatherCondition}_${timeOfDay}`
  
  if(isError){
    return <div>Пожалуйста введите корректный город</div>
  }

  if(data){
    return (
      <div className={styles.wrapper}>
        <WeatherCard data={data} localTime={localTime} imageName={imageName}/>
        <WeatherDetails data={data}/>
      </div>
    )
  }
}
