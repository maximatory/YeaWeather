import Input from '@/shared/ui/input/Input'
import styles from "./styles.module.css"

interface FilterProps {
    handleFilter: (search: string) => void
}

export default function Filter({ handleFilter }: FilterProps) {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={styles.filter_wrapper} onSubmit={(e) => handleSubmit(e)}>
            <Input handleChange={handleFilter} placeholder='Поиск по истории' />
        </form>
    )
}
