"use client"

import Link from "next/link";
import styles from "./footer.module.css";
import SearchResponsive from "../SearchResponsive/SearchResponsive";
import { useToggleSearch } from "@/hooks/useToggleSearch";

export default function Footer() {
  const toggleState = useToggleSearch();

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
        <div className={styles.collaborators}>
          <img src="/images/logo_desigualLab.svg" alt="Desigual Lab" className={styles.colabLogo} />
          <img src="/images/logo_whatworkcities.svg" alt="What Work Cities Certification" className={styles.colabLogo} />
          <img src="/images/colaboradores.png" alt="Colaboradores" />
        </div>
      </div>
      <div className={styles.footerResponsive}>
        <Link href="/" className={styles.footerIcon}>
          <img src="/images/inicio.svg" alt="Início" />
          Início
        </Link>
        <div className={styles.footerIcon} onClick={toggleState.toggle}>
          <img src="/images/buscar.svg" alt="Buscar" />
          Buscar
        </div>
        <Link href="/downloads" className={styles.footerIcon}>
          <img src="/images/downloads.svg" alt="Downloads" />
          Downloads
        </Link>
      </div>
      {toggleState.toggleSearch && <SearchResponsive toggle={toggleState.toggle} />}
    </footer>
  );
}
