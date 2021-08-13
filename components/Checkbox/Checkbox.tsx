import styles from './Checkbox.module.css'

export default function Checkbox(): JSX.Element {
    return (
        <>
            <input type="checkbox" name="ingredient" className={styles.checkbox} />
        </>
    )
}