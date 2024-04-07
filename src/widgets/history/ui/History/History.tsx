import { useState } from 'react'
import { useAppSelector } from '@/app/appStore'
import HistoryList from '../HistoryList/HistoryList'
import Filter from '@/features/filter/ui/Filter'
import LinkButton from '@/features/search/ui/LinkButton/LinkButton'

import styles from './styles.module.css'

export default function History() {
    const { history } = useAppSelector(state => state.history)
    const [filteredHistory, setFilteredHistory] = useState(history)

    const filterHistory = (inputValue:string) => {
        if(!inputValue) return setFilteredHistory(history)
        const filteredItems = history.filter((historyItem)=> historyItem.location.toLowerCase().includes(inputValue.toLowerCase()))
        setFilteredHistory(filteredItems)
    }
    
    return (
        <div>
            <div className={styles.filter_wrapper}>
                <Filter handleFilter={filterHistory} />
                <LinkButton label='На главную'/>
            </div>
            <div className={styles.history_content}>
                <h3 className={styles.history_title}>История поиска</h3>
                <HistoryList history={filteredHistory} />
            </div>
        </div>
    )
}
