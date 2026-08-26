export default function Exercicio263() {
  const produtos = [
    {
      nome: "Tênis Esportivo",
      preco: "R$ 199,90",
      imagem: "/calcado1.jpg",
    },
    {
      nome: "Tênis Casual",
      preco: "R$ 159,90",
      imagem: "/calcado2.jpg",
    },
    {
      nome: "Sapato Social",
      preco: "R$ 249,90",
      imagem: "/calcado3.jpg",
    },
    {
      nome: "Tênis Running",
      preco: "R$ 219,90",
      imagem: "/calcado4.jpg",
    },
    {
      nome: "Sapatênis",
      preco: "R$ 179,90",
      imagem: "/calcado5.jpg",
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>Passo Calçados</h1>

      <section
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {produtos.map((produto, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "green",
              padding: "15px",
              width: "180px",
              textAlign: "center",
            }}
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              style={{
                width: "150px",
                height: "120px",
                objectFit: "cover",
              }}
            />

            <h2>{produto.nome}</h2>

            <p>{produto.preco}</p>
          </div>
        ))}
      </section>

      <footer
        style={{
          backgroundColor: "gray",
          marginTop: "30px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        Passo Calçados
      </footer>
    </main>
  );
}