import Head from "next/head";
import styles from "../styles/Home.module.css";
import {DynoFormContainer} from "containers";
import {FormConfig} from "utils";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic Forms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynoFormContainer config={FormConfig} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/pkrawat1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Pankaj
        </a>
      </footer>
    </div>
  );
}
