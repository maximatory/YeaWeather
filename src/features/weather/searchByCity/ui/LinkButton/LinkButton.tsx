import Button from '@/shared/ui/button/Button'
import { Link } from 'react-router-dom'

export interface LinkButtonProps {
    link?: string
    label: string
}

export default function LinkButton({ link, label }: LinkButtonProps) {
    return (
        <Link to={link ? `/${link}` : '/'}>
            <Button label={label} />
        </Link>
    )
}
