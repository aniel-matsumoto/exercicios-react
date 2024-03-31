import React, { useState } from 'react';

const MostrarTela = () => {
  const [conteudo, setConteudo] = useState('');

  const pagina = (texto) => {
    setConteudo(texto);
  };

  return (
    <div>
      <button onClick={() => pagina('Conteúdo Tela 1')}>Tela I</button>
      <button onClick={() => pagina('Conteúdo Tela 2')}>Tela II</button>
      <button onClick={() => pagina('Conteúdo Tela 3')}>Tela III</button>
      <div>{conteudo}</div>
    </div>
  );
};

export default MostrarTela;