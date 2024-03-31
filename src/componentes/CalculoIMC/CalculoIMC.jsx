import React from "react";

const CalculoIMC = () => {
  const [peso, setPeso] = React.useState(0);
  const [altura, setAltura] = React.useState(0);
  const [imc, setImc] = React.useState(0);
  const [status, setStatus] = React.useState("");

  const calcularIMC = () => {
    const calculo = peso / (altura * altura);
    setImc(calculo);

    if (calculo >30) {
        setStatus ('obeso')
  }
  else if(calculo>25 && calculo<=30){
        setStatus ('sobrepeso')
  }
  else if (calculo>18.5 && calculo<=25){

      setStatus ('peso normal')
    }
    else if(calculo<18.5){
        setStatus ('abaixo do peso')
    }
}

  return (
    <div>
      <input
        type="number"
        value={peso}
        onChange={(event) => setPeso(+event.target.value)}
      />
      Peso (kg)
      <input
        type="number"
        value={altura}
        onChange={(event) => setAltura(+event.target.value)}
      />
      Altura (m)
      <button onClick={calcularIMC}>Calcular</button>
      <div>
        IMC: {imc.toFixed(2)} {status}
      </div>
    </div>
  );
};

export default CalculoIMC
