import { useEffect, useState } from "react";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";
import Card from "../componentes/Card";
import "./Sorteio.css";
import Cabecalho from "../componentes/Cabecalho";
import { useNavigate } from "react-router-dom";

const Sorteio = () => {
  const participantes = useListaDeParticipantes();
  const redirecionar = useNavigate();

  useEffect(() => {
    if (participantes.length < 3) {
      redirecionar("/");
    }
  }, [participantes, redirecionar]);

  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  const voltar = (evento: React.FormEvent) => {
    evento.preventDefault();
    setAmigoSecreto("");
    setParticipanteDaVez("");
  };

  return (
    <>
      <Cabecalho />
      <Card>
        <section className="sorteio">
          <h2>Quem vai tirar o papelzinho?</h2>
          <form onSubmit={sortear}>
            <select
              required
              name="participanteDaVez"
              id="participanteDaVez"
              value={participanteDaVez}
              onChange={(evento) => setParticipanteDaVez(evento.target.value)}
            >
              <option className="opcoes" value="" disabled>
                Selecione o seu nome
              </option>
              {participantes.map((participante) => (
                <option className="opcoes" key={participante}>
                  {participante}
                </option>
              ))}
            </select>
            <p>Clique em sortear para ver quem é seu amigo secreto!</p>
            {amigoSecreto ? (
              <>
                <button className="botao-sortear" onClick={voltar}>
                  Voltar
                </button>
                <p className="resultado" role="alert">
                  {amigoSecreto}
                </p>
              </>
            ) : (
              <button className="botao-sortear">Sortear</button>
            )}
          </form>
          <footer className="sorteio">
            <img
              src="/imagens/aviao.png"
              className="aviao"
              alt="Um desenho de um avião de papel"
            />
          </footer>
        </section>
      </Card>
    </>
  );
};

export default Sorteio;
