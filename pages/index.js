import Head from 'next/head'
import styles from '../styles/Home.module.css'
import{Footer} from"../components/Footer"
import{Main} from'../components/main'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main page = "index"/>
      
      <Footer/>
    </div>
  )
}
