import Image from 'next/image'
import styles from './page.module.css'
import useFamily from './dashboard/hooks/useFamily'

export default function Home() {


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Family Cashflow</h1>
      </div>
    </main>
  )
}
