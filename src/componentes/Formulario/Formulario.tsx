import "./estilos.css";

const Formulario = () => {
  return (
    <form className="formulario">
      <input type="text" placeholder="Insira os nomes dos participantes" />
      <button disabled={true}>Adicionar</button>
    </form>
  );
};

export default Formulario;
