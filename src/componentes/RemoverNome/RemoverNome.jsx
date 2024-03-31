import React from "react";

const RemoverNome = () => {
  const [nome, setNome] = React.useState("");
  const [lista, setLista] = React.useState([]);

  const Adicionar = () => {
    lista.push(nome);
    setLista([...lista]);
    setNome("");
  };
  const remover = (index) => {
    lista.splice(index, 1);
    setLista([...lista])
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
          return (
          <li key={index}> 
          {item}
          <button onClick={()=>remover(index)} >remover</button>
          </li>
          )
        })}
      </ul>
    </div>
  );
};
export default RemoverNome;
