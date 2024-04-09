import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function Projectform({ btnText }) {
  const [categories, setCategories] = useState([]);

  /* Hook 'useEffect' usado para renderizar uma unica vez por load
  O useEffect é chamado após a renderização do componente. Ele pode ser usado para realizar várias tarefas, como buscar dados, manipular o DOM diretamente, ou realizar qualquer outra operação que não seja renderização. Isso o torna ideal para operações que precisam ocorrer após a renderização do componente, como atualizações de estado assíncronas, inscrições em eventos, ou limpeza de recursos.
  */
useEffect(() => {
  fetch("http://localhost:5000/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setCategories(data);
    })
    .catch((error) => console.log(error));
},[])

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto:"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto:"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default Projectform;
