import type { NextPage } from 'next'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  // const {data, error, register} = useAuth()
  return (
    <div className={styles['demo']}>
      <h1 className={styles['demo-item']}>Home Page</h1>
      {/* {data.map((user, index) => <div key={index}>{user.email}</div>)} */}
    </div>
  )
}

export default Home
