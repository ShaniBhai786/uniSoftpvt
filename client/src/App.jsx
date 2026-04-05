import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Secondary from "./pages/Secondary";
import Contact from "./pages/Contact";
import UniSoftTech from "./pages/UniSoftTech";
import Quote from "./components/Quote";
import EnrollmentForm from "./components/EnrollmentForm";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/school" element={<Secondary />} >
          <Route path="enrollment-from" element={<EnrollmentForm />} />
          </Route>
          <Route path="/tech" element={<UniSoftTech />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
