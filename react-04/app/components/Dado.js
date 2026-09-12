export default function Dado({ valor }) {
  return (
    <img
      src={`/dados/dado${valor}.png`}
      alt={`Dado mostrando o valor ${valor}`}
      width={120}
      height={120}
    />
  );
}