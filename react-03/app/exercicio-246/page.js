export default function Exercicio246() {
  return (
    <main style={{ padding: "20px" }}>
      <p
        style={{
          textDecoration: "underline",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Esse é um parágrafo criado para demonstrar a formatação de texto
        usando CSS.
      </p>

      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          fontWeight: "bold",
          fontFamily: '"Times New Roman", serif',
          marginRight: "20px",
        }}
      >
        Google
      </a>

      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          fontWeight: "bold",
          fontFamily: '"Times New Roman", serif',
        }}
      >
        GitHub
      </a>
    </main>
  );
}