import React, { FunctionComponent } from 'react'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'

function Layout({children}:LayoutProps):JSX.Element {
    return (
        <>
            <div className={styles.wrapper}>
                    <Sidebar className={styles.sidebar}/>
                    <div className={styles.body}>
                        {children}
                    </div>
                <Footer className={styles.footer}/>
            </div>
        </>
    )
}

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element{
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
