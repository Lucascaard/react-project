import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function eviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }

  function limparEmail(e) {
    e.preventDefault();
    setUserEmail("");
  }

  return (
    <div>
      <h2>Cadastre seu Email</h2>
      <form>
        <input
          type="email"
          placeholder="Insira seu email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={eviarEmail}>
          Enviar Email
        </button>
        {userEmail && (
          <div>
            <p>o Email é: {userEmail} </p>
            <button onClick={limparEmail}>Limpar Email</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
