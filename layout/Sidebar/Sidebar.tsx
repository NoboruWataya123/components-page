import React from 'react'
import { SidebarProps } from './Sidebar.props'
import Link from 'next/link'
import styles from './Sidebar.module.css'

export default function Sidebar({...props}:SidebarProps):JSX.Element {
    return (
        <>
            <div className={styles.wrapper} {...props}>
                <div className={styles.logo}>
                    Components
                </div>
                <ul className={styles.list}>
                    <li className={styles.list__item}><Link href='/'>Main</Link></li>
                    <li className={styles.list__item}><Link href='/'>Buttons</Link></li>
                    <li className={styles.list__item}><Link href='/input'>Inputs</Link></li>
                    <li className={styles.list__item}><Link href='/'>Typography</Link></li>
                </ul>
            </div>
        </>
    )
}
