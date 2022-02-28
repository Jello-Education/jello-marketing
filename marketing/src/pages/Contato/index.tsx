import Head from "next/head";

import styles from "./home.module.scss";

import { Contact } from "../../components/Contact";
import { Header } from "../../components/Header";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Jello</title>
      </Head>
      <main className={styles.container}>
        <Header />
        <Contact />
      </main>
    </>
  );
}
