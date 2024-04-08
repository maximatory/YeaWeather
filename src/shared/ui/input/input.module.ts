import { ChangeEventHandler } from "react";

export interface InputProps {
    handleChange: ChangeEventHandler<HTMLInputElement>,
    value?: string,
    placeholder: string
}