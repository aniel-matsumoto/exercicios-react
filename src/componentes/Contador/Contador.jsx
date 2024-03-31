import React from "react";

const Contador = () => {
  const [numero1, setNumero1] = React.useState(0);
  const [numero2, setNumero2] = React.useState(0);

  return (
    <div>
      <input
        type="number"
        value={numero1}
        onChange={(event) => setNumero1(+event.target.value)}
      />
      <div>{numero1 + numero2}</div>
      <input
        type="number"
        value={numero2}
        onChange={(event) => setNumero2(+event.target.value)}
      />
    </div>
  );
};
export default Contador;
