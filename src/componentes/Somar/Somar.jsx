import React from "react";

const Somar = () => {
  const [numero1, setNumero1] = React.useState(0);
  const [numero2, setNumero2] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);

  const calcular = () => {
    const soma = numero1 + numero2;
    setResultado(soma);
  };

  return (
    <div>
      <input
        type="number"
        value={numero1}
        onChange={(event) => setNumero1(+event.target.value)}
      />
      +
      <input
        type="number"
        value={numero2}
        onChange={(event) => setNumero2(+event.target.value)}
      />
      <button onClick={calcular}>somar</button>
      <div>Resultado: {resultado}</div>
    </div>
  );
};

export default Somar;