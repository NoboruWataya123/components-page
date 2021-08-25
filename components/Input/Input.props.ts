import {DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    color?: 'danger' | 'primary' | 'grey' | 'green' | 'ghost' | 'default';
    icon?: string;
    name?: string;
}