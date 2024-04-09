import styles from "./Count.module.css";

import React, { useState } from "react";

//Exemplificação de como é a utilização do Hook useState do React

function Count() {
  // Inicializa o estado com o valor 0
  const [count, setCount] = useState(0);

  function CountPlusPlus() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={CountPlusPlus} className={styles.btn} >Você clicou {count} vezes aqui</button>
    </div>
  );
}

export default Count;
