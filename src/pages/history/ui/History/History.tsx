import { useAppSelector } from '@/app/appStore'
import { FilterHistory } from '@/widgets/filterHistory'
import HistoryList from '@/widgets/historyList/ui/HistoryList/HistoryList'
import { ChangeEvent, useState } from 'react'
import styles from './styles.module.css'

export default function History() {
    const { history } = useAppSelector(state => state.history)
    const [filteredHistory, setFilteredHistory] = useState(history)

    const filterHistory = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) return setFilteredHistory(history)
        const filteredItems = history.filter((historyItem) => historyItem.location.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilteredHistory(filteredItems)
    }

    return (
        <section>
            <FilterHistory handleFilter={filterHistory}/>
            <div className={styles.history_content}>
                <h3 className={styles.history_title}>История поиска</h3>
                <HistoryList history={filteredHistory} />
            </div>
        </section>
    )
}
