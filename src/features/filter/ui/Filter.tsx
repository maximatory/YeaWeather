import Input from '@/shared/ui/input/Input'
import React, { useState } from 'react'
import styles from "./styles.module.css"

export default function Filter() {
    const [value, setValue] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={styles.filter_wrapper} onSubmit={(e)=> handleSubmit(e)}>
            <Input handleChange={(val) => setValue(val)} value={value} placeholder='Поиск по истории' />
        </form>
    )
}
