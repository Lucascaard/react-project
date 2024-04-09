
import Projectform from "../../projectForm/ProjectForm";
import styles from "./NewProjects.module.css";
import { useNavigate  } from 'react-router-dom';

function NewProjects() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        ContentType: "applicaton/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate("/projects", { message: "Projeto criado com sucesso" });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar serviços!</p>
      <Projectform handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProjects;
