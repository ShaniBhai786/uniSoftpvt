import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Organizations from "./pages/Organizations";
import Teams from "./pages/Teams";
import NavBar from "./components/NavBar";
import Blogs from "./pages/Blogs";
import Quote from "./components/Quote";

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
        <Quote />
      </div>
    </>
  );
}

export default App;
