import React from 'react'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'

export default function Footer({className, ...props}:FooterProps):JSX.Element {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
                <div>Ddk components</div>
                <div><a href="#">Github</a></div>
                <div className={styles.text}><a href="#">Twitter</a></div>
        </footer>
    )
}
