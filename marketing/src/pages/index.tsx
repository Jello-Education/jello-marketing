import Head from "next/head";

import styles from "./home.module.scss";

import Contato from "./Contato";

import { Contact } from "../components/Contact";

export default function Page() {
  return (
    <>
      <Head>
        <title>Jello</title>
      </Head>
      <main className={styles.contentContainer}>
        <Contato />
      </main>
    </>
  );
}
