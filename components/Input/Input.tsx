import { InputProps } from "./Input.props";
import styles from './Input.module.css';
import cn from 'classnames';



export default function InputComponent({className, name, color='default', ...props}: InputProps): JSX.Element {
    return (
        <>  
            <input className={cn(styles.tag, className, {
                
                [styles.danger]: color == 'danger',
                [styles.grey]: color == 'grey',
                [styles.green]: color == 'green',
                [styles.ghost]: color == 'ghost',
                [styles.primary]: color == 'primary',
                [styles.default]: color == 'default',
            })}
            {...props}>
            </input>
        </>
    )
}
