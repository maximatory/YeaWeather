import styles from './index.module.css'

interface ButtonProps {
  label: string
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className={styles.button}>{label}</button>
  )
}
