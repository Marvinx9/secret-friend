import "./estilos.css";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <div
        className="imagen-logo"
        role="img"
        aria-label="Logo do Sorteador"
      ></div>
      <img
        className="participantes"
        src="./imagens/participantes.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
};

export default Cabecalho;
