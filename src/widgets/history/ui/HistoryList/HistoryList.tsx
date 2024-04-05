import React from 'react'
import { HistoryItem } from '@/entities/history'
import { IHistory } from '@/entities/history/model/types'
import styles from './styles.module.css'

export interface HistoryListProps {
    history: IHistory[]
}

export default function HistoryList({history}:HistoryListProps) {
    return (
        <ul>
            {history.length
                ? history.map((el, index) => {
                    return (
                        <HistoryItem data={el} key={index} />
                    )
                })
                : <div className={styles.list_empty}>Список пуст</div>

            }
        </ul>
    )
}
