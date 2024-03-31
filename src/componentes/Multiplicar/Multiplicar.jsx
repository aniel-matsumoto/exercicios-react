import React from "react";


const Soma = ()=>{

    const [numero01, setNumero01] = React.useState(0);
    const [numero02, setNumero02] =React.useState(0);
    const [total,setResultado] =React.useState(0)
    
    const soma =() =>{
        
        const resultado = (numero01*numero02)
        setResultado(resultado)
    }
    
    return(
        <div>

        <input type="number"
        value={numero01}
        onChange={(event)=> setNumero01(+event.target.value)} />
        *
        <input type="number"
        value={numero02}
        onChange={(event)=>setNumero02(+event.target.value)} />
        <button onClick={soma}>multiplicar</button>
        <div>{total}</div>
        </div>
    )
}
export default Soma