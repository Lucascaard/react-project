import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Container from "./components/container/Container";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/empresa" element={<Empresa />} />
          <Route exact path="/contato" element={<Contato />} />
        </Routes>
      </Container>
      <Footer> </Footer>
    </Router>
  );
}

export default App;
