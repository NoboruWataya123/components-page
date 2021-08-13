import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import Button from '../components/Button/Button';
import { Tag } from '../components/Tag/Tag';

export default function Home(): JSX.Element {
  return (
    <>
    <Head>
      <title>Buttons</title>
    </Head>
    <div className={styles.wrapper}>
      <div className={styles.sidebar}></div>
      <div className={styles.container}>
      <h1 className={styles.heading}>Buttons</h1>
       <div className={styles.buttons}>
         <div>
           <label htmlFor="button">color=&apos;ghost&apos;</label>
           <Button color='ghost' size='s'>Ghost</Button>
         </div>
         <div>
           <label htmlFor="button">color=&apos;primary&apos;</label>
           <Button color='primary' size='m'>Primary</Button>
         </div>
         <div>
           <label htmlFor="button">color=&apos;default&apos;</label>
           <Button>Default</Button>
         </div>
         <div>
           <label htmlFor="button">color=&apos;danger&apos;</label>
           <Button color='danger'>Danger</Button>
         </div>
       </div>
      </div>
    </div>
    </>
  )
}
