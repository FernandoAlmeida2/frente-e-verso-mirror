import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footerText}>
        <div>
          R. Vinte e Cinco de Março, 268 - Centro,
          <br />
          Fortaleza - CE, 60060-120
        </div>
        <div>observatoriodefortaleza@iplanfor.fortaleza.ce.gov.br</div>
      </div>
      <div className={styles.logos}>
        <div className={styles.creators}>
          <img src="iplanfor.png" alt="Iplanfor" />
          <img src="prefeitura.png" alt="Prefeitura" />
        </div>
        <img src="colaboradores.png" alt="Colaboradores" />
      </div>
    </footer>
  );
}
