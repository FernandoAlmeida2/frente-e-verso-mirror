import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.footerText}>
                <div>R. Vinte e Cinco de Março, 268 - Centro,<br />Fortaleza - CE, 60060-120</div>
                <div>observatoriodefortaleza@iplanfor.fortaleza.ce.gov.br</div>
            </div>
            <div>
                <img src="support.svg" alt="Colaboradores" />
            </div>
        </footer>
    )
}

