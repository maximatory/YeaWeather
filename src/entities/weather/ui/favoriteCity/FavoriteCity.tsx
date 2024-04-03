import { WeatherApiResponse } from '../../model/types'
import styles from './styles.module.css';

export interface FavoriteCityProps {
  city: string
  data?: WeatherApiResponse
}

export default function FavoriteCity({city, data}: FavoriteCityProps) {
  return (
    <div className={styles.wrapper}>
        <span>{city}</span>
        <span>{data && Math.floor(data.main.temp) + " °C"}</span>
    </div>
  )
}
