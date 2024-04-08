import styles from "./Home.module.css";
import savings from "../../../img/savings.svg";
import LinkButton from "../../layout/linkButton/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-Vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newprojects" text="Criar Projeto"></LinkButton>
      <img src={savings} alt="Costs" />
    </section>
  );
}

export default Home;
  