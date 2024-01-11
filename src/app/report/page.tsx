"use client";

import SidebarItem from "@/components/SidebarItem/SidebarItem";
import styles from "./page.module.css";
import techNotes from "@/app/lib/placeholder-data";
import { useSearchParams } from "next/navigation";

export default function Report() {
  const id = useSearchParams().get("id");

  const report = techNotes.filter((note) => note.id === Number(id))[0].pdfName;
  return (
    <main className={styles.main}>
      <img
          className={styles.logoResponsive}
          src="images/logo.svg"
          alt="Logo Frente e Verso"
        />
      <aside className={styles.sidebar}>
        <SidebarItem text={"Gráficos do relatório"} pdfName={report} />
        <SidebarItem text={"Códigos utilizados"} pdfName={report} />
        <SidebarItem text={"Relatório em PDF"} pdfName={report} />
      </aside>
      <div className={styles.content}>
        <iframe src={`/data/${report}.pdf`} className={styles.report}></iframe>
        <div className={styles.shareText}>Compartilhe:</div>
        <div className={styles.iconsList}>
          <a
            href="https://twitter.com/intent/tweet?url=http://localhost:3000/report?id=1"
            className="twitter-hashtag-button"
            data-show-count="false"
          >
            <img
              className={styles.icon}
              src="/images/twitter.svg"
              alt="Twitter"
            />
          </a>
          <img
            className={styles.icon}
            src="/images/instagram.svg"
            alt="Instagram"
          />
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Freport%3Fid%3D1&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore"
          >
            <img
              className={styles.icon}
              src="/images/facebook.svg"
              alt="Facebook"
            />
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=http://localhost:3000/report?id=1&title=vacinacao_infantil&source=Iplanfor">
            <img
              className={styles.icon}
              src="/images/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
