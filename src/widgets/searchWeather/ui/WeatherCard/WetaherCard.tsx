import { WeatherApiResponse } from '@/entities/weather/model/types';
import styles from './styles.module.css'
import useLocalTime from '@/shared/lib/hooks/useLocalTime';
import { checkDayOrNight } from '@/shared/lib/helpers/checkDayOrNight';
import { getWeatherConditionByCode } from '@/shared/lib/helpers/getWeatherConditionByCode';

interface WetaherCardProps {
  data: WeatherApiResponse
}

export default function WetaherCard({data}: WetaherCardProps) {
  const localTime = useLocalTime(data.timezone)
  const timeOfDay = checkDayOrNight(localTime)
  const weatherCondition = getWeatherConditionByCode(data.weather[0].id)
  const imageName = `${weatherCondition}_${timeOfDay}`
  

  return (
    <div className={styles.wrapper} style={{backgroundImage: `url("src/shared/assets/images/${imageName}.png")`}}>
        <div className={styles.header}>
          <span>{data.name}</span>
          <span>{localTime}</span>
        </div>
        <div className={styles.footer}>
            <span className={styles.temp}>{Math.floor(data.main.temp) + "°C"}</span>
            <span>{data.weather[0].description}</span>
        </div>
        <img className={styles.footer_img} src={`src/shared/assets/icons/wheaterIcons/${imageName}.svg`} alt="weather" />
    </div>
  )
}
