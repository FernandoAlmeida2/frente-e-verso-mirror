import Link from "next/link";
import styles from "./sidebarItem.module.css";

type Props = {
  text: string;
  pdfName: string;
};

export default function SidebarItem({ text, pdfName }: Props) {
  return (
    <div className={styles.sidebarItem}>
      <img
        className={styles.downIcon}
        src="/images/download_icon.svg"
        alt="Download"
      />
      <a href={`data/${pdfName}.pdf`} download>{text}</a>
    </div>
  );
}
