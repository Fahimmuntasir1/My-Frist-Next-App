import Head from "next/head";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>About</title>
        <meta name="description" content="Free Web tutorials"></meta>
        <meta name="keyword" content="Html, css, js, javascript, react, next js, next, first nextjs, vscode "></meta>
      </Head>

      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">learn Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
};

export default About;
