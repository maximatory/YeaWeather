import React, { ChangeEvent, useState } from 'react'
import Input from '@/shared/ui/input/Input'
import styles from './styles.module.css'

interface SearchProps {
  handleSearch : (search: string) => void
}

export default function Search({handleSearch}:SearchProps) {
const [inputValue, setInputValue] = useState('')
const handleChange = (event:ChangeEvent<HTMLInputElement>)=> setInputValue(event.target.value)

const fetchWeather = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch(inputValue)
    setInputValue('')
}

  return (
    <form onSubmit={fetchWeather} className={styles.search_form}>
        <Input handleChange={handleChange} value={inputValue} placeholder='Ведите название города'/>
    </form>
  )
}
