import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Company from "./components/pages/company/Company";
import Contact from "./components/pages/contact/Contact";
import Container from "./components/layout/container/Container";
import NavBar from "./components/layout/navbar/NavBar";
import Footer from "./components/layout/footer/Footer";
import Projects from "./components/pages/projects/Projects";
import NewProjects from "./components/pages/newProjects/NewProjects";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newprojects" element={<NewProjects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
