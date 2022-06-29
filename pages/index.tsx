import type { NextPage } from 'next'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles['demo']}>
      <Header />
      <h1 className={styles['demo-item']}>Home</h1>
    </div>
  )
}

export default Home
