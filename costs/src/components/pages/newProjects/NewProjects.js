import Projectform from "../../projectForm/ProjectForm";
import styles from "./NewProjects.module.css";

function NewProjects() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar serviços!</p>
      <Projectform btnText="Criar Projeto" />
    </div>
  );
}

export default NewProjects;
