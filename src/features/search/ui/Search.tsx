import React, { useState } from 'react'
import Input from '@/shared/ui/input/Input'
import styles from './styles.module.css'

interface SearchProps {
  setSearch : (search: string) => void
}

export default function Search({setSearch}:SearchProps) {
const [inputValue, setInputValue] = useState('')
const handleChange = (val:string)=> setInputValue(val)

const fetchWeather = (e) => {
    e.preventDefault()
    setSearch(inputValue)
    setInputValue('')
}

  return (
    <form onSubmit={fetchWeather} className={styles.search_form}>
        <Input handleChange={handleChange} value={inputValue} placeholder='Ведите название города'/>
    </form>
  )
}
