import { IHistory } from '../../model/types'
import styles from './styles.module.css'

export interface HistoryItemProps {
    data: IHistory,
    setLocation: (value: string)=> void
}

export default function HistoryItem({ data, setLocation }: HistoryItemProps) {
    return (
        <li className={styles.wrapper} onClick={()=> setLocation(data.location)}>
            <div className={styles.content}>
                <img className={styles.icon} src={data.iconPath} alt="weather-icon" />
                <span>{data.location}</span>
                <span>{data.weatherConditions}</span>
            </div>
            <span className={styles.value}>{data.date}</span>
        </li>
    )
}
