import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ThemeContextProvider from '../components/contextApi/ThemeContext';
import TodoApp from '../components/todoApp';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [ismodel, setIsModel] = useState(true)
  return (
    <div className={styles.maiContainer}>
      <Head>
        <title>Next Context</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <ThemeContextProvider>
        <TodoApp />
     </ThemeContextProvider>

    </div>
  )
}
