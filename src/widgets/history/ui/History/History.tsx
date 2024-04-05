import { useEffect, useState } from 'react'
import { useAppSelector } from '@/app/appStore'
import HistoryList from '../HistoryList/HistoryList'
import Filter from '@/features/filter/ui/Filter'
import Button from '@/shared/ui/button/Button'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

export default function History() {
    const { history } = useAppSelector(state => state.history)
    const [search, setSearch] = useState('')
    const [filteredHistory, setFilteredHistory] = useState(history)
    
    useEffect(()=>{
        if (!search) setFilteredHistory(history)
        const filteredItems = history.filter(({location})=> location.toLowerCase().includes(search.toLowerCase()))
        setFilteredHistory(filteredItems)
    }, [search])

    return (
        <div>
            <div className={styles.filter_wrapper}>
                <Filter handleFilter={(val)=> setSearch(val)} />
                <Link to={"/"}>
                    <Button label='На главную' />
                </Link>
            </div>
            <div className={styles.history_content}>
                <h3 className={styles.history_title}>История поиска</h3>
                <HistoryList history={filteredHistory} />
            </div>
        </div>
    )
}
