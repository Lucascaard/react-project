function Saudacao({ nome }) {
  function GerarSaudacao(AlgumNome) {
    return `Olá ${AlgumNome}, tudo bem?`;
  }

  return <>{nome && <p>{GerarSaudacao(nome)} </p>}</>;
}

export default Saudacao;
