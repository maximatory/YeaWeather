import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi'
import { Search } from '@/features/search'
import { useState } from 'react'

import WeatherDetails from '../WeatherDatails/WeatherDetails';
import styles from './styles.module.css'
import WetaherCard from '../WeatherCard/WetaherCard';

export default function SearchWeather() {
    const [search, setSearch] = useState('Москва')
    const { data } = useGetWeatherQuery(search)
    
    return (
        <div className={styles.wrapper}>
            <Search setSearch={setSearch}/>
            {data && 
                <div className={styles.weather_container}>
                    <WetaherCard data={data}/>
                    <WeatherDetails data={data}/>
                </div>
            }
        </div>
    )
}
