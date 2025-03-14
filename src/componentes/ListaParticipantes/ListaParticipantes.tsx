import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import "./estilos.css";

const ListaParticipantes = () => {
  const participantes: string[] = useListaDeParticipantes();

  return (
    <ul>
      {participantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
