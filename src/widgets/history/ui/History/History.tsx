import Filter from '@/features/filter/ui/Filter'
import Button from '@/shared/ui/button/Button'
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/app/appStore'
import HistoryList from '../HistoryList/HistoryList'

import styles from './styles.module.css'

export default function History() {
    const {history} = useAppSelector(state=> state.history)
    console.log(history)
    return (
        <div>
            <div className={styles.filter_wrapper}>
                <Filter />
                <Link to={"/"}>
                    <Button label='На главную' />
                </Link>
            </div>
            <div className={styles.history_content}>
                <h3 className={styles.history_title}>История поиска</h3>
                <HistoryList history={history}/>
            </div>
        </div>
    )
}
