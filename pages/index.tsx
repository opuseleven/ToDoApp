import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { ToDoListContainer } from '../components';
import { ToDo } from '../types';

const Home: NextPage = () => {

  const defaultItem = {
    id: 1,
    name: '',
    completed: false
  }
  const defaultList = [defaultItem];

  const [arr, setArr] = useState<ToDo[]>(defaultList);

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

        <ToDoListContainer list={arr} />

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
