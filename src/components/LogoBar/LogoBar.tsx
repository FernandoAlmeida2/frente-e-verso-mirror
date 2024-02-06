import styles from "./logoBar.module.css"

export default function LogoBar() {
    return (
        <div className={styles.logoContainer}>
            <img
            className={styles.logo}
            src="/images/logo_vertical.svg"
            alt="Logo Frente e Verso"
          />
        </div>
    )
}