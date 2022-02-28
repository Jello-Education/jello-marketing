/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <img src="/images/jello.png" alt="Logo da Jello" />
        </div>
      </div>
    </header>
  );
}
