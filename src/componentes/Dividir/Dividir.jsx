import React, { useState } from "react";

const Dividir = () => {
  const [numero01, setNumero01] = React.useState(0);
  const [numero02, setNumero02] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);

  const soma = () => {
    const total = numero01 / numero02;

    setResultado(total);
  };

  return (
    <div>
      <input
        type="number"
        value={numero01}
        onChange={(event) => setNumero01(+event.target.value)}
      />
      /
      <input
        type="number"
        value={numero02}
        onChange={(event) => setNumero02(+event.target.value)}
      />
      <button onClick={soma}>dividir</button>
      <div>{resultado}</div>
    </div>
  );
};
export default Dividir;
