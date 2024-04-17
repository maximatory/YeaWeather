import styles from './styles.module.css'
import { WeatherApiResponse } from '../../model/types'

export interface WeatherCardProps {
    data: WeatherApiResponse
    localTime: string
    imageName: string
}

export default function WeatherCard(props: WeatherCardProps) {
    const { data, localTime, imageName } = props
    return (
        <div className={styles.wrapper} style={{ backgroundImage: `url("src/shared/assets/images/${imageName}.png")` }}>
            <div className={styles.header}>
                <span>{data.name}</span>
                <span>{localTime}</span>
            </div>
            <div className={styles.footer}>
                <span className={styles.temp}>{Math.floor(data.main.temp) + "°C"}</span>
                <span>{data.weather[0].description}</span>
            </div>
            <img className={styles.footer_img} src={`src/shared/assets/icons/wheaterIcons/${imageName}.svg`} alt="weather" />
        </div>
    )
}
