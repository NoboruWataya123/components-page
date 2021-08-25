import Head from 'next/head';
import Link from 'next/link'
import { withLayout } from '../layout/Layout/Layout';
import styles from '../styles/Input.module.css'
import InputComponent from '../components/Input/Input';
import {Done} from "@material-ui/icons";


function Input(): JSX.Element {
  return (
    <>
    <Head>
      <title>Buttons</title>
    </Head>
    <div className={styles.wrapper}>
        <div className={styles.input}>
          <label htmlFor="default">&lt;InputComponent&gt; </label>
          <br />
          <label htmlFor="default">default</label>
          <br />
          <InputComponent name='default' placeholder='Default'></InputComponent>
        </div>
        <div className={styles.input}>
        <label htmlFor="ghost">ghost</label>
          <br />
          <InputComponent color='ghost' placeholder='Ghost'></InputComponent>
        </div>
        <div className={styles.input}>
        <label htmlFor="primary">primary</label>
          <br />
          <InputComponent color='primary' placeholder='Primary'></InputComponent>
        </div>
        <div className={styles.input}>
        <label htmlFor="green">green</label>
          <br />
          <InputComponent color='green' placeholder='Green'></InputComponent>
        </div>
        <div className={styles.input}>
        <label htmlFor="danger">danger</label>
          <br />
          <InputComponent color='danger' placeholder='Danger'></InputComponent>
        </div>
        <div className={styles.input}>
        <label htmlFor="grey">grey</label>
          <br />
          <InputComponent color='grey' placeholder='Grey'></InputComponent>
        </div>
    </div>
    </>
  )
}
export default withLayout(Input);
