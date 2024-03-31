import React from "react";

const CambioEuro = () => {
  const taxaCambio = 5.5;

  const [valorEuro, setValorEuro] = React.useState(0);
  const [valorReal, setValorReal] = React.useState(0);

  const conversaoEuro = (event) => {
    const valorDigitado = +event.target.value;
    setValorEuro(valorDigitado);
    setValorReal(valorDigitado * taxaCambio);
  };

  const conversaoReal = (event) => {
    const valorDigitado = +event.target.value;
    setValorReal(valorDigitado);
    setValorEuro(valorDigitado / taxaCambio);
  };

  return (
    <div>
      <input type="number" value={valorReal} onChange={conversaoReal} />
      reais é igual a
      <input type="number" value={valorEuro} onChange={conversaoEuro} />
      euros
    </div>
  );
};

export default CambioEuro;
