import React from "react";

const Diminuir = () => {
  const [numero01, setNumero1] = React.useState(0);
  const [numero02, setNumero2] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);

  const soma = () => {
    const resultado = numero01 - numero02;
    setResultado(resultado);
  };

  return (
    <div>
      <input
        type="number"
        value={numero01}
        onChange={(event) => setNumero1(+event.target.value)}
      />
      -
      <input
        type="number"
        value={numero02}
        onChange={(event) => setNumero2(+event.target.value)}
      />
      <button onClick={soma}>diminuir</button>
      <div>{resultado}</div>
    </div>
  );
};
export default Diminuir;
