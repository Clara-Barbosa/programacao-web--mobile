"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);

  const [dadosJogador1, setDadosJogador1] = useState([1, 1]);
  const [dadosJogador2, setDadosJogador2] = useState([1, 1]);

  const [jogouJogador1, setJogouJogador1] = useState(false);
  const [jogouJogador2, setJogouJogador2] = useState(false);

  const [placarJogador1, setPlacarJogador1] = useState(0);
  const [placarJogador2, setPlacarJogador2] = useState(0);

  const [resultadoRodada, setResultadoRodada] = useState("");
  const [resultadoFinal, setResultadoFinal] = useState("");

  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  function sortearDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function jogarJogador1() {
    const dado1 = sortearDado();
    const dado2 = sortearDado();

    setDadosJogador1([dado1, dado2]);

    setJogouJogador1(true);
    setJogouJogador2(false);

    setResultadoRodada("");
  }

  function jogarJogador2() {
    const dado1 = sortearDado();
    const dado2 = sortearDado();

    const novosDadosJogador2 = [dado1, dado2];

    setDadosJogador2(novosDadosJogador2);
    setJogouJogador2(true);

    const somaJogador1 = dadosJogador1[0] + dadosJogador1[1];
    const somaJogador2 = novosDadosJogador2[0] + novosDadosJogador2[1];

    let novoPlacarJogador1 = placarJogador1;
    let novoPlacarJogador2 = placarJogador2;

    if (somaJogador1 > somaJogador2) {
      novoPlacarJogador1 = placarJogador1 + 1;
      setPlacarJogador1(novoPlacarJogador1);
      setResultadoRodada("Jogador 1 venceu a rodada!");
    } else if (somaJogador2 > somaJogador1) {
      novoPlacarJogador2 = placarJogador2 + 1;
      setPlacarJogador2(novoPlacarJogador2);
      setResultadoRodada("Jogador 2 venceu a rodada!");
    } else {
      setResultadoRodada("Empate na rodada!");
    }

    if (rodada === 5) {
      finalizarJogo(novoPlacarJogador1, novoPlacarJogador2);
    }
  }

  function proximaRodada() {
    if (rodada >= 5) {
      return;
    }

    setRodada((rodadaAtual) => rodadaAtual + 1);

    setDadosJogador1([1, 1]);
    setDadosJogador2([1, 1]);

    setJogouJogador1(false);
    setJogouJogador2(false);

    setResultadoRodada("");
  }

  function finalizarJogo(totalJogador1, totalJogador2) {
    setJogoFinalizado(true);

    if (totalJogador1 > totalJogador2) {
      setResultadoFinal("Jogador 1 venceu o jogo!");
    } else if (totalJogador2 > totalJogador1) {
      setResultadoFinal("Jogador 2 venceu o jogo!");
    } else {
      setResultadoFinal("Empate geral!");
    }
  }

  function jogarNovamente() {
    setRodada(1);

    setDadosJogador1([1, 1]);
    setDadosJogador2([1, 1]);

    setJogouJogador1(false);
    setJogouJogador2(false);

    setPlacarJogador1(0);
    setPlacarJogador2(0);

    setResultadoRodada("");
    setResultadoFinal("");

    setJogoFinalizado(false);
  }

  return (
    <div className="jogo-container">
      <div className="topo">
        <h1>Jogo de Dados</h1>

        <div className="rodada">
          Rodada {rodada} / 5
        </div>
      </div>

      <div className="jogadores">
        <section className="jogador-card">
          <h2>Jogador 1</h2>

          <div className="dados-area">
            <Dado valor={dadosJogador1[0]} />
            <Dado valor={dadosJogador1[1]} />
          </div>

          <p className="soma">
            Soma:{" "}
            <strong>
              {jogouJogador1
                ? dadosJogador1[0] + dadosJogador1[1]
                : "-"}
            </strong>
          </p>

          <button
            className="botao-jogar"
            onClick={jogarJogador1}
            disabled={jogouJogador1 || jogoFinalizado}
          >
            Jogar
          </button>
        </section>

        <section className="jogador-card">
          <h2>Jogador 2</h2>

          <div className="dados-area">
            <Dado valor={dadosJogador2[0]} />
            <Dado valor={dadosJogador2[1]} />
          </div>

          <p className="soma">
            Soma:{" "}
            <strong>
              {jogouJogador2
                ? dadosJogador2[0] + dadosJogador2[1]
                : "-"}
            </strong>
          </p>

          <button
            className="botao-jogar"
            onClick={jogarJogador2}
            disabled={!jogouJogador1 || jogouJogador2 || jogoFinalizado}
          >
            Jogar
          </button>
        </section>
      </div>

      <div className="placar-card">
        <h3>Placar</h3>

        <div className="placar-valores">
          <span>
            Jogador 1
            <strong>{placarJogador1}</strong>
          </span>

          <span>
            Jogador 2
            <strong>{placarJogador2}</strong>
          </span>
        </div>
      </div>

      {resultadoRodada && (
        <div className="resultado">
          <h3>Resultado da rodada</h3>
          <p>{resultadoRodada}</p>
        </div>
      )}

      {!jogoFinalizado &&
        jogouJogador1 &&
        jogouJogador2 &&
        rodada < 5 && (
          <button
            className="botao-proxima"
            onClick={proximaRodada}
          >
            Próxima Rodada
          </button>
        )}

      {jogoFinalizado && (
        <div className="resultado-final">
          <h2>Resultado Final</h2>

          <p>{resultadoFinal}</p>

          <button
            className="botao-novamente"
            onClick={jogarNovamente}
          >
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}