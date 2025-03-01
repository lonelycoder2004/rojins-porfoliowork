import NavBars from "./components/NavBars";
import HomePage from "./components/HomePage";
import Work from "./components/Work";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <NavBars />
      <HomePage />
      <Work />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
