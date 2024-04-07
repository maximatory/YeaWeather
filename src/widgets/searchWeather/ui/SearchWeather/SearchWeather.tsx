import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi'
import { Search } from '@/features/search'
import { useNavigate, useParams } from 'react-router-dom';
import useHistory from '@/shared/lib/hooks/useHistory';
import WeatherContent from '../WeatherContent/WeatherContent';
import styles from './styles.module.css'
import LinkButton from '@/features/search/ui/LinkButton/LinkButton';

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
                <LinkButton label='История поиска' link='history'/>
            </div>
            {isError && <div>Пожалуйста введите корректный город</div>}
            {data && <WeatherContent data={data}/>}
        </div>
    )
}
