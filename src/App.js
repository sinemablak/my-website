import "./App.css";

import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Profile from "./components/Profile/Profile";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";

import { useData } from "./contexts/ContextData";
import { Spinner } from "reactstrap";

function App() {
  const { data } = useData();

  if (Object.keys(data).length === 0)
    return (
      <div className="w-100  vh-100 d-flex justify-content-center align-items-center">
        <Spinner color="primary" size="xxl" />
      </div>
    );

  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
