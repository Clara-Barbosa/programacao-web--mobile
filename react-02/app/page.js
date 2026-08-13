import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.pagina}>
      <h1 className={styles.titulo}>Meu primeiro Site</h1>

      <p className={styles.texto}>
        Olá, meu nome é Clara e esse é o meu primeiro projeto de desenvolvimento web.
      </p>

      <button className={styles.botao}>
        Conheça meu projeto!
      </button>
    </main>
  );
}