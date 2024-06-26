import { Link } from "react-router-dom";
import Container from "../container/Container";
import Styles from "../navbar/Navbar.module.css";
import logo from "../../../img/costs_logo.png";

function NavBar() {
  return (
    <nav className={Styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={Styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={Styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={Styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;
