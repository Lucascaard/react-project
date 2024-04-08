import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Container from "./components/layout/container/Container";
import NavBar from "./components/layout/navbar/NavBar";
import Footer from "./components/layout/footer/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
