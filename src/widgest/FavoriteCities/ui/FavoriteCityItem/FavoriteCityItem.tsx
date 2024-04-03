import { FavoriteCity } from '@/entities/weather'
import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi'

export interface FavoriteCityItemProps {
    city: string
}

export default function FavoriteCityItem({city}:FavoriteCityItemProps) {
    const {data} = useGetWeatherQuery(city)
  return (
    <div>
        <FavoriteCity city={city} data={data}/>
    </div>
  )
}
