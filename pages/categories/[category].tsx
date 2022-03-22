import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params === undefined) {
    return {
      notFound: true,
    };
  }
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${context.params.category}`
  );
  const joke = await response.json();
  return {
    props: {
      joke: joke.value,
    },
  };
};

type RandomJokeProps = {
  joke: string;
};
const RandomJoke: React.FC<RandomJokeProps> = ({ joke }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chuck Noris Joke</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Chuck Noris Joke</h1>
        <div className={styles.description}>{joke}</div>
      </main>

      <footer className={styles.footer}>
        <div>Made by Miora</div>
      </footer>
    </div>
  );
};

export default RandomJoke;
