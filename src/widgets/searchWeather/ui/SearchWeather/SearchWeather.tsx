import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi'

import { Search } from '@/features/search'
import WeatherDetails from '../WeatherDatails/WeatherDetails';
import WetaherCard from '../WeatherCard/WetaherCard';
import Button from '@/shared/ui/button/Button';
import { Link } from 'react-router-dom';

import styles from './styles.module.css'
import useHistory from '@/shared/lib/hooks/useHistory';
import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { setSearch } from '@/entities/search/model/searchSlice';



export default function SearchWeather() {
    const { search } = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()
    const handleSearch = (value: string) => dispatch(setSearch(value))
    const { data, isError } = useGetWeatherQuery(search)
    useHistory({ data, search })

    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <Search handleSearch={handleSearch} />
                <Link to={"/history"}>
                    <Button label='История поиска' />
                </Link>
            </div>
            {
                isError && 
                <div>Пожалуйста введите корректный город</div>
            }
            {data &&
                <div className={styles.weather_container}>
                    <WetaherCard data={data} />
                    <WeatherDetails data={data} />
                </div>
            }
        </div>
    )
}
