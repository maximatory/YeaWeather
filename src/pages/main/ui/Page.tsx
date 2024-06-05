import { FavoriteCitiesList } from '@/widgets/FavoriteCities'
import { ContentWeather } from '@/widgets/contentWeather'


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
