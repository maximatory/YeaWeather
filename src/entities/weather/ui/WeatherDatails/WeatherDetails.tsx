import { detailIcons } from '@/shared/assets'
import { WeatherApiResponse } from '../../model/types'
import styles from './styles.module.css'


interface WetaherDetailsProps {
    data: WeatherApiResponse
  }

export default function WeatherDetails({data}:WetaherDetailsProps) {
  return (
    <div className={styles.details}>
        <h3 className={styles.title}>Подробности</h3>

        <div className={styles.details_list}>
            <div className={styles.details_item}>
                <div className={styles.description}>
                    <img className={styles.icon} src={detailIcons.feels_like} alt="feels like icon" />
                    <span className={styles.description_item}>Ощущается как</span>
                </div>
                <span className={styles.value}>{Math.floor(data.main.feels_like)} °C</span>
            </div>
        </div>

        <div className={styles.details_list}>
            <div className={styles.details_item}>
                <div className={styles.description}>
                    <img className={styles.icon} src={detailIcons.pressure} alt="pressure icon" />
                    <span className={styles.description_item}>Атмосферное давление</span>
                </div>
                <span className={styles.value}>{Math.floor(data.main.pressure)} гПа</span>
            </div>
        </div>

        <div className={styles.details_list}>
            <div className={styles.details_item}>
                <div className={styles.description}>
                    <img className={styles.icon} src={detailIcons.wind} alt="wind icon" />
                    <span className={styles.description_item}>Скорость ветра</span>
                </div>
                <span className={styles.value}>{Math.floor(data.wind.speed)} км/ч</span>
            </div>
        </div>

        <div className={styles.details_list}>
            <div className={styles.details_item}>
                <div className={styles.description}>
                    <img className={styles.icon} src={detailIcons.humidity} alt="humidity icon" />
                    <span className={styles.description_item}>Влажность воздуха</span>
                </div>
                <span className={styles.value}>{Math.floor(data.main.humidity)} %</span>
            </div>
        </div>

        <div className={styles.details_list}>
            <div className={styles.details_item}>
                <div className={styles.description}>
                    <img className={styles.icon} src={detailIcons.clouds} alt="clouds icon" />
                    <span className={styles.description_item}>Облачность</span>
                </div>
                <span className={styles.value}>{Math.floor(data.clouds.all)} %</span>
            </div>
        </div>

    </div>
  )
}
