import { FavoriteCities } from '@/widgets'
import { SearchWeather } from '@/widgets/searchWeather'

export default function MainPage() {
  return (
    <div>
      <SearchWeather/>
      <FavoriteCities/>
    </div>
  )
}
