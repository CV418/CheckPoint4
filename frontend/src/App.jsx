/* eslint-disable import/no-unresolved */
import Login from "@components/Login";
import PageProfil from "@components/PageProfil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "@components/Footer";
import BienDetails from "@components/BienDetails";
import AjoutBien from "@components/AjoutBien";
import SearchBien from "@components/SearchBien";
import UpdateProfil from "@components/UpdateProfil";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profil/:id" element={<PageProfil />} />
          <Route path="/login" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/biendetails/:id" element={<BienDetails />} />
          <Route path="/ajoutbien" element={<AjoutBien />} />
          <Route path="/searchbien" element={<SearchBien />} />
          <Route path="/modificationprofil/:id" element={<UpdateProfil />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
