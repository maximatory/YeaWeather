import { WeatherApiResponse } from '../../model/types'
import styles from './styles.module.css';

export interface FavoriteCityProps {
  city: string
  data?: WeatherApiResponse
  isError?: boolean
}

export default function FavoriteCity({city, data, isError}: FavoriteCityProps) {
  const pathToIcon = `https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`

  if(isError){
    return <div className={styles.wrapper}>Ошибка поиска</div>
  } else {
    return (
      <div className={styles.wrapper}>
          <div className={styles.left_wrapper}>
            <img className={styles.icon} src={pathToIcon} alt="weather-icon" />
            <span>{city}</span>
          </div>
          <span className={styles.value}>{data && Math.floor(data.main.temp) + " °C"}</span>
      </div>
    )
  }
}
