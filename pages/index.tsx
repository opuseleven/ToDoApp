import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDoApp</title>
        <meta name="description" content="ToDoApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ToDoApp
        </h1>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
