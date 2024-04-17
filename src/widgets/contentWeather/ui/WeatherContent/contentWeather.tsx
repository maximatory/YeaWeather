import { checkDayOrNight } from '@/shared/lib/helpers/checkDayOrNight';
import { getWeatherConditionByCode } from '@/shared/lib/helpers/getWeatherConditionByCode';
import { WeatherCard, WeatherDetails } from '@/entities/weather';
import { useParams } from 'react-router-dom';
import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi';

import styles from './styles.module.css'
import { getLocalTime } from '@/shared/lib/helpers/getLocalTime';
import { weatherIconsType } from '@/shared/assets';

export default function ContentWeather() {
  const {location} = useParams()
  const { data, isError } = useGetWeatherQuery(location || "Москва")
  const localTime = getLocalTime(data?.timezone)
  const timeOfDay = checkDayOrNight(localTime)
  const weatherCondition = getWeatherConditionByCode(data?.weather[0].id)
  const imageName:weatherIconsType = `${weatherCondition}_${timeOfDay}`
  
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
