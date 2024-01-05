import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.content}>
        <img
          className={styles.logo}
          src="/logo.svg"
          alt="Logo Frente e Verso"
        />
        <div>
          <div>
            Nonononon onononono nononono nononononono no nono nononono<br />
            nononononononononono. Nono nononononono nonononononono<br />
            nononono no nonononononono no nono nonononono nono.
          </div>
          <button className={styles.moreButton}>Saiba mais</button>
        </div>
      </div>

    </main>
  )
}
