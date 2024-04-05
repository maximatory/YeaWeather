import React from 'react'
import { IHistory } from '../../model/types'
import styles from './styles.module.css'

export interface HistoryItemProps {
    data: IHistory
}

export default function HistoryItem({ data }: HistoryItemProps) {
    return (
        <li className={styles.wrapper}>
            <div className={styles.content}>
                <img className={styles.icon} src={data.iconPath} alt="weather-icon" />
                <span>{data.location}</span>
                <span>{data.weatherConditions}</span>
            </div>
            <span className={styles.value}>{data.date}</span>
        </li>
    )
}
