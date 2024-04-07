import { HistoryItem } from '@/entities/weather'
import styles from './styles.module.css'
import { useAppDispatch } from '@/app/appStore'
import { setSearch } from '@/entities/search/model/searchSlice'
import { useNavigate } from 'react-router-dom'
import { IHistory } from '@/entities/weather/model/types'

export interface HistoryListProps {
    history: IHistory[]
}

export default function HistoryList({history}:HistoryListProps) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const setLocation = (location:string) => {
        dispatch(setSearch(location))
        navigate('/')
    }

    return (
        <ul>
            {history.length
                ? history.map((el, index) => {
                    return (
                        <HistoryItem data={el} key={index} setLocation={setLocation}/>
                    )
                })
                : <div className={styles.list_empty}>Список пуст</div>

            }
        </ul>
    )
}
