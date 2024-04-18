import { ContentWeather } from '@/widgets/contentWeather'
import { FavoriteCitiesList } from '@/widgets/FavoriteCitiesList'
import { SearchWeather } from '@/widgets/searchWeather'

export default function MainPage() {
  return (
    <main>
      <SearchWeather/>
      <ContentWeather/>
      <FavoriteCitiesList/>
    </main>
  )
}
