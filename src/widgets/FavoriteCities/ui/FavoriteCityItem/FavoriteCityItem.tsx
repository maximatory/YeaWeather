import { FavoriteCity } from '@/entities/weather'
import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi'
import styles from './styles.module.css'

export interface FavoriteCityItemProps {
    city: string
}

export default function FavoriteCityItem({city}:FavoriteCityItemProps) {
    const {data, isError} = useGetWeatherQuery(city)
  return (
    <div className={styles.wrapper}>
        <FavoriteCity city={city} data={data} isError={isError}/>
    </div>
  )
}
