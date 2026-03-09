import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Organizations from "./pages/Organizations";
import Teams from "./pages/Teams";
import NavBar from "./components/NavBar";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Home />
        <About />
        <Contact />
        <Organizations />
        <Teams />
        <Blogs />
      </div>
    </>
  );
}

export default App;
