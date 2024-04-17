import { ContentWeather } from '@/widgets/contentWeather'
import { FavoriteCities } from '@/widgets/favoriteCities'
import { SearchWeather } from '@/widgets/searchWeather'

export default function MainPage() {
  return (
    <main>
      <SearchWeather/>
      <ContentWeather/>
      <FavoriteCities/>
    </main>
  )
}
