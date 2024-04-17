import { InputProps } from './input.module'
import styles from './styles.module.css'

export default function Input({handleChange, value, placeholder}: InputProps) {
  return (
    <input 
      onChange={(event) => handleChange(event)}
      type="text" className={styles.input} 
      placeholder={placeholder}
      value={value}
    />
  )
}
