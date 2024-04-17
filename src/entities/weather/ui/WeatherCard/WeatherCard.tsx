import styles from './styles.module.css'
import { WeatherApiResponse } from '../../model/types'
import { weatherBackgroundImages, weatherIcons, weatherIconsType } from '@/shared/assets'

export interface WeatherCardProps {
    data: WeatherApiResponse
    localTime: string
    imageName: weatherIconsType
}

export default function WeatherCard(props: WeatherCardProps) {
    const { data, localTime, imageName } = props
    const icon = weatherIcons[imageName]
    const background = weatherBackgroundImages[`${imageName}_bg`]

    return (
        <div className={styles.wrapper} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.header}>
                <span>{data.name}</span>
                <span>{localTime}</span>
            </div>
            <div className={styles.footer}>
                <span className={styles.temp}>{Math.floor(data.main.temp) + "°C"}</span>
                <span>{data.weather[0].description}</span>
            </div>
            <img className={styles.footer_img} src={icon} alt="weather" />
        </div>
    )
}
