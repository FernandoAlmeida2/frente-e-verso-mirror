import styles from "./page.module.css";

type Report = {
  title: string;
  downloadPath: string;
};

const mockReports: Report[] = Array(20).fill({
  title: "Relatório 1",
  downloadPath: "somePath",
});

export default function Downloads() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <img
          className={styles.logo}
          src="images/logo.svg"
          alt="Logo Frente e Verso"
        />
        <div className={styles.reportsList}>
          {mockReports.map((report, index) => (
            <button key={index} className={styles.reportItem}>
              {report.title}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
