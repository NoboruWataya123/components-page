import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames';


export default function Button({size = 's', children, color='default', href, className, ...props}: ButtonProps): JSX.Element {
    return (
        <button
        className={cn(styles.tag, className, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.danger]: color == 'danger',
            [styles.grey]: color == 'grey',
            [styles.green]: color == 'green',
            [styles.ghost]: color == 'ghost',
            [styles.primary]: color == 'primary',
            [styles.default]: color == 'default',
        })}
        {...props}
        > {
            href
            ? <a href={href}>{children}</a>
            :<>{children}</>
        }
        </button>
    )
}
