import React from "react";

const AdicionarNome = () => {
  const [nome, setNome] = React.useState("");
  const [lista, setLista] = React.useState([]);

  const Adicionar = () => {
    lista.push(nome);
    setLista([...lista]);
    setNome("");
  };

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <button onClick={Adicionar}>adicionar </button>
      <ul>
        {lista.map((item, index) => {
          return <li key={index}> {item}</li>;
        })}
      </ul>
    </div>
  );
};
export default AdicionarNome;
