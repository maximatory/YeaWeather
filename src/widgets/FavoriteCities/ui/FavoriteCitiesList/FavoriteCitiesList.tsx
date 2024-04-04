import React from 'react'
import { favoriteCities } from '@/shared/constants/favoriteCities'
import FavoriteCityItem from '../FavoriteCityItem/FavoriteCityItem'
import styles from './styles.module.css'

export default function FavoriteCitiesList() {
  return (
    <div className={styles.wrapper}>
        <h3 className={styles.title}>Прогноз по городам России</h3>
        <ul className={styles.list}>
            {favoriteCities.map(city=> <FavoriteCityItem key={city} city={city}/>)}
        </ul>
    </div>
  )
}
