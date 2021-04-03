import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Virtual Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.Header}>The start of a wonderful adventure!</h1>
    </>
  )
}
