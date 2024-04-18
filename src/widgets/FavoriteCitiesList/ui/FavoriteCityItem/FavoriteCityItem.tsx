import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi'
import styles from './styles.module.css'

export interface FavoriteCityItemProps {
  city: string
}

export default function FavoriteCityItem({ city }: FavoriteCityItemProps) {
  const { data } = useGetWeatherQuery(city)
  const pathToIcon = `https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`

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
