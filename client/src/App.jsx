import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Secondary from "./pages/Secondary";
import Contact from "./pages/Contact";
import UniSoftTech from "./pages/UniSoftTech";
import Quote from "./components/Quote";
import EnrollmentForm from "./components/EnrollmentForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/school" element={<Secondary />} />
          <Route path="/tech" element={<UniSoftTech />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/enrollment-from" element={<EnrollmentForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
