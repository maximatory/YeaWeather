import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi'
import { Search } from '@/features/search'
import WeatherDetails from '../WeatherDatails/WeatherDetails';
import WetaherCard from '../WeatherCard/WetaherCard';
import Button from '@/shared/ui/button/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useHistory from '@/shared/lib/hooks/useHistory';

import styles from './styles.module.css'

export default function SearchWeather() {
    const {location} = useParams()
    const navigate = useNavigate()
    
    const handleSearch = (value: string) => navigate(`/${value}`)
    const { data, isError } = useGetWeatherQuery(location || "Москва")
    useHistory({ data })

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
