import Input from '@/shared/ui/input/Input'
import styles from "./styles.module.css"
import { ChangeEventHandler } from 'react'

interface FilterProps {
    handleFilter: ChangeEventHandler<HTMLInputElement>
}

export default function Filter({ handleFilter }: FilterProps) {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className={styles.filter_wrapper} onSubmit={(e) => handleSubmit(e)}>
            <Input handleChange={handleFilter} placeholder='Поиск по истории' />
        </form>
    )
}
