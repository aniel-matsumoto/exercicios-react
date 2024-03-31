import React from "react";

const CambioDolar = () => {
  const taxaCambio = 5;

  const [valorDolar, setValorDolar] = React.useState(0);
  const [valorReal, setValorReal] = React.useState(0);

  const conversaoDolar = (event) => {
    const valorDigitado = (+event.target.value);
    setValorDolar(valorDigitado);
    setValorReal(valorDigitado / taxaCambio);
  };

  const conversaoReal = (event) => {
    const valorDigitado = (+event.target.value);
    setValorReal(valorDigitado);
    setValorDolar(valorDigitado * taxaCambio);
  };

  return (
    <div>
      <input type="number" value={valorDolar} onChange={conversaoDolar} />
      reais é igual a
      <input type="number" value={valorReal} onChange={conversaoReal} />
      dólares
    </div>
  );
};

export default CambioDolar;
