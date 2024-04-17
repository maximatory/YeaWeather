import { Filter } from '@/features/weather/filterHistoredCities'
import { LinkButton } from '@/features/weather/searchByCity'
import { ChangeEventHandler } from 'react'
import styles from './styles.module.css'

export interface FilterHistoryProps{
    handleFilter: ChangeEventHandler<HTMLInputElement>
}

export default function FilterHistory({handleFilter}:FilterHistoryProps) {

    return (
        <div className={styles.filter_wrapper}>
            <Filter handleFilter={handleFilter} />
            <LinkButton label='На главную' />
        </div>
    )
}
