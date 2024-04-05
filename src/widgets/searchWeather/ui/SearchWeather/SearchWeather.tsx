import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi'
import { useState } from 'react'

import { Search } from '@/features/search'
import WeatherDetails from '../WeatherDatails/WeatherDetails';
import WetaherCard from '../WeatherCard/WetaherCard';
import Button from '@/shared/ui/button/Button';
import { Link } from 'react-router-dom';

import styles from './styles.module.css'
import useHistory from '@/shared/lib/hooks/useHistory';



export default function SearchWeather() {
    const [search, setSearch] = useState('Москва')
    const { data } = useGetWeatherQuery(search)
    useHistory({data, search})
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <Search setSearch={setSearch}/>
                <Link to={"/history"}>
                    <Button label='История поиска'/>
                </Link>
            </div>
            {data && 
                <div className={styles.weather_container}>
                    <WetaherCard data={data}/>
                    <WeatherDetails data={data}/>
                </div>
            }
        </div>
    )
}
