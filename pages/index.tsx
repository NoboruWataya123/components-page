import Head from 'next/head';
import Button from '../components/Button/Button';
import Link from 'next/link'
import { withLayout } from '../layout/Layout/Layout';
import styles from '../styles/Home.module.css'


function Home(): JSX.Element {
  return (
    <>
    <Head>
      <title>Buttons</title>
    </Head>
    <div className={styles.wrapper}>
      <Button size='m' color='ghost'>ghost</Button>
    </div>
    </>
  )
}
export default withLayout(Home);
