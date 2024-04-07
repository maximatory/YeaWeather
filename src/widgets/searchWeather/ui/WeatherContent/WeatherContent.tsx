import { WeatherApiResponse } from '@/entities/weather/model/types';
import useLocalTime from '@/shared/lib/hooks/useLocalTime';
import { checkDayOrNight } from '@/shared/lib/helpers/checkDayOrNight';
import { getWeatherConditionByCode } from '@/shared/lib/helpers/getWeatherConditionByCode';
import { WeatherCard, WeatherDetails } from '@/entities/weather';

import styles from './styles.module.css'

interface WeatherContentProps {
  data: WeatherApiResponse
}

export default function WeatherContent({data}: WeatherContentProps) {
  const localTime = useLocalTime(data.timezone)
  const timeOfDay = checkDayOrNight(localTime)
  const weatherCondition = getWeatherConditionByCode(data.weather[0].id)
  const imageName = `${weatherCondition}_${timeOfDay}`
  

  return (
    <div className={styles.wrapper}>
      <WeatherCard data={data} localTime={localTime} imageName={imageName}/>
      <WeatherDetails data={data}/>
    </div>
  )
}
