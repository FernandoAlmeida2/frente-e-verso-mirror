

import styles from "./searchResponsive.module.css";

type Props = {
  toggle: Function;
};

export default function SearchResponsive({ toggle }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <img
          className={styles.logo}
          src="/images/logo.svg"
          alt="Logo Frente e Verso"
        />

        <div className={styles.description}>
          <div>
            Nonononon onononono nononono nononononono no nono nononono
            nononononononononono. Nono nononononono nonononononono nononono no
            nonononononono no nono nonononono nono.
          </div>
          <button className={styles.moreButton}>Saiba Mais</button>
        </div>
      </div>

      <div className={styles.searchResponsive}>
        <input className={styles.searchInput} />
        <button className={styles.searchButton}>Pesquisar</button>
      </div>

      <img
        className={styles.closeIcon}
        src="/images/closeCircle.svg"
        alt="Sair da pesquisa"
        onClick={() => toggle()}
      />
    </div>
  );
}
