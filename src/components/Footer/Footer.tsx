import Link from "next/link";
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
          <img src="/images/iplanfor.png" alt="Iplanfor" />
          <img src="/images/prefeitura.png" alt="Prefeitura" />
        </div>
        <img src="/images/colaboradores.png" alt="Colaboradores" />
      </div>
      <div className={styles.footerResponsive}>
        <Link href="/" className={styles.footerIcon}>
          <img src="/images/inicio.svg" alt="Início" />
          Início
        </Link>
        <div className={styles.footerIcon}>
          <img src="/images/buscar.svg" alt="Buscar" />
          Buscar
        </div>
        <Link href="/downloads" className={styles.footerIcon}>
          <img src="/images/downloads.svg" alt="Downloads" />
          Downloads
        </Link>
      </div>
    </footer>
  );
}
