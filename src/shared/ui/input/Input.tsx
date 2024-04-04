import React from 'react'
import { InputProps } from './input.module'
import styles from './styles.module.css'

export default function Input({handleChange, value}: InputProps) {
  return (
    <input 
      onChange={(e)=> handleChange(e.target.value)}
      type="text" className={styles.input} 
      placeholder='Select your location' 
      value={value}
    />
  )
}
