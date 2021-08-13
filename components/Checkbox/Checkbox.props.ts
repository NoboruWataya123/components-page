import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CheckboxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children?: ReactNode;
}